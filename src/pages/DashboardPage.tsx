import React from "react";
import { Box, Typography } from "@mui/material";
import { useAuth } from "../hooks/auth";
import { Timeline } from "../components/posts";

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo ao Dritter!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Olá, {user?.name}! Veja o que está acontecendo na comunidade.
        </Typography>
      </Box>

      {/* Timeline */}
      <Timeline />
    </Box>
  );
};

export default DashboardPage;
