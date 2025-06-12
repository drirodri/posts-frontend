import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AuthProvider } from "../../hooks/auth/AuthProvider";

// Custom render function that includes AuthProvider
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

// Mock user data for tests
export const mockUsers = {
  regularUser: {
    id: 1,
    name: "Regular User",
    email: "user@example.com",
    role: "user" as const,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  adminUser: {
    id: 2,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin" as const,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  moderatorUser: {
    id: 3,
    name: "Moderator User",
    email: "moderator@example.com",
    role: "moderator" as const,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
};

// Mock API responses
export const mockApiResponses = {
  successfulLogin: {
    message: "Login successful",
    data: {
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token",
      user: mockUsers.regularUser,
    },
  },
  successfulRegistration: {
    message: "User registered successfully",
    data: mockUsers.regularUser,
  },
  successfulLogout: {
    message: "Logout successful",
  },
  successfulRefresh: {
    message: "Token refreshed successfully",
    data: {
      accessToken: "new-mock-access-token",
    },
  },
  getCurrentUser: {
    message: "User retrieved successfully",
    data: mockUsers.regularUser,
  },
};

// Error responses
export const mockErrorResponses = {
  invalidCredentials: {
    message: "Invalid credentials",
    error: "Unauthorized",
    statusCode: 401,
  },
  validationError: {
    message: "Validation failed",
    error: "Bad Request",
    statusCode: 400,
  },
  notFound: {
    message: "User not found",
    error: "Not Found",
    statusCode: 404,
  },
  serverError: {
    message: "Internal server error",
    error: "Internal Server Error",
    statusCode: 500,
  },
};

// Test credentials
export const testCredentials = {
  valid: {
    email: "test@example.com",
    password: "password123",
  },
  invalid: {
    email: "test@example.com",
    password: "wrong-password",
  },
};

// Test registration data
export const testRegistrationData = {
  valid: {
    name: "Test User",
    email: "test@example.com",
    password: "StrongPassword123!",
  },
  invalid: {
    name: "",
    email: "invalid-email",
    password: "123",
  },
};

// Helper functions for tests
export const waitForAuthState = async () => {
  // Helper to wait for auth state changes
  await new Promise((resolve) => setTimeout(resolve, 100));
};

export const createMockLocalStorage = () => {
  const store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      Object.keys(store).forEach((key) => delete store[key]);
    },
    length: Object.keys(store).length,
    key: (index: number) => Object.keys(store)[index] || null,
  };
};

// Re-export specific testing utilities (avoiding react-refresh/only-export-components rule)
export {
  screen,
  fireEvent,
  waitFor,
  act,
  cleanup,
  renderHook,
  waitForElementToBeRemoved,
} from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
