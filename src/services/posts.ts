import { postsApi, apiCall } from "./api";
import {
  Post,
  createPostDTO,
  updatePostDTO,
  getPostsResponse,
  getPostResponse,
} from "../types/posts";

// Posts service for posts API operations
export class PostsService {
  // Get all posts
  static async getAllPosts(): Promise<getPostsResponse> {
    return apiCall(() => postsApi.get<getPostsResponse>("/posts"));
  }

  // Get post by ID
  static async getPostById(id: number): Promise<getPostResponse> {
    return apiCall(() => postsApi.get<getPostResponse>(`/posts/${id}`));
  }

  // Create new post
  static async createPost(postData: createPostDTO): Promise<Post> {
    return apiCall(() => postsApi.post<Post>("/posts", postData));
  }

  // Update existing post
  static async updatePost(id: number, postData: updatePostDTO): Promise<Post> {
    return apiCall(() => postsApi.put<Post>(`/posts/${id}`, postData));
  }

  // Delete post
  static async deletePost(id: number): Promise<void> {
    return apiCall(() => postsApi.delete(`/posts/${id}`));
  }
}
