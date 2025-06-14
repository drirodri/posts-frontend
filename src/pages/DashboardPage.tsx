import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Chip,
  Paper,
  Button,
} from "@mui/material";
import {
  Article,
  Visibility,
  Favorite,
  TrendingUp,
  Add,
  MoreVert,
} from "@mui/icons-material";
import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

// Mock data - será substituído por dados reais
const mockStats = {
  totalPosts: 12,
  totalViews: 1543,
  totalLikes: 89,
  thisMonthPosts: 3,
};

const mockRecentPosts = [
  {
    id: 1,
    title: "Como usar React Hooks efetivamente",
    excerpt:
      "Uma introdução completa aos React Hooks e suas melhores práticas...",
    createdAt: "2024-01-15",
    views: 234,
    likes: 12,
    status: "published",
  },
  {
    id: 2,
    title: "Material-UI: Guia Completo",
    excerpt: "Aprenda a criar interfaces incríveis com Material-UI...",
    createdAt: "2024-01-10",
    views: 456,
    likes: 23,
    status: "published",
  },
  {
    id: 3,
    title: "TypeScript para Iniciantes",
    excerpt: "Introdução ao TypeScript e suas vantagens...",
    createdAt: "2024-01-08",
    views: 123,
    likes: 8,
    status: "draft",
  },
];

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/posts/create");
  };

  const handleViewAllPosts = () => {
    navigate("/posts");
  };

  console.log("User data:", user);

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bem-vindo de volta, {user?.name}! Aqui está um resumo da sua
          atividade.
        </Typography>
      </Box>{" "}
      {/* Stats Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          mb: 4,
        }}
      >
        <Card>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <Article />
              </Avatar>
              <Box>
                <Typography variant="h5" component="div">
                  {mockStats.totalPosts}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total de Posts
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "info.main" }}>
                <Visibility />
              </Avatar>
              <Box>
                <Typography variant="h5" component="div">
                  {mockStats.totalViews.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Visualizações
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "error.main" }}>
                <Favorite />
              </Avatar>
              <Box>
                <Typography variant="h5" component="div">
                  {mockStats.totalLikes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Curtidas
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "success.main" }}>
                <TrendingUp />
              </Avatar>
              <Box>
                <Typography variant="h5" component="div">
                  {mockStats.thisMonthPosts}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Este Mês
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* Action Buttons */}
      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<Add />}
          onClick={handleCreatePost}
          sx={{ mr: 2 }}
        >
          Criar Novo Post
        </Button>
        <Button variant="outlined" size="large" onClick={handleViewAllPosts}>
          Ver Todos os Posts
        </Button>
      </Box>
      {/* Recent Posts */}
      <Paper sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h6" component="h2">
            Posts Recentes
          </Typography>
          <Button size="small" onClick={handleViewAllPosts}>
            Ver Todos
          </Button>
        </Box>{" "}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {mockRecentPosts.map((post) => (
            <Card variant="outlined" key={post.id}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Chip
                    label={
                      post.status === "published" ? "Publicado" : "Rascunho"
                    }
                    size="small"
                    color={post.status === "published" ? "success" : "default"}
                    variant={
                      post.status === "published" ? "filled" : "outlined"
                    }
                  />
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </Box>

                <Typography variant="h6" component="h3" gutterBottom>
                  {post.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {post.excerpt}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Box
                      sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
                    >
                      <Visibility sx={{ fontSize: 16 }} />
                      <Typography variant="caption">{post.views}</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", gap: 0.5, alignItems: "center" }}
                    >
                      <Favorite sx={{ fontSize: 16 }} />
                      <Typography variant="caption">{post.likes}</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
