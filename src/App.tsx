import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { AuthProvider } from "./hooks/auth";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { ProtectedRoute } from "./components/auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/login" element={<LoginPage />} />{" "}
          {/* Página de registro */}
          <Route path="/register" element={<RegisterPage />} />
          {/* Página de recuperação de senha (placeholder) */}
          <Route
            path="/forgot-password"
            element={
              <div style={{ padding: "20px", textAlign: "center" }}>
                <h1>Recuperar Senha (Em desenvolvimento)</h1>
                <p>
                  Página de recuperação de senha será implementada em breve.
                </p>
                <a href="/login">Voltar para o login</a>
              </div>
            }
          />
          {/* Rotas protegidas */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <h1>Dashboard (Em desenvolvimento)</h1>
                  <p>Bem-vindo! Esta página será implementada em breve.</p>
                </div>
              </ProtectedRoute>
            }
          />
          {/* Rota padrão */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          {/* 404 */}
          <Route
            path="*"
            element={
              <div style={{ padding: "20px", textAlign: "center" }}>
                <h1>404 - Página não encontrada</h1>
                <p>A página que você está procurando não existe.</p>
                <a href="/login">Voltar para o login</a>
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
