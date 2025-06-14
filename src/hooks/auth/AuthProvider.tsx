import { useState, useEffect, ReactNode } from "react";
import { AuthService } from "../../services/auth";
import { User, UserType, LoginResponse } from "../../types/auth";
import { CreateUserInput, LoginInput } from "../../lib/validations/authSchema";
import { AuthContext, AuthContextType } from "./AuthContext";

// Auth Provider Props
interface AuthProviderProps {
  children: ReactNode;
}

// Auth Provider Component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isUpdateProfileLoading, setIsUpdateProfileLoading] = useState(false);
  const [isRefreshTokenLoading, setIsRefreshTokenLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user is authenticated on mount
  useEffect(() => {
    initializeAuth();
  }, []);

  // Initialize authentication state
  const initializeAuth = async () => {
    try {
      setIsLoading(true);

      // Check if we have a stored token
      if (AuthService.isAuthenticated()) {
        // Try to get current user info
        const userInfo = await AuthService.getCurrentUser();

        // Convert MeResponse to User format
        const userData: User = {
          id: userInfo.userId,
          email: userInfo.email,
          role: userInfo.role,
          name: userInfo.name,
        };

        setUser(userData);
      }
    } catch (error) {
      console.error("Failed to initialize auth:", error);
      // Clear invalid token
      AuthService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Login function
  const login = async (credentials: LoginInput) => {
    try {
      setIsLoginLoading(true);
      setError(null);

      const response: LoginResponse = await AuthService.login(credentials);

      // Store the access token
      AuthService.setAccessToken(response.accessToken);

      // Get full user info after login
      const userInfo = await AuthService.getCurrentUser();

      // Convert to User format
      const userData: User = {
        id: userInfo.userId,
        email: userInfo.email,
        role: userInfo.role,
        name: userInfo.name,
      };

      setUser(userData);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Login failed";
      setError(errorMessage);
      throw error;
    } finally {
      setIsLoginLoading(false);
    }
  };

  // Register function
  const register = async (userData: CreateUserInput) => {
    try {
      setIsRegisterLoading(true);
      setError(null);

      await AuthService.register(userData);

      // Auto-login after successful registration
      await login({
        email: userData.email,
        password: userData.password,
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Registration failed";
      setError(errorMessage);
      throw error;
    } finally {
      setIsRegisterLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    AuthService.logout();
    setUser(null);
    setError(null);
  };

  // Update profile function
  const updateProfile = async (updateData: Partial<User>) => {
    try {
      if (!user) throw new Error("No user to update");

      setIsUpdateProfileLoading(true);
      setError(null);

      const response = await AuthService.updateProfile(user.id, updateData);

      // Update local user state
      setUser(response.data);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Profile update failed";
      setError(errorMessage);
      throw error;
    } finally {
      setIsUpdateProfileLoading(false);
    }
  };
  // Refresh token function
  const refreshToken = async () => {
    try {
      setIsRefreshTokenLoading(true);
      const response = await AuthService.refreshToken();
      AuthService.setAccessToken(response.accessToken);
    } catch (error) {
      console.error("Token refresh failed:", error);
      logout();
      throw error;
    } finally {
      setIsRefreshTokenLoading(false);
    }
  };

  // Clear error function
  const clearError = () => {
    setError(null);
  };

  // Utility functions
  const hasRole = (role: UserType): boolean => {
    return user?.role === role;
  };

  const isAdmin = (): boolean => {
    return user?.role === UserType.ADMIN;
  };

  const isModerator = (): boolean => {
    return user?.role === UserType.MODERATOR || user?.role === UserType.ADMIN;
  };
  // Context value with specific loading states
  const value: AuthContextType = {
    // State
    user,
    isAuthenticated: !!user,
    isLoading:
      isLoading ||
      isLoginLoading ||
      isRegisterLoading ||
      isUpdateProfileLoading ||
      isRefreshTokenLoading,
    isLoginLoading,
    isRegisterLoading,
    isUpdateProfileLoading,
    isRefreshTokenLoading,
    error,

    // Actions
    login,
    register,
    logout,
    updateProfile,
    refreshToken,
    clearError,

    // Utilities
    hasRole,
    isAdmin,
    isModerator,
  };

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};
