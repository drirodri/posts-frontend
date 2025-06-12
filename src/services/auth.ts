import { usersApi, apiCall } from "./api";
import {
  updateUserDTO,
  LoginResponse,
  MeResponse,
  RefreshResponse,
  RegisterResponse,
  UserApiResponse,
} from "../types/auth";
import { CreateUserInput, LoginInput } from "../lib/validations/authSchema";

// Auth service for public and user-specific endpoints
export class AuthService {
  // Public registration endpoint
  static async register(userData: CreateUserInput): Promise<RegisterResponse> {
    return apiCall(() =>
      usersApi.post<RegisterResponse>("/register", userData)
    );
  }

  // Login endpoint
  static async login(credentials: LoginInput): Promise<LoginResponse> {
    return apiCall(() =>
      usersApi.post<LoginResponse>("/auth/login", credentials)
    );
  }

  // Get current user info (protected)
  static async getCurrentUser(): Promise<MeResponse> {
    return apiCall(() => usersApi.get<MeResponse>("/auth/me"));
  }

  // Refresh access token (uses HTTP-only cookies)
  static async refreshToken(): Promise<RefreshResponse> {
    return apiCall(() => usersApi.post<RefreshResponse>("/auth/refresh"));
  }
  // Update own profile (protected)
  static async updateProfile(
    userId: number,
    userData: updateUserDTO
  ): Promise<UserApiResponse> {
    return apiCall(() =>
      usersApi.patch<UserApiResponse>(`/users/${userId}`, userData)
    );
  }

  // Utility methods for token management
  static setAccessToken(token: string): void {
    localStorage.setItem("accessToken", token);
  }

  static getAccessToken(): string | null {
    return localStorage.getItem("accessToken");
  }

  static removeAccessToken(): void {
    localStorage.removeItem("accessToken");
  }

  static isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  // Logout (clear local storage)
  static logout(): void {
    this.removeAccessToken();
    // Note: Refresh token is HTTP-only cookie, will be cleared by server
  }
}
