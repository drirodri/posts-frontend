/**
 * Authentication Components
 *
 * Componentes relacionados à autenticação e autorização
 * Organizados por categoria: forms, guards, ui
 * Usando Material UI + React Hook Form + Zod
 */

// Auth Container - Container principal para páginas de auth
export { default as AuthContainer } from "./AuthContainer";

// Auth Forms - Formulários específicos de autenticação
export { default as LoginForm } from "./forms/LoginForm";
export { default as RegisterForm } from "./forms/RegisterForm";

// Auth Guards - Proteção de rotas e controle de acesso
export { default as ProtectedRoute } from "./guards/ProtectedRoute";

// Auth UI - Componentes de interface específicos de auth
export { default as PasswordStrengthIndicator } from "./ui/PasswordStrengthIndicator";

// Re-export das subcategorias para imports mais organizados
export * from "./forms";
export * from "./guards";
export * from "./ui";
