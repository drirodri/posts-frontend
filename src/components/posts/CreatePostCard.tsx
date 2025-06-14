import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Add, Image, Poll, EmojiEmotions } from "@mui/icons-material";
import { useAuth } from "../../hooks/auth";
import { usePosts } from "../../hooks/usePosts";
import { createPostDTO } from "../../types/posts";

interface CreatePostCardProps {
  onPostCreated?: () => void;
}

const CreatePostCard: React.FC<CreatePostCardProps> = ({ onPostCreated }) => {
  const { user } = useAuth();
  const { createPost, isLoading } = usePosts();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) return;

    const postData: createPostDTO = {
      title: title.trim(),
      content: content.trim(),
    };

    const result = await createPost(postData);
    if (result) {
      setTitle("");
      setContent("");
      onPostCreated?.();
    }
  };

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        {/* Header */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 48, height: 48 }}>
            {user?.name ? getInitials(user.name) : "U"}
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              O que está acontecendo?
            </Typography>

            {/* Title Input */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Título do seu post..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2 }}
              inputProps={{ maxLength: 100 }}
            />

            {/* Content Input */}
            <TextField
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              placeholder="Compartilhe seus pensamentos..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              inputProps={{ maxLength: 500 }}
            />

            {/* Character Counter */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                {content.length}/500
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              size="small"
              startIcon={<Image />}
              disabled
              sx={{ color: "text.secondary" }}
            >
              Foto
            </Button>
            <Button
              size="small"
              startIcon={<Poll />}
              disabled
              sx={{ color: "text.secondary" }}
            >
              Enquete
            </Button>
            <Button
              size="small"
              startIcon={<EmojiEmotions />}
              disabled
              sx={{ color: "text.secondary" }}
            >
              Emoji
            </Button>
          </Box>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!isValid || isLoading}
            startIcon={isLoading ? <CircularProgress size={16} /> : <Add />}
            sx={{ minWidth: 100 }}
          >
            {isLoading ? "Postando..." : "Postar"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreatePostCard;
