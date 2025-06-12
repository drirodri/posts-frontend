# useAuth Hook - Guia Completo

## 🚀 **Setup Rápido**

### 1. **Instalação**

O `useAuth` já está implementado no projeto. Os arquivos estão em:

- `src/hooks/AuthContext.ts` - Context e tipos
- `src/hooks/AuthProvider.tsx` - Provider component
- `src/hooks/useAuthHook.ts` - Hook customizado
- `src/hooks/index.ts` - Exports centralizados

### 2. **Setup no App Principal**

```tsx
// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./hooks";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
```

### 3. **Usar o Hook em Componentes**

```tsx
import React from "react";
import { useAuth } from "./hooks";

export const MyComponent: React.FC = () => {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Bem-vindo, {user?.name}!</p>
          <button onClick={logout}>Sair</button>
        </div>
      ) : (
        <button onClick={() => login({ email: "...", password: "..." })}>
          Entrar
        </button>
      )}
    </div>
  );
};
```

---

## 📚 **API do useAuth**

### **Estado**

- `user: User | null` - Dados do usuário atual
- `isAuthenticated: boolean` - Se o usuário está logado
- `isLoading: boolean` - Se há operação em andamento
- `error: string | null` - Mensagem de erro atual

### **Ações**

- `login(credentials)` - Fazer login
- `register(userData)` - Criar conta (auto-login)
- `logout()` - Sair e limpar dados
- `updateProfile(data)` - Atualizar perfil
- `refreshToken()` - Renovar token
- `clearError()` - Limpar erro

### **Utilitários**

- `hasRole(role)` - Verificar role específica
- `isAdmin()` - Se é admin
- `isModerator()` - Se é moderator ou admin

---

## 🎯 **Exemplos Práticos**

### **Login Form**

```tsx
export const LoginForm: React.FC = () => {
  const { login, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email: "user@example.com", password: "senha123" });
    } catch (error) {
      // Erro já está no context
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <button disabled={isLoading}>
        {isLoading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
};
```

### **Navegação com Auth**

```tsx
export const Navigation: React.FC = () => {
  const { user, isAuthenticated, logout, isAdmin } = useAuth();

  return (
    <nav>
      {isAuthenticated ? (
        <div>
          <span>Olá, {user?.name}</span>
          {isAdmin() && <a href="/admin">Admin</a>}
          <button onClick={logout}>Sair</button>
        </div>
      ) : (
        <div>
          <a href="/login">Entrar</a>
          <a href="/register">Cadastrar</a>
        </div>
      )}
    </nav>
  );
};
```

### **Rota Protegida**

```tsx
interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  adminOnly = false,
}) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) return <div>Carregando...</div>;
  if (!isAuthenticated) return <div>Faça login</div>;
  if (adminOnly && !isAdmin()) return <div>Acesso negado</div>;

  return <>{children}</>;
};
```

### **Atualizar Perfil**

```tsx
export const ProfileForm: React.FC = () => {
  const { user, updateProfile, isLoading } = useAuth();

  const handleUpdate = async () => {
    try {
      await updateProfile({
        name: "Novo Nome",
        email: "novo@email.com",
      });
      alert("Perfil atualizado!");
    } catch (error) {
      console.error("Erro ao atualizar");
    }
  };

  return (
    <div>
      <p>Nome atual: {user?.name}</p>
      <button onClick={handleUpdate} disabled={isLoading}>
        {isLoading ? "Salvando..." : "Atualizar"}
      </button>
    </div>
  );
};
```

---

## 🔐 **Controle de Acesso**

### **Por Role**

```tsx
const MyComponent = () => {
  const { hasRole, isAdmin, isModerator } = useAuth();

  return (
    <div>
      {hasRole(UserType.USER) && <div>Conteúdo para usuários</div>}
      {isModerator() && <div>Conteúdo para moderadores+</div>}
      {isAdmin() && <div>Conteúdo só para admins</div>}
    </div>
  );
};
```

### **Renderização Condicional**

```tsx
const { user, isAuthenticated } = useAuth();

// Mostrar diferentes UIs baseado no estado de auth
if (!isAuthenticated) {
  return <LoginPage />;
}

if (user?.role === UserType.ADMIN) {
  return <AdminDashboard />;
}

return <UserDashboard />;
```

---

## ⚡ **Recursos Automáticos**

### **Refresh Automático de Token**

```tsx
// Componente que roda em background
const TokenRefresher: React.FC = () => {
  const { refreshToken, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.error("Token refresh falhou");
      }
    }, 14 * 60 * 1000); // 14 minutos

    return () => clearInterval(interval);
  }, [isAuthenticated, refreshToken]);

  return null;
};
```

### **Persistência de Estado**

O `useAuth` automaticamente:

- ✅ Verifica token no localStorage ao inicializar
- ✅ Busca dados do usuário se token existe
- ✅ Mantém estado entre reloads da página
- ✅ Limpa dados ao fazer logout

---

## 🛠️ **Integração com APIs**

### **Headers Automáticos**

O sistema já está configurado com interceptors no Axios que:

- Adicionam automaticamente o token JWT nos headers
- Renovam o token quando expira (401)
- Fazem logout automático se refresh falha

### **Tipagem TypeScript**

Todos os métodos são 100% tipados:

```tsx
// ✅ Tipo correto inferido
const { user } = useAuth(); // user: User | null

// ✅ Validação de entrada
await login(credentials); // credentials: LoginInput

// ✅ Retorno tipado
await updateProfile(data); // data: Partial<User>
```

---

## 🚨 **Tratamento de Erros**

### **Erros Automáticos**

```tsx
const { error, clearError } = useAuth();

// Exibir erro global
{
  error && (
    <div className="error-banner">
      {error}
      <button onClick={clearError}>×</button>
    </div>
  );
}
```

### **Erros Customizados**

```tsx
try {
  await login(credentials);
  // Sucesso - usuário logado
} catch (error) {
  // Erro já está no context state
  // Mas você pode fazer tratamento adicional aqui
  console.error("Login falhou:", error);
}
```

---

## 📱 **Estrutura de Arquivos Sugerida**

```
src/
├── hooks/
│   ├── index.ts           # Exports centralizados
│   ├── AuthContext.ts     # Context e tipos
│   ├── AuthProvider.tsx   # Provider component
│   └── useAuthHook.ts     # Hook customizado
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── ProtectedRoute.tsx
│   └── layout/
│       └── Navigation.tsx
└── pages/
    ├── LoginPage.tsx
    ├── RegisterPage.tsx
    └── ProfilePage.tsx
```

---

## 🎉 **Próximos Passos**

1. **✅ Implementado**: AuthProvider + useAuth hook
2. **🔄 Agora**: Criar componentes de UI (LoginForm, etc.)
3. **📝 Próximo**: Integrar com roteamento (React Router)
4. **🎨 Depois**: Melhorar UI/UX dos formulários
5. **⚡ Final**: Testes unitários e de integração

O `useAuth` está pronto para uso! 🚀
