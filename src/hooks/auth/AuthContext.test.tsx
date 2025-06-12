import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import { AuthProvider } from "./AuthProvider";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { UserType } from "../../types/auth";

// Mock the AuthService
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

// Test component to access AuthContext
const TestComponent = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return <div>No context</div>;
  }

  const { user, isAuthenticated, isLoading, error, login, logout } = context;

  return (
    <div>
      <div data-testid="user">{user ? user.name || user.email : "No user"}</div>
      <div data-testid="isAuthenticated">{isAuthenticated.toString()}</div>
      <div data-testid="isLoading">{isLoading.toString()}</div>
      <div data-testid="error">{error || "No error"}</div>
      <button
        onClick={() =>
          login({ email: "test@example.com", password: "password" })
        }
      >
        Login
      </button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

describe("AuthContext", () => {
  let AuthService: typeof import("../../services/auth").AuthService;

  beforeEach(async () => {
    const authModule = await import("../../services/auth");
    AuthService = authModule.AuthService;
    vi.clearAllMocks();
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(false);
    vi.mocked(AuthService.getAccessToken).mockReturnValue(null);
  });

  it("should provide auth context to children", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId("user")).toHaveTextContent("No user");
    expect(screen.getByTestId("isAuthenticated")).toHaveTextContent("false");
    expect(screen.getByTestId("isLoading")).toHaveTextContent("false");
    expect(screen.getByTestId("error")).toHaveTextContent("No error");
  });
  it("should initialize with authenticated user if token exists", async () => {
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(true);
    vi.mocked(AuthService.getAccessToken).mockReturnValue("mock-token");
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "test@example.com",
      role: UserType.USER,
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("user")).toHaveTextContent("test@example.com");
      expect(screen.getByTestId("isAuthenticated")).toHaveTextContent("true");
    });
  });

  it("should handle initialization errors gracefully", async () => {
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(true);
    vi.mocked(AuthService.getAccessToken).mockReturnValue("invalid-token");
    vi.mocked(AuthService.getCurrentUser).mockRejectedValue(
      new Error("Token expired")
    );

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("user")).toHaveTextContent("No user");
      expect(screen.getByTestId("isAuthenticated")).toHaveTextContent("false");
    });
  });
  it("should handle login through context", async () => {
    const mockLoginResponse = {
      accessToken: "mock-token",
      userId: 1,
      email: "test@example.com",
    };

    vi.mocked(AuthService.login).mockResolvedValue(mockLoginResponse);
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(true);
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "test@example.com",
      role: UserType.USER,
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const loginButton = screen.getByText("Login");

    await act(async () => {
      loginButton.click();
    });

    await waitFor(() => {
      expect(screen.getByTestId("user")).toHaveTextContent("test@example.com");
      expect(screen.getByTestId("isAuthenticated")).toHaveTextContent("true");
    });
  });
  it("should handle logout through context", async () => {
    // Start with authenticated state
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(true);
    vi.mocked(AuthService.getAccessToken).mockReturnValue("mock-token");
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue({
      userId: 1,
      email: "test@example.com",
      role: UserType.USER,
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    await waitFor(() => {
      expect(screen.getByTestId("user")).toHaveTextContent("test@example.com");
    }); // Mock logout
    vi.mocked(AuthService.logout).mockReturnValue(undefined);
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(false);

    const logoutButton = screen.getByText("Logout");

    await act(async () => {
      logoutButton.click();
    });

    await waitFor(() => {
      expect(screen.getByTestId("user")).toHaveTextContent("No user");
      expect(screen.getByTestId("isAuthenticated")).toHaveTextContent("false");
    });
  });

  it("should return undefined when used outside provider", () => {
    const TestComponentOutside = () => {
      const context = useContext(AuthContext);
      return <div>{context ? "Has context" : "No context"}</div>;
    };

    render(<TestComponentOutside />);
    expect(screen.getByText("No context")).toBeInTheDocument();
  });
});
