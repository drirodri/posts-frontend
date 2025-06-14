import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Skeleton,
} from "@mui/material";
import { usePosts } from "../../hooks/usePosts";
import { Post } from "../../types/posts";
import PostCard from "./PostCard";
import CreatePostCard from "./CreatePostCard";

const Timeline: React.FC = () => {
  const { getAllPosts, isLoading, error } = usePosts();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const fetchPosts = useCallback(async () => {
    const response = await getAllPosts();
    if (response && response.data) {
      setPosts(response.data.posts || []);
    }
    setLoadingInitial(false);
  }, [getAllPosts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handlePostCreated = () => {
    fetchPosts(); // Recarrega os posts após criar um novo
  };

  const handleLike = (postId: number) => {
    // TODO: Implementar funcionalidade de like
    console.log("Like post:", postId);
  };

  const handleComment = (postId: number) => {
    // TODO: Implementar funcionalidade de comentário
    console.log("Comment on post:", postId);
  };

  const handleShare = (postId: number) => {
    // TODO: Implementar funcionalidade de compartilhamento
    console.log("Share post:", postId);
  };

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        Erro ao carregar posts: {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      {/* Create Post */}
      <CreatePostCard onPostCreated={handlePostCreated} />

      {/* Timeline Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Timeline
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Últimas atualizações da comunidade
        </Typography>
      </Box>

      {/* Loading State */}
      {loadingInitial ? (
        <Box>
          {[...Array(3)].map((_, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ borderRadius: 1 }}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <>
          {/* Posts List */}
          {posts.length > 0 ? (
            <Box>
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={handleLike}
                  onComment={handleComment}
                  onShare={handleShare}
                  isLiked={false} // TODO: Implementar estado de like
                  likesCount={Math.floor(Math.random() * 50)} // Mock data
                  commentsCount={Math.floor(Math.random() * 20)} // Mock data
                />
              ))}
            </Box>
          ) : (
            <Box sx={{ textAlign: "center", py: 6 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Nenhum post ainda
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Seja o primeiro a compartilhar algo!
              </Typography>
            </Box>
          )}

          {/* Loading More */}
          {isLoading && !loadingInitial && (
            <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
              <CircularProgress size={24} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Timeline;
