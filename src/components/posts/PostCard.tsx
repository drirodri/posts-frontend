import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  MoreVert,
} from "@mui/icons-material";
import { Post } from "../../types/posts";

interface PostCardProps {
  post: Post;
  onLike?: (postId: number) => void;
  onComment?: (postId: number) => void;
  onShare?: (postId: number) => void;
  isLiked?: boolean;
  likesCount?: number;
  commentsCount?: number;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  onShare,
  isLiked = false,
  likesCount = 0,
  commentsCount = 0,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(
        (now.getTime() - date.getTime()) / (1000 * 60)
      );
      return `${diffInMinutes}m`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d`;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        "&:hover": {
          backgroundColor: "action.hover",
          transition: "background-color 0.2s ease",
        },
      }}
    >
      <CardContent sx={{ pb: 1 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 48, height: 48 }}>
            {post.author?.username ? getInitials(post.author.username) : "U"}
          </Avatar>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {post.author?.username || "Usuário Anônimo"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                @
                {post.author?.username?.toLowerCase().replace(/\s+/g, "") ||
                  "anonimo"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                •
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formatDate(post.created_at)}
              </Typography>
            </Box>

            {/* Post Content */}
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
              {post.title}
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.5 }}>
              {post.content}
            </Typography>
          </Box>

          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: 300,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="small"
              onClick={() => onComment?.(post.id)}
              sx={{ color: "text.secondary" }}
            >
              <ChatBubbleOutline fontSize="small" />
            </IconButton>
            {commentsCount > 0 && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ ml: 0.5 }}
              >
                {commentsCount}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="small"
              onClick={() => onLike?.(post.id)}
              sx={{ color: isLiked ? "error.main" : "text.secondary" }}
            >
              {isLiked ? (
                <Favorite fontSize="small" />
              ) : (
                <FavoriteBorder fontSize="small" />
              )}
            </IconButton>
            {likesCount > 0 && (
              <Typography
                variant="caption"
                color={isLiked ? "error.main" : "text.secondary"}
                sx={{ ml: 0.5 }}
              >
                {likesCount}
              </Typography>
            )}
          </Box>

          <IconButton
            size="small"
            onClick={() => onShare?.(post.id)}
            sx={{ color: "text.secondary" }}
          >
            <Share fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
