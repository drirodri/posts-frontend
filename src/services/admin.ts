import { usersApi, apiCall } from "./api";
import {
  createUserDTO,
  updateUserDTO,
  UserType,
  UsersListResponse,
  UserApiResponse,
} from "../types/auth";

// Additional admin response types
interface DeleteResponse {
  message: string;
}

// Admin service for admin-only endpoints
export class AdminService {
  // Get all users (Admin only)
  static async getAllUsers(): Promise<UsersListResponse> {
    return apiCall(() => usersApi.get<UsersListResponse>("/users"));
  }
  // Get user by ID (Admin only)
  static async getUserById(userId: number): Promise<UserApiResponse> {
    return apiCall(() => usersApi.get<UserApiResponse>(`/users/${userId}`));
  }

  // Create new user (Admin only)
  static async createUser(
    userData: createUserDTO & { role?: UserType }
  ): Promise<UserApiResponse> {
    return apiCall(() => usersApi.post<UserApiResponse>("/users", userData));
  }
  // Update any user (Admin only)
  static async updateUser(
    userId: number,
    userData: updateUserDTO
  ): Promise<UserApiResponse> {
    return apiCall(() =>
      usersApi.patch<UserApiResponse>(`/users/${userId}`, userData)
    );
  }

  // Delete user (Admin only)
  static async deleteUser(userId: number): Promise<DeleteResponse> {
    return apiCall(() => usersApi.delete<DeleteResponse>(`/users/${userId}`));
  }
}
