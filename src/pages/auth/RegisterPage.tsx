import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm, AuthContainer } from "../../components/auth";
import { useAuth } from "../../hooks/auth";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redireciona se já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleRegisterSuccess = () => {
    // Usuário registrado e logado com sucesso - redireciona para dashboard
    navigate("/dashboard");
  };

  const handleLogin = () => {
    // Redireciona para página de login
    navigate("/login");
  };
  return (
    <AuthContainer>
      <RegisterForm onSuccess={handleRegisterSuccess} onLogin={handleLogin} />
    </AuthContainer>
  );
};

export default RegisterPage;
