/**
 * LoginForm Component
 *
 * Componente de formulário de login usando Material UI + React Hook Form + Zod
 * Integrado com AuthContext para gerenciamento de estado de autenticação
 *
 * Exemplo de uso:
 * ```tsx
 * <LoginForm
 *   onSuccess={() => navigate('/dashboard')}
 *   onForgotPassword={() => navigate('/forgot-password')}
 * />
 * ```
 */

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff, Login } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "../../lib/validations/authSchema";
import { useAuth } from "../../hooks/auth";

interface LoginFormProps {
  onSuccess?: () => void;
  onForgotPassword?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onForgotPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoginLoading, error, clearError } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleFormSubmit = async (data: LoginInput) => {
    try {
      clearError(); // Limpa erros anteriores
      await login(data); // Usa a função login do contexto
      onSuccess?.(); // Chama callback de sucesso se fornecido
    } catch (err) {
      // O erro já está sendo tratado pelo contexto AuthProvider
      console.error("Erro no login:", err);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: 400,
        width: "100%",
        borderRadius: 2,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Login sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Entrar
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Entre com suas credenciais para acessar sua conta
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              disabled={isLoginLoading}
              autoComplete="email"
              autoFocus
              sx={{ mb: 2 }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Senha"
              type={showPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
              disabled={isLoginLoading}
              autoComplete="current-password"
              sx={{ mb: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      disabled={isLoginLoading}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isLoginLoading || !isValid || !isDirty}
          sx={{
            mb: 2,
            py: 1.5,
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "1rem",
          }}
          startIcon={
            isLoginLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <Login />
            )
          }
        >
          {isLoginLoading ? "Entrando..." : "Entrar"}
        </Button>

        {onForgotPassword && (
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="text"
              onClick={onForgotPassword}
              disabled={isLoginLoading}
              sx={{
                textTransform: "none",
                color: "text.secondary",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Esqueceu sua senha?
            </Button>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default LoginForm;

/*
EXEMPLO DE USO:

import { LoginForm } from '@/components/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/auth';

function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redireciona se já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
    >
      <LoginForm 
        onSuccess={() => {
          // Usuário logado com sucesso
          navigate('/dashboard');
        }}
        onForgotPassword={() => {
          navigate('/forgot-password');
        }}
      />
    </Box>
  );
}
*/
