import { useState, useCallback } from "react";
import { AdminService } from "../services/admin";
import { updateUserDTO, createUserDTO, UserType } from "../types/auth";

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAllUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await AdminService.getAllUsers();
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch users");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getUserById = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await AdminService.getUserById(id);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch user");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);
  const createUser = useCallback(
    async (userData: createUserDTO & { role?: UserType }) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await AdminService.createUser(userData);
        return response;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create user");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const updateUser = useCallback(
    async (id: number, userData: updateUserDTO) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await AdminService.updateUser(id, userData);
        return response;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to update user");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const deleteUser = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      await AdminService.deleteUser(id);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete user");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };
};
