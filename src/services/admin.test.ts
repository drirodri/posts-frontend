import { describe, it, expect, beforeEach, vi } from "vitest";
import { AdminService } from "../services/admin";

// Mock the API
vi.mock("../services/api", () => ({
  usersApi: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
  apiCall: vi.fn((fn) => fn()),
}));

const { usersApi } = await import("../services/api");

describe("AdminService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should get all users", async () => {
    const mockUsers = [
      { id: 1, name: "User 1", email: "user1@example.com", role: "user" },
      { id: 2, name: "User 2", email: "user2@example.com", role: "admin" },
    ];

    vi.mocked(usersApi.get).mockResolvedValue({
      data: {
        message: "Users retrieved successfully",
        data: mockUsers,
      },
    });

    const result = await AdminService.getAllUsers();

    expect(usersApi.get).toHaveBeenCalledWith("/users");
    expect(result).toEqual({
      data: {
        message: "Users retrieved successfully",
        data: mockUsers,
      },
    });
  });

  it("should get user by id", async () => {
    const mockUser = {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      role: "user",
    };

    vi.mocked(usersApi.get).mockResolvedValue({
      data: {
        message: "User retrieved successfully",
        data: mockUser,
      },
    });

    const result = await AdminService.getUserById(1);

    expect(usersApi.get).toHaveBeenCalledWith("/users/1");
    expect(result).toEqual({
      data: {
        message: "User retrieved successfully",
        data: mockUser,
      },
    });
  });

  it("should create a new user", async () => {
    const newUserData = {
      name: "New User",
      email: "new@example.com",
      password: "password123",
    };

    const mockCreatedUser = {
      id: 3,
      name: "New User",
      email: "new@example.com",
      role: "user",
    };

    vi.mocked(usersApi.post).mockResolvedValue({
      data: {
        message: "User created successfully",
        data: mockCreatedUser,
      },
    });

    const result = await AdminService.createUser(newUserData);

    expect(usersApi.post).toHaveBeenCalledWith("/users", newUserData);
    expect(result).toEqual({
      data: {
        message: "User created successfully",
        data: mockCreatedUser,
      },
    });
  });

  it("should update user", async () => {
    const updateData = { name: "Updated Name" };
    const mockUpdatedUser = {
      id: 1,
      name: "Updated Name",
      email: "test@example.com",
      role: "user",
    };

    vi.mocked(usersApi.patch).mockResolvedValue({
      data: {
        message: "User updated successfully",
        data: mockUpdatedUser,
      },
    });

    const result = await AdminService.updateUser(1, updateData);

    expect(usersApi.patch).toHaveBeenCalledWith("/users/1", updateData);
    expect(result).toEqual({
      data: {
        message: "User updated successfully",
        data: mockUpdatedUser,
      },
    });
  });

  it("should delete user", async () => {
    vi.mocked(usersApi.delete).mockResolvedValue({
      data: {
        message: "User deleted successfully",
      },
    });

    const result = await AdminService.deleteUser(1);

    expect(usersApi.delete).toHaveBeenCalledWith("/users/1");
    expect(result).toEqual({
      data: {
        message: "User deleted successfully",
      },
    });
  });

  it("should handle API errors", async () => {
    const mockError = new Error("Forbidden: Admin access required");
    vi.mocked(usersApi.get).mockRejectedValue(mockError);

    await expect(AdminService.getAllUsers()).rejects.toThrow(
      "Forbidden: Admin access required"
    );
  });
});
