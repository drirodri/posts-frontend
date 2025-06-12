export interface UserData {
  id: number;
  username: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author_id: number;
  author?: UserData;
  created_at: string;
  updated_at: string;
}

export interface createPostDTO {
  title: string;
  content: string;
}

export interface updatePostDTO {
  title?: string;
  content?: string;
}

export interface deletePostDTO {
  id: number;
}

export interface getPostsResponse {
  posts: Post[];
  total_count: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface getPostResponse {
  post: Post;
}
