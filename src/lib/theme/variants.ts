import { Theme } from "./types";
import { baseTheme } from "./base";

/**
 * Light theme variant
 * TODO: Implement actual light theme colors and styles
 */
export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    // TODO: Override with light theme specific colors
    primary: {
      ...baseTheme.colors.primary,
      // Example structure - replace with actual light theme colors
      50: "TODO: light-primary-50",
      500: "TODO: light-primary-500",
      900: "TODO: light-primary-900",
    },
    neutral: {
      ...baseTheme.colors.neutral,
      // Background colors for light theme
      50: "TODO: #ffffff - light background",
      100: "TODO: #f8f9fa - light surface",
      500: "TODO: #6b7280 - light text secondary",
      900: "TODO: #111827 - light text primary",
    },
  },
};

/**
 * Dark theme variant
 * TODO: Implement actual dark theme colors and styles
 */
export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    // TODO: Override with dark theme specific colors
    primary: {
      ...baseTheme.colors.primary,
      // Example structure - replace with actual dark theme colors
      50: "TODO: dark-primary-50",
      500: "TODO: dark-primary-500",
      900: "TODO: dark-primary-900",
    },
    neutral: {
      ...baseTheme.colors.neutral,
      // Background colors for dark theme
      50: "TODO: #1a1a1a - dark background",
      100: "TODO: #2d2d2d - dark surface",
      500: "TODO: #9ca3af - dark text secondary",
      900: "TODO: #f9fafb - dark text primary",
    },
  },
};

/**
 * Theme variants map
 */
export const themes = {
  light: lightTheme,
  dark: darkTheme,
  base: baseTheme,
} as const;

export type ThemeVariant = keyof typeof themes;
