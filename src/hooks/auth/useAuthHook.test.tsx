import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { useAuth } from "./useAuthHook";
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
    updateProfile: vi.fn(),
  },
}));

// Wrapper component for testing hooks that need AuthProvider
const createWrapper = () => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
  );
  return Wrapper;
};

describe("useAuth Hook", () => {
  let AuthService: any;
  beforeEach(async () => {
    const authModule = await import("../../services/auth");
    AuthService = authModule.AuthService;
    vi.clearAllMocks();
    // Reset all mocks to default state
    vi.mocked(AuthService.isAuthenticated).mockReturnValue(false);
    vi.mocked(AuthService.getAccessToken).mockReturnValue(null);
    vi.mocked(AuthService.login).mockReset();
    vi.mocked(AuthService.register).mockReset();
    vi.mocked(AuthService.logout).mockReset();
    vi.mocked(AuthService.getCurrentUser).mockReset();
    vi.mocked(AuthService.refreshToken).mockReset();
    vi.mocked(AuthService.setAccessToken).mockReset();
    vi.mocked(AuthService.removeAccessToken).mockReset();
    vi.mocked(AuthService.updateProfile).mockReset();
  });

  it("should provide initial auth state", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("should handle successful login", async () => {
    const mockLoginResponse = {
      accessToken: "mock-token",
      userId: 1,
      email: "test@example.com",
    };

    const mockUserResponse = {
      userId: 1,
      email: "test@example.com",
      role: UserType.USER,
    };

    vi.mocked(AuthService.login).mockResolvedValue(mockLoginResponse);
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue(mockUserResponse);

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.login({
        email: "test@example.com",
        password: "password123",
      });
    });

    expect(AuthService.login).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
    expect(AuthService.setAccessToken).toHaveBeenCalledWith("mock-token");
  });

  it("should handle login errors", async () => {
    const mockError = new Error("Invalid credentials");
    vi.mocked(AuthService.login).mockRejectedValue(mockError);

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });
    await act(async () => {
      try {
        await result.current.login({
          email: "test@example.com",
          password: "wrong-password",
        });
      } catch {
        // Expected to throw
      }
    });

    await waitFor(() => {
      expect(result.current.user).toBeNull();
      expect(result.current.error).toBe("Invalid credentials");
    });
  });
  it("should handle successful registration", async () => {
    const mockRegisterResponse = {
      message: "User registered successfully",
      data: {
        id: 1,
        name: "New User",
        email: "new@example.com",
        role: UserType.USER,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z",
      },
    };

    const mockLoginResponse = {
      accessToken: "mock-token",
      userId: 1,
      email: "new@example.com",
    };

    const mockUserResponse = {
      userId: 1,
      email: "new@example.com",
      role: UserType.USER,
    };

    vi.mocked(AuthService.register).mockResolvedValue(mockRegisterResponse);
    vi.mocked(AuthService.login).mockResolvedValue(mockLoginResponse);
    vi.mocked(AuthService.getCurrentUser).mockResolvedValue(mockUserResponse);

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.register({
        name: "New User",
        email: "new@example.com",
        password: "password123",
      });
    });

    expect(AuthService.register).toHaveBeenCalledWith({
      name: "New User",
      email: "new@example.com",
      password: "password123",
    });

    // Should also auto-login after registration
    expect(AuthService.login).toHaveBeenCalledWith({
      email: "new@example.com",
      password: "password123",
    });
  });

  it("should handle logout", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.logout();
    });

    expect(AuthService.logout).toHaveBeenCalled();
  });

  it("should handle token refresh", async () => {
    const mockRefreshResponse = {
      accessToken: "new-mock-token",
    };

    vi.mocked(AuthService.refreshToken).mockResolvedValue(mockRefreshResponse);

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.refreshToken();
    });

    expect(AuthService.refreshToken).toHaveBeenCalled();
  });

  it("should clear errors", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.clearError();
    });

    expect(result.current.error).toBeNull();
  });

  it("should check role functions exist", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    expect(typeof result.current.isAdmin).toBe("function");
    expect(typeof result.current.isModerator).toBe("function");
    expect(typeof result.current.hasRole).toBe("function");

    // Test the functions can be called with UserType enum values
    expect(() => result.current.hasRole(UserType.ADMIN)).not.toThrow();
    expect(() => result.current.hasRole(UserType.MODERATOR)).not.toThrow();
    expect(() => result.current.hasRole(UserType.USER)).not.toThrow();
  });

  it("should throw error when used outside AuthProvider", () => {
    expect(() => {
      renderHook(() => useAuth());
    }).toThrow("useAuth must be used within an AuthProvider");
  });
});
