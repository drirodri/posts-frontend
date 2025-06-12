import { useState, useCallback } from "react";
import { PostsService } from "../services/posts";
import { createPostDTO, updatePostDTO } from "../types/posts";

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAllPosts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await PostsService.getAllPosts();
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getPostById = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await PostsService.getPostById(id);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch post");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);
  const createPost = useCallback(async (postData: createPostDTO) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await PostsService.createPost(postData);
      return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);
  const updatePost = useCallback(
    async (id: number, postData: updatePostDTO) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await PostsService.updatePost(id, postData);
        return response;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to update post");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const deletePost = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);
    try {
      await PostsService.deletePost(id);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete post");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  };
};
