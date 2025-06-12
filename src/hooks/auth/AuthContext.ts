import { createContext } from "react";
import { User, UserType } from "../../types/auth";
import { CreateUserInput, LoginInput } from "../../lib/validations/authSchema";

// Auth Context State Interface
export interface AuthContextType {
  // State
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoginLoading: boolean;
  isRegisterLoading: boolean;
  isUpdateProfileLoading: boolean;
  isRefreshTokenLoading: boolean;
  error: string | null;

  // Actions
  login: (credentials: LoginInput) => Promise<void>;
  register: (userData: CreateUserInput) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
  refreshToken: () => Promise<void>;
  clearError: () => void;

  // Utilities
  hasRole: (role: UserType) => boolean;
  isAdmin: () => boolean;
  isModerator: () => boolean;
}

// Create Auth Context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
