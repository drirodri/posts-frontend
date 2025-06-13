# Design System - Material UI Migration

This document contains the design tokens from the previous custom theme system to be used when configuring Material UI theme.

## Color Palette

### Primary Colors

- **Non-photo Blue**: `#b1e5f2` (HSL: 192, 71%, 82%)
- **Ghost White**: `#e8e9f3` (HSL: 235, 31%, 93%)
- **French Gray**: `#a6a6a8` (HSL: 240, 1%, 65%)
- **Raisin Black**: `#272635` (HSL: 244, 16%, 18%)
- **Silver**: `#cecece` (HSL: 0, 0%, 81%)

### Material UI Theme Configuration Reference

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: "#61b5de", // Derived from non-photo-blue
      light: "#b1e5f2",
      dark: "#1185ca",
      contrastText: "#272635",
    },
    secondary: {
      main: "#e8e9f3", // ghost-white
      light: "#f5f5f8",
      dark: "#88899b",
      contrastText: "#272635",
    },
    background: {
      default: "#e8e9f3", // ghost-white
      paper: "#ffffff",
    },
    text: {
      primary: "#272635", // raisin-black
      secondary: "#a6a6a8", // french-gray
    },
  },
});
```

## Typography

### Font Families

- **Sans-serif**: "Roboto", system-ui, sans-serif
- **Serif**: "Playfair Display", Georgia, serif
- **Monospace**: "Fira Code", Monaco, monospace

### Google Fonts Import

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap");
```

### Material UI Typography Configuration

```javascript
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", system-ui, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
    },
    h5: {
      fontFamily: '"Playfair Display", Georgia, serif',
    },
    h6: {
      fontFamily: '"Playfair Display", Georgia, serif',
    },
    code: {
      fontFamily: '"Fira Code", Monaco, monospace',
    },
  },
});
```

## Component Design Tokens (for Material UI customization)

### Spacing Scale

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### Border Radius

- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px
- 2xl: 24px

### Shadows

Material UI provides excellent shadow system, but custom values were:

- sm: 0 1px 2px rgba(0, 0, 0, 0.05)
- md: 0 4px 6px rgba(0, 0, 0, 0.1)
- lg: 0 10px 15px rgba(0, 0, 0, 0.1)
- xl: 0 20px 25px rgba(0, 0, 0, 0.1)

## Migration Notes

1. Replace custom Button components with Material UI Button
2. Replace custom Input components with Material UI TextField
3. Replace custom theme context with Material UI ThemeProvider
4. Update component styling to use Material UI's sx prop or styled components
5. Remove Tailwind CSS classes and replace with Material UI components
6. Consider using Material UI's design tokens for consistency

## Cleanup Completed

The following custom components and theme files have been removed as they are now replaced by Material UI:

### Removed Theme Files

- `src/lib/theme/` (entire directory)
- Custom CSS variables in `index.css`
- `App.css` (Vite default styles)
- Tailwind configuration

### Removed Custom Components

- `src/components/atoms/Button/`
- `src/components/atoms/Input/`
- `src/components/atoms/Text/`
- `src/components/atoms/Label/`
- Custom theme context and utilities

### Dependencies to Remove

After Material UI installation, you can remove:

- `tailwindcss`
- `@tailwindcss/forms`
- `@tailwindcss/vite`
- `tailwind-merge`
- `tw-animate-css`
- `next-themes` (use Material UI's theme switching)
- `clsx` (Material UI has built-in className utilities)
- All `@radix-ui/*` packages (Material UI provides these components)
- `lucide-react` (use Material UI icons instead)

### Keep These Dependencies

- `react-hook-form` (works well with Material UI)
- `@hookform/resolvers` (for form validation)
- `zod` (for validation schemas)
- `axios` (for API calls)
- `react-router-dom` (for routing)
- `sonner` (or replace with Material UI Snackbar)
