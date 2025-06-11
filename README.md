# Dri Posts - Frontend Application

A modern React frontend application for the Dri Posts platform, built with TypeScript, Vite, and Tailwind CSS. This application provides a complete user interface for post management with authentication and authorization features.

## 🏗️ Architecture Overview

This frontend is part of a microservices architecture:

- **Frontend** (React + TypeScript + Vite) - This application
- **[Users API](https://github.com/drirodri/users-api)** (NestJS) - Authentication & user management
- **[Posts API](https://github.com/drirodri/posts-api)** (Go) - Posts management & operations

## 🚀 Features

### ✅ Implemented Features

- 🎨 **Modern UI Components** - Built with Radix UI and Tailwind CSS
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔧 **Development Tools** - ESLint, TypeScript, and Vite for optimal DX
- 🎯 **Component Architecture** - Organized component structure with shadcn/ui

### 🚧 Planned Features

- 🔐 **Authentication Flow** - Login, registration, and JWT token management
- 👤 **User Management** - Profile management and user operations
- 📝 **Post Management** - Create, read, update, and delete posts
- 🛡️ **Role-Based Access** - Admin and user permission handling
- 🔄 **Real-time Updates** - Live post updates and notifications
- 📊 **Dashboard** - User dashboard with analytics and insights

## 🛠️ Technology Stack

### Core Technologies

- **React 18** - Frontend framework with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Styling

- **Radix UI** - Accessible, unstyled UI primitives
- **shadcn/ui** - Beautiful, reusable components built on Radix UI
- **Lucide Icons** - Beautiful & consistent icon library
- **class-variance-authority** - Dynamic className composition
- **clsx** - Conditional className utility

### Form Handling & Validation

- **React Hook Form** - Performant forms with easy validation
- **@hookform/resolvers** - Validation resolvers for various schema libraries
- **Zod** - TypeScript-first schema validation

### Development Tools

- **ESLint** - Code linting with TypeScript support
- **TypeScript** - Static type checking
- **@tailwindcss/forms** - Better form styling defaults
- **@tailwindcss/vite** - Vite integration for Tailwind CSS

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Running [Users API](https://github.com/drirodri/users-api) (for authentication)
- Running [Posts API](https://github.com/drirodri/posts-api) (for posts data)

### Installation

1. **Navigate to frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint

# Type check without emitting files
npx tsc --noEmit
```

## 📁 Project Structure

```
frontend/
├── public/                     # Static assets
│   ├── vite.svg               # Vite logo
│   └── ...                    # Other static files
├── src/
│   ├── components/            # Reusable UI components
│   │   └── ui/               # shadcn/ui components
│   ├── pages/                # Route components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── services/             # API service layers
│   │   ├── api.ts           # Axios configuration
│   │   ├── auth.ts          # Users API authentication calls
│   │   └── posts.ts         # Posts API calls
│   ├── types/                # TypeScript type definitions
│   │   └── auth.ts          # Authentication types
│   ├── assets/               # Static assets (images, icons)
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles with Tailwind
│   └── main.tsx             # Application entry point
├── components.json           # shadcn/ui configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🔌 API Integration

### Users API Integration

- **Authentication endpoints** - Login, registration, token refresh
- **User management** - Profile operations, role-based access
- **Base URL**: Configure in environment variables

### Posts API Integration

- **CRUD operations** - Create, read, update, delete posts
- **Authentication** - JWT token validation via Users API
- **Base URL**: Configure in environment variables

### Environment Configuration

Create a `.env.local` file:

```env
# API Configuration
VITE_USERS_API_URL=http://localhost:3000
VITE_POSTS_API_URL=http://localhost:8080

# App Configuration
VITE_APP_NAME=Dri Posts
VITE_APP_VERSION=1.0.0
```

## 🎨 UI Components

### Component Library

- Built with **shadcn/ui** for consistent, accessible components
- **Radix UI** primitives for headless, accessible base components
- **Tailwind CSS** for styling and responsive design

### Available Components

- **Navigation** - Header navigation with user menu
- **Forms** - Login, registration, and post creation forms
- **Buttons** - Various button variants and sizes
- **Cards** - Post cards, user cards, dashboard widgets
- **Modals** - Confirmation dialogs, forms, and overlays
- **Tables** - Data tables with sorting and pagination

## 🔒 Authentication Flow

### User Authentication

1. **Registration** - New user signup via Users API
2. **Login** - Email/password authentication with JWT tokens
3. **Token Management** - Automatic token refresh and storage
4. **Route Protection** - Protected routes requiring authentication
5. **Role-Based Access** - Different UI based on user roles

### Protected Routes

- `/dashboard` - User dashboard (authenticated users)
- `/posts/create` - Create new posts (authenticated users)
- `/admin` - Admin panel (admin users only)
- `/profile` - User profile management (authenticated users)

## 🧪 Development Guidelines

### Code Style

- **TypeScript** - Strict type checking enabled
- **ESLint** - Enforced code quality rules
- **Component Naming** - PascalCase for components
- **File Naming** - kebab-case for files, PascalCase for components

### Component Guidelines

- Use **functional components** with hooks
- Implement **proper TypeScript types** for all props
- Follow **single responsibility principle**
- Use **custom hooks** for complex logic
- Implement **error boundaries** for error handling

### State Management

- **React Context** - Global state management
- **React Hook Form** - Form state management
- **Custom Hooks** - Reusable stateful logic

## 🔄 Integration with Backend APIs

### Users API (NestJS)

- **Authentication** - JWT-based login and registration
- **User Management** - CRUD operations for user data
- **Role Management** - Admin, User, Moderator roles
- **Security** - bcrypt password hashing, refresh tokens

### Posts API (Go)

- **Post Operations** - Create, read, update, delete posts
- **Authentication** - Token validation via Users API
- **Authorization** - Role-based post permissions
- **Performance** - Efficient Go backend with PostgreSQL

## 📚 Documentation

### API Documentation

- **Users API Swagger**: `http://localhost:3000/api`, See [Users API README] (https://github.com/drirodri/users-api)
- **Posts API Documentation**: See [Posts API README](https://github.com/drirodri/posts-api/blob/master/README.md)

### Development Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Vite Guide](https://vitejs.dev/guide/)

## 🤝 Contributing

1. Follow the established code style and TypeScript conventions
2. Write meaningful commit messages following conventional commits
3. Test all new features thoroughly
4. Update documentation for any new features
5. Ensure all ESLint rules pass before committing

## 📝 License

This project is for educational purposes and demonstrates modern React development practices with TypeScript, Vite, and microservices integration.

---

**Note**: This is part of a comprehensive full-stack application showcasing modern web development practices with React frontend, NestJS authentication service, and Go posts API. The implementation demonstrates production-ready patterns for building scalable web applications.
