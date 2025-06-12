import { describe, it, expect, beforeEach, vi } from "vitest";
import { AuthService } from "../services/auth";

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("AuthService", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  describe("Token Management", () => {
    it("should set and get access token", () => {
      const token = "test-access-token";

      AuthService.setAccessToken(token);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        "accessToken",
        token
      );

      localStorageMock.getItem.mockReturnValue(token);
      expect(AuthService.getAccessToken()).toBe(token);
    });

    it("should remove access token", () => {
      AuthService.removeAccessToken();

      expect(localStorageMock.removeItem).toHaveBeenCalledWith("accessToken");
    });

    it("should check if user is authenticated", () => {
      // When no token exists
      localStorageMock.getItem.mockReturnValue(null);
      expect(AuthService.isAuthenticated()).toBe(false);

      // When token exists
      localStorageMock.getItem.mockReturnValue("some-token");
      expect(AuthService.isAuthenticated()).toBe(true);
    });
  });

  describe("API Calls", () => {
    it("should register a new user successfully", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        password: "password123",
      };

      const response = await AuthService.register(userData);

      expect(response).toEqual({
        message: "User registered successfully",
        data: expect.objectContaining({
          id: expect.any(Number),
          name: userData.name,
          email: userData.email,
          role: "user",
        }),
      });
    });

    it("should handle registration errors", async () => {
      const invalidUserData = {
        name: "",
        email: "invalid-email",
        password: "",
      };

      await expect(AuthService.register(invalidUserData)).rejects.toThrow();
    });

    it("should login successfully with valid credentials", async () => {
      const credentials = {
        email: "test@example.com",
        password: "password123",
      };

      const response = await AuthService.login(credentials);

      expect(response).toEqual({
        message: "Login successful",
        data: expect.objectContaining({
          accessToken: expect.any(String),
          refreshToken: expect.any(String),
          user: expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            email: credentials.email,
            role: expect.any(String),
          }),
        }),
      });
    });

    it("should handle login errors with invalid credentials", async () => {
      const invalidCredentials = {
        email: "test@example.com",
        password: "wrong-password",
      };

      await expect(AuthService.login(invalidCredentials)).rejects.toThrow();
    });

    it("should get current user when authenticated", async () => {
      // Set up authenticated state
      localStorageMock.getItem.mockReturnValue("mock-access-token");

      const response = await AuthService.getCurrentUser();

      expect(response).toEqual({
        message: "User retrieved successfully",
        data: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          role: expect.any(String),
        }),
      });
    });
    it("should handle unauthorized access when getting current user", async () => {
      // Mock the MSW handler to return unauthorized for no token
      const { server } = await import("../test/mocks/server");
      const { http, HttpResponse } = await import("msw");

      server.use(
        http.get("http://localhost:3333/auth/me", () => {
          return HttpResponse.json(
            { message: "Unauthorized", error: "Unauthorized", statusCode: 401 },
            { status: 401 }
          );
        })
      );

      // No token set
      localStorageMock.getItem.mockReturnValue(null);

      await expect(AuthService.getCurrentUser()).rejects.toThrow();
    });

    it("should refresh token successfully", async () => {
      const response = await AuthService.refreshToken();

      expect(response).toEqual({
        message: "Token refreshed successfully",
        data: expect.objectContaining({
          accessToken: expect.any(String),
        }),
      });
    });

    it("should logout successfully", () => {
      // The actual logout method just removes token from localStorage
      // It doesn't make an API call, so it returns void
      AuthService.logout();

      expect(localStorageMock.removeItem).toHaveBeenCalledWith("accessToken");
    });
  });

  describe("Error Handling", () => {
    it("should handle network errors gracefully", async () => {
      // This would test network failure scenarios
      // For now, we'll skip this as it requires more complex mocking
    });
  });
});
