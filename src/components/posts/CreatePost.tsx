import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Avatar,
  Typography,
  Alert,
} from "@mui/material";
import { Send, Person } from "@mui/icons-material";
import { useAuth } from "../../hooks/auth";
import { usePosts } from "../../hooks/usePosts";
import { createPostDTO } from "../../types/posts";

interface CreatePostProps {
  onPostCreated?: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostCreated }) => {
  const { user } = useAuth();
  const { createPost, isLoading, error } = usePosts();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showTitle, setShowTitle] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) return;

    const postData: createPostDTO = {
      title: title.trim() || "",
      content: content.trim(),
    };

    const result = await createPost(postData);

    if (result) {
      setTitle("");
      setContent("");
      setShowTitle(false);
      onPostCreated?.();
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    // Mostrar campo de título se o conteúdo for longo
    if (e.target.value.length > 100 && !showTitle) {
      setShowTitle(true);
    }
  };

  return (
    <Card variant="outlined" sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {user?.name?.charAt(0).toUpperCase() || <Person />}
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <form onSubmit={handleSubmit}>
              {showTitle && (
                <TextField
                  fullWidth
                  placeholder="Título (opcional)"
                  variant="standard"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ mb: 2 }}
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "1.1rem", fontWeight: "bold" },
                  }}
                />
              )}

              <TextField
                fullWidth
                multiline
                minRows={3}
                maxRows={8}
                placeholder="O que está acontecendo?"
                variant="standard"
                value={content}
                onChange={handleContentChange}
                disabled={isLoading}
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: "1.1rem" },
                }}
              />

              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {content.length}/280
                </Typography>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={
                    !content.trim() || content.length > 280 || isLoading
                  }
                  startIcon={<Send />}
                  sx={{ borderRadius: 20 }}
                >
                  {isLoading ? "Postando..." : "Postar"}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
