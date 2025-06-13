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
  Divider,
  Fade,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Login,
  PersonAdd,
} from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/auth";
import { loginSchema, LoginInput } from "../../lib/validations/authSchema";

interface LoginFormProps {
  onSuccess?: () => void;
  onForgotPassword?: () => void;
  onRegister?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onForgotPassword,
  onRegister,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoginLoading, error, clearError } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
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
      clearError();
      await login(data);
      onSuccess?.();
    } catch (err) {
      console.error("Erro no login:", err);
    }
  };

  const handleRegisterClick = () => {
    onRegister?.();
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        maxWidth: 400,
        width: "100%",
        borderRadius: 2,
        position: "relative",
      }}
    >
      {/* Loading Overlay */}
      {isLoginLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: 2,
            zIndex: 1,
          }}
        >
          <Box textAlign="center">
            <CircularProgress size={40} />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Entrando...
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Login sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Entrar
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Faça login para acessar sua conta
        </Typography>
      </Box>

      {/* Container com altura fixa para o erro */}
      <Box
        sx={{
          height: 56, // Altura fixa para acomodar o Alert
          mb: 2,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Fade in={!!error} timeout={300}>
          <Box sx={{ width: "100%" }}>
            {error && (
              <Alert
                severity="error"
                sx={{
                  width: "100%",
                  "& .MuiAlert-message": {
                    width: "100%",
                  },
                }}
              >
                {error}
              </Alert>
            )}
          </Box>
        </Fade>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        {" "}
        <Box sx={{ height: 80 }}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                type="email"
                error={!!errors.email}
                helperText={errors.email?.message || " "}
                disabled={isLoginLoading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            )}
          />
        </Box>
        <Box sx={{ height: 80 }}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Senha"
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors.password?.message || " "}
                disabled={isLoginLoading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        disabled={isLoginLoading}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            )}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isLoginLoading || !isValid}
          sx={{ mt: 1, py: 1.5 }}
          startIcon={
            isLoginLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : undefined
          }
        >
          {isLoginLoading ? "Entrando..." : "Entrar"}
        </Button>
        <Box textAlign="center" mt={1}>
          <Button
            variant="text"
            size="small"
            onClick={onForgotPassword}
            disabled={isLoginLoading}
            sx={{ textTransform: "none" }}
          >
            Esqueceu sua senha?
          </Button>
        </Box>
        <Divider sx={{ my: 2 }}>
          <Typography variant="body2" color="text.secondary">
            ou
          </Typography>
        </Divider>
        <Button
          fullWidth
          variant="outlined"
          size="large"
          onClick={handleRegisterClick}
          disabled={isLoginLoading}
          startIcon={<PersonAdd />}
          sx={{
            py: 1.5,
            borderWidth: 2,
            "&:hover": {
              borderWidth: 2,
            },
          }}
        >
          Criar nova conta
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm;
