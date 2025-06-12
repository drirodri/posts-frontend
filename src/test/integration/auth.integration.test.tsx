import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthProvider } from "../../hooks/auth/AuthProvider";
import { useAuth } from "../../hooks/auth/useAuthHook";
import { UserType } from "../../types/auth";

// Mock the auth service
vi.mock("../../services/auth", () => ({
  AuthService: {
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
    getCurrentUser: vi.fn(),
    refreshToken: vi.fn(),
    isAuthenticated: vi.fn(),
    getAccessToken: vi.fn(),
    setAccessToken: vi.fn(),
    removeAccessToken: vi.fn(),
  },
}));

// Simple test component that uses the useAuth hook
const AuthTestComponent = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    refreshToken,
    isAdmin,
    isModerator,
  } = useAuth();
  const handleTestLogin = async () => {
    try {
      await login({ email: "test@example.com", password: "password" });
    } catch {
      // Error will be in context
    }
  };

  const handleTestRegister = async () => {
    try {
      await register({
        name: "Test User",
        email: "test@example.com",
        password: "password",
      });
    } catch {
      // Error will be in context
    }
  };

  const handleTestRefresh = async () => {
    try {
      await refreshToken();
    } catch {
      // Error will be in context
    }
  };

  return (
    <div>
      <div data-testid="user">{user ? user.name || user.email : "No user"}</div>
      <div data-testid="authenticated">
        Authenticated: {isAuthenticated.toString()}
      </div>
      <div data-testid="loading">Loading: {isLoading.toString()}</div>
      <div data-testid="admin">Is Admin: {isAdmin().toString()}</div>
      <div data-testid="moderator">
        Is Moderator: {isModerator().toString()}
      </div>
      <div data-testid="error">{error || "No error"}</div>

      <button onClick={handleTestLogin}>Test Login</button>
      <button onClick={handleTestRegister}>Test Registration</button>
      <button onClick={logout}>Logout</button>
      <button onClick={handleTestRefresh}>Test Token Refresh</button>

      {error && <div data-testid="error-message">{error}</div>}
      {!error && isAuthenticated && (
        <div data-testid="success">Login successful</div>
      )}
      {!error && !isLoading && !isAuthenticated && (
        <div data-testid="logged-out">Logged out</div>
      )}
    </div>
  );
};

// Integration tests that test the whole auth flow
describe("Auth Integration Tests", () => {
  let AuthService: typeof import("../../services/auth").AuthService;

  beforeEach(async () => {
    // Import and setup mocks
    const authModule = await import("../../services/auth");
    AuthService = authModule.AuthService;
    vi.clearAllMocks();

    // Default mock setup
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(false);
    vi.mocked(AuthService.getAccessToken).mockReturnValue(null);

    // Clear localStorage
    localStorage.clear();
  });

  const renderWithAuthProvider = (component: React.ReactElement) => {
    return render(<AuthProvider>{component}</AuthProvider>);
  };

  it("should complete successful login flow", async () => {
    const user = userEvent.setup();

    // Mock successful login
    vi.mocked(AuthService.login).mockResolvedValue({
      accessToken: "mock-token",
      userId: 1,
      email: "test@example.com",
    });
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "test@example.com",
      role: UserType.USER,
    });

    renderWithAuthProvider(<AuthTestComponent />);

    // Test login
    const loginButton = screen.getByText("Test Login");
    await user.click(loginButton);

    // Wait for login to complete
    await waitFor(() => {
      expect(screen.getByTestId("success")).toBeInTheDocument();
      expect(screen.getByTestId("authenticated")).toHaveTextContent(
        "Authenticated: true"
      );
    });
  });

  it("should handle authentication errors gracefully", async () => {
    const user = userEvent.setup();

    // Mock login failure
    vi.mocked(AuthService.login).mockRejectedValue(
      new Error("Invalid credentials")
    );

    renderWithAuthProvider(<AuthTestComponent />);

    // Try to login with invalid credentials
    const loginButton = screen.getByText("Test Login");
    await user.click(loginButton); // Should show error
    await waitFor(() => {
      expect(screen.getByTestId("error")).toHaveTextContent(
        "Invalid credentials"
      );
    });
  });

  it("should handle successful registration flow", async () => {
    const user = userEvent.setup();

    // Mock successful registration and auto-login
    vi.mocked(AuthService.register).mockResolvedValue({
      message: "Registration successful",
      data: {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        role: UserType.USER,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
    vi.mocked(AuthService.login).mockResolvedValue({
      accessToken: "mock-token",
      userId: 1,
      email: "test@example.com",
    });
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "test@example.com",
      role: UserType.USER,
    });

    renderWithAuthProvider(<AuthTestComponent />);

    // Test registration
    const registerButton = screen.getByText("Test Registration");
    await user.click(registerButton);

    // Wait for registration and auto-login to complete
    await waitFor(() => {
      expect(screen.getByTestId("success")).toBeInTheDocument();
      expect(screen.getByTestId("authenticated")).toHaveTextContent(
        "Authenticated: true"
      );
    });
  });

  it("should refresh token successfully", async () => {
    const user = userEvent.setup();

    // Setup authenticated state first
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(true);
    vi.mocked(AuthService.getAccessToken).mockReturnValue("mock-token");
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "test@example.com",
      role: UserType.USER,
    });
    vi.mocked(AuthService.refreshToken).mockResolvedValue({
      accessToken: "new-mock-token",
    });

    renderWithAuthProvider(<AuthTestComponent />);

    // Wait for initial auth to complete
    await waitFor(() => {
      expect(screen.getByTestId("authenticated")).toHaveTextContent(
        "Authenticated: true"
      );
    });

    // Test token refresh
    const refreshButton = screen.getByText("Test Token Refresh");
    await user.click(refreshButton);

    // Verify refresh was called
    await waitFor(() => {
      expect(AuthService.refreshToken).toHaveBeenCalled();
      expect(AuthService.setAccessToken).toHaveBeenCalledWith("new-mock-token");
    });
  });

  it("should logout successfully", async () => {
    const user = userEvent.setup();

    // Setup authenticated state first
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(true);
    vi.mocked(AuthService.getAccessToken).mockReturnValue("mock-token");
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "test@example.com",
      role: UserType.USER,
    });

    renderWithAuthProvider(<AuthTestComponent />);

    // Wait for initial auth to complete
    await waitFor(() => {
      expect(screen.getByTestId("authenticated")).toHaveTextContent(
        "Authenticated: true"
      );
    });

    // Test logout
    const logoutButton = screen.getByText("Logout");
    await user.click(logoutButton);

    await waitFor(() => {
      expect(screen.getByTestId("authenticated")).toHaveTextContent(
        "Authenticated: false"
      );
      expect(screen.getByTestId("logged-out")).toBeInTheDocument();
    });
  });

  it("should show role-based information correctly", async () => {
    // Test regular user
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(true);
    vi.mocked(AuthService.getAccessToken).mockReturnValue("mock-token");
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "user@example.com",
      role: UserType.USER,
    });

    renderWithAuthProvider(<AuthTestComponent />);

    await waitFor(() => {
      expect(screen.getByTestId("admin")).toHaveTextContent("Is Admin: false");
      expect(screen.getByTestId("moderator")).toHaveTextContent(
        "Is Moderator: false"
      );
    });
  });

  it("should show admin role correctly", async () => {
    // Test admin user
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(true);
    vi.mocked(AuthService.getAccessToken).mockReturnValue("mock-token");
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "admin@example.com",
      role: UserType.ADMIN,
    });

    renderWithAuthProvider(<AuthTestComponent />);

    await waitFor(() => {
      expect(screen.getByTestId("admin")).toHaveTextContent("Is Admin: true");
      expect(screen.getByTestId("moderator")).toHaveTextContent(
        "Is Moderator: true"
      );
    });
  });
});
