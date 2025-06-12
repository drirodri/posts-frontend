import { z } from "zod";

// Create Post Schema - matches CreatePostRequest from Go API
export const createPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters")
    .trim(),
  content: z
    .string()
    .min(1, "Content is required")
    .max(10000, "Content must be less than 10,000 characters")
    .trim(),
});

// Update Post Schema - matches UpdatePostRequest from Go API
export const updatePostSchema = z
  .object({
    title: z
      .string()
      .min(1, "Title cannot be empty")
      .max(255, "Title must be less than 255 characters")
      .trim()
      .optional(),
    content: z
      .string()
      .min(1, "Content cannot be empty")
      .max(10000, "Content must be less than 10,000 characters")
      .trim()
      .optional(),
  })
  .refine((data) => data.title !== undefined || data.content !== undefined, {
    message: "At least one field must be provided for update",
    path: ["title"],
  });

// Query Parameters Schema - for filtering/pagination
export const getPostsQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  page_size: z.coerce.number().min(1).max(100).default(10),
  author_id: z.coerce.number().optional(),
});

// Export types
export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
export type GetPostsQuery = z.infer<typeof getPostsQuerySchema>;
