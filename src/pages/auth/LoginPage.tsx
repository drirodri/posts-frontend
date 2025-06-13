import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import { useAuth } from "../../hooks/auth";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redireciona se já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLoginSuccess = () => {
    // Usuário logado com sucesso - redireciona para dashboard
    navigate("/dashboard");
  };

  const handleForgotPassword = () => {
    // Redireciona para página de recuperação de senha
    navigate("/forgot-password");
  };

  const handleRegister = () => {
    // Redireciona para página de registro
    navigate("/register");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginForm
            onSuccess={handleLoginSuccess}
            onForgotPassword={handleForgotPassword}
            onRegister={handleRegister}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
