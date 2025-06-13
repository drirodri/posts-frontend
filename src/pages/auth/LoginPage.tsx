import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm, AuthContainer } from "../../components/auth";
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
    <AuthContainer>
      <LoginForm
        onSuccess={handleLoginSuccess}
        onForgotPassword={handleForgotPassword}
        onRegister={handleRegister}
      />
    </AuthContainer>
  );
};

export default LoginPage;
