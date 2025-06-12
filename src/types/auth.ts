// Users API types

export enum UserType {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator",
}

export interface User {
  id: number; // Changed from string to number to match backend
  name: string;
  email: string;
  role: UserType; // Added role field
  createdAt: string;
  updatedAt: string;
}

export interface createUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface updateUserDTO {
  id?: number; // Made optional since it's in URL params
  name?: string;
  email?: string;
  password?: string;
  currentPassword?: string; // Required when changing password
  role?: UserType;
}

export interface createUserResponseDTO {
  id: number;
  name: string;
  email: string;
  role: UserType;
  createdAt: string;
  updatedAt: string;
  refreshToken?: string;
}

// API Response types based on actual Users API
export interface LoginResponse {
  accessToken: string;
  userId: number;
  email: string;
}

export interface MeResponse {
  userId: number; // Changed from string to number for consistency
  email: string;
  role: UserType;
}

export interface RefreshResponse {
  accessToken: string;
}

// Standardized API response format from Users API
export interface UserApiResponse {
  message: string;
  data: User;
}

export interface UsersListResponse {
  message: string;
  data: User[];
  count: number;
}

export interface RegisterResponse {
  message: string;
  data: createUserResponseDTO;
}
