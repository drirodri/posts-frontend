# Estrutura de Componentes

Esta estrutura foi criada pensando no uso futuro do Material UI e segue princípios de organização por funcionalidade e responsabilidade.

## 📁 Estrutura de Pastas

```
src/components/
├── ui/           # Componentes base de interface (wrappers do Material UI)
├── layout/       # Componentes de layout e estrutura de página
├── forms/        # Componentes de formulário e inputs
├── navigation/   # Componentes de navegação (AppBar, Menu, etc.)
├── posts/        # Componentes específicos para funcionalidades de posts
├── auth/         # Componentes de autenticação e autorização
├── common/       # Componentes utilitários e comuns
└── index.ts      # Barrel export principal
```

## 🎯 Filosofia da Organização

### 1. **UI Components** (`/ui`)

- Wrappers customizados dos componentes Material UI
- Mantém consistência visual em toda a aplicação
- Exemplo: Button customizado, TextField com validação padrão

### 2. **Layout Components** (`/layout`)

- Estrutura e layout das páginas
- Componentes de alto nível que organizam o conteúdo
- Exemplo: MainLayout, Header, Sidebar, Footer

### 3. **Form Components** (`/forms`)

- Componentes de formulário integrados com React Hook Form
- Inputs específicos com validação
- Exemplo: TextInput, EmailInput, PasswordInput

### 4. **Navigation Components** (`/navigation`)

- Componentes relacionados à navegação
- Menus, barras de navegação, breadcrumbs
- Exemplo: AppBar, NavigationDrawer, UserMenu

### 5. **Posts Components** (`/posts`)

- Componentes específicos para o domínio de posts
- Funcionalidades relacionadas aos posts do blog
- Exemplo: PostCard, PostList, CreatePostForm

### 6. **Auth Components** (`/auth`)

- Componentes de autenticação e autorização
- Formulários de login, registro, perfil de usuário
- Exemplo: LoginForm, RegisterForm, ProtectedRoute

### 7. **Common Components** (`/common`)

- Componentes utilitários usados em toda a aplicação
- Loading states, modais, componentes de busca
- Exemplo: Loading, ConfirmDialog, SearchBox

## 🚀 Como Usar

### Importação de Componentes

```typescript
// Importação específica
import { Button } from "@/components/ui";
import { PostCard } from "@/components/posts";
import { LoginForm } from "@/components/auth";

// Importação geral
import { Button, PostCard, LoginForm } from "@/components";
```

### Criando Novos Componentes

1. **Identifique a categoria** do componente
2. **Crie a pasta** dentro da categoria apropriada
3. **Implemente o componente** usando Material UI como base
4. **Exporte** no arquivo `index.ts` da categoria
5. **Documente** se necessário

Exemplo:

```
src/components/ui/Button/
├── Button.tsx
├── Button.types.ts
├── Button.stories.tsx (se usar Storybook)
└── index.ts
```

## 🎨 Integração com Material UI

Todos os componentes devem usar Material UI como base:

```typescript
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Exemplo de wrapper customizado
const CustomButton = styled(MuiButton)(({ theme }) => ({
  // Customizações específicas da aplicação
}));

export default function Button(props: ButtonProps) {
  return <CustomButton {...props} />;
}
```

## 📝 Convenções

1. **Nomes de arquivos**: PascalCase para componentes
2. **Pastas**: PascalCase para pastas de componentes
3. **Exports**: Use export default para componentes principais
4. **Props**: Defina interfaces TypeScript para todas as props
5. **Documentação**: Comente componentes complexos

## 🔄 Estados de Desenvolvimento

- ✅ **Estrutura criada** - Pastas e índices organizados
- 🚧 **Em desenvolvimento** - Aguardando instalação do Material UI
- ⏳ **Próximos passos** - Implementação dos componentes

Esta estrutura está pronta para receber a implementação dos componentes usando Material UI!
