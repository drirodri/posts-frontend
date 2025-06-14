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
  Person,
  PersonAdd,
  Login,
} from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/auth";
import {
  registerSchema,
  RegisterInput,
  CreateUserInput,
} from "../../../lib/validations/authSchema";
import PasswordStrengthIndicator from "../ui/PasswordStrengthIndicator";

interface RegisterFormProps {
  onSuccess?: () => void;
  onLogin?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, isRegisterLoading, error, clearError } = useAuth();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormSubmit = async (data: RegisterInput) => {
    try {
      clearError();

      // Convert RegisterInput to CreateUserInput (remove confirmPassword)
      const createUserData: CreateUserInput = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      await register(createUserData);
      onSuccess?.();
    } catch (err) {
      console.error("Erro no registro:", err);
    }
  };
  const handleLoginClick = () => {
    onLogin?.();
  };

  // Watch password for strength indicator
  const watchedPassword = watch("password");

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
      {isRegisterLoading && (
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
              Criando conta...
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={{ textAlign: "center", mb: 3 }}>
        <PersonAdd sx={{ fontSize: 48, color: "primary.main", mb: 1 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Criar Conta
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Crie sua conta para começar
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
        {/* Nome */}
        <Box sx={{ height: 80 }}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Nome"
                type="text"
                error={!!errors.name}
                helperText={errors.name?.message || " "}
                disabled={isRegisterLoading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            )}
          />
        </Box>
        {/* Email */}
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
                disabled={isRegisterLoading}
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
        </Box>{" "}
        {/* Senha */}
        <Box>
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
                disabled={isRegisterLoading}
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
                        disabled={isRegisterLoading}
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
          <PasswordStrengthIndicator
            password={watchedPassword}
            name={watch("name")}
            email={watch("email")}
          />
        </Box>
        {/* Confirmar Senha */}
        <Box sx={{ height: 80 }}>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Confirmar Senha"
                type={showConfirmPassword ? "text" : "password"}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message || " "}
                disabled={isRegisterLoading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                        disabled={isRegisterLoading}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
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
          disabled={isRegisterLoading || !isValid}
          sx={{ mt: 1, py: 1.5 }}
          startIcon={
            isRegisterLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <PersonAdd />
            )
          }
        >
          {isRegisterLoading ? "Criando conta..." : "Criar Conta"}
        </Button>
        <Divider sx={{ my: 2 }}>
          <Typography variant="body2" color="text.secondary">
            ou
          </Typography>
        </Divider>
        <Button
          fullWidth
          variant="outlined"
          size="large"
          onClick={handleLoginClick}
          disabled={isRegisterLoading}
          startIcon={<Login />}
          sx={{
            py: 1.5,
            borderWidth: 2,
            "&:hover": {
              borderWidth: 2,
            },
          }}
        >
          Já tenho uma conta
        </Button>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
