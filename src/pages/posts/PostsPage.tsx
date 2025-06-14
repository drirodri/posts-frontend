import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
} from "@mui/material";
import { Add, Edit, Delete, Visibility, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Mock data - será substituído por dados reais
const mockPosts = [
  {
    id: 1,
    title: "Como usar React Hooks efetivamente",
    excerpt:
      "Uma introdução completa aos React Hooks e suas melhores práticas para desenvolvimento moderno.",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-16",
    views: 234,
    likes: 12,
    status: "published",
  },
  {
    id: 2,
    title: "Material-UI: Guia Completo",
    excerpt:
      "Aprenda a criar interfaces incríveis com Material-UI e suas principais funcionalidades.",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-12",
    views: 456,
    likes: 23,
    status: "published",
  },
  {
    id: 3,
    title: "TypeScript para Iniciantes",
    excerpt:
      "Introdução ao TypeScript e suas vantagens no desenvolvimento web moderno.",
    createdAt: "2024-01-08",
    updatedAt: "2024-01-08",
    views: 123,
    likes: 8,
    status: "draft",
  },
];

const PostsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/posts/create");
  };

  const handleEditPost = (postId: number) => {
    navigate(`/posts/edit/${postId}`);
  };

  const handleDeletePost = (postId: number) => {
    // TODO: Implementar confirmação e deleção
    console.log("Delete post:", postId);
  };

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Meus Posts
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gerencie todos os seus posts aqui
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          startIcon={<Add />}
          onClick={handleCreatePost}
        >
          Novo Post
        </Button>
      </Box>

      {/* Posts List */}
      <Box
        sx={{
          display: "grid",
          gap: 3,
        }}
      >
        {mockPosts.map((post) => (
          <Card key={post.id} variant="outlined">
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    <Typography variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Chip
                      label={
                        post.status === "published" ? "Publicado" : "Rascunho"
                      }
                      size="small"
                      color={
                        post.status === "published" ? "success" : "default"
                      }
                      variant={
                        post.status === "published" ? "filled" : "outlined"
                      }
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                    <Typography variant="caption" color="text.secondary">
                      Criado: {new Date(post.createdAt).toLocaleDateString()}
                    </Typography>
                    {post.updatedAt !== post.createdAt && (
                      <Typography variant="caption" color="text.secondary">
                        Atualizado:{" "}
                        {new Date(post.updatedAt).toLocaleDateString()}
                      </Typography>
                    )}
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Box
                        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
                      >
                        <Visibility sx={{ fontSize: 18 }} />
                        <Typography variant="caption">{post.views}</Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
                      >
                        <Favorite sx={{ fontSize: 18 }} />
                        <Typography variant="caption">{post.likes}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditPost(post.id)}
                    size="small"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeletePost(post.id)}
                    size="small"
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Empty State */}
      {mockPosts.length === 0 && (
        <Box
          sx={{
            textAlign: "center",
            py: 8,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Você ainda não tem posts
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Crie seu primeiro post para começar a compartilhar suas ideias!
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Add />}
            onClick={handleCreatePost}
          >
            Criar Primeiro Post
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PostsPage;
