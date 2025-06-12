// Main theme export file
export * from "./types";
export * from "./base";
export * from "./variants";
export * from "./tokens";
export * from "./utils";

// Re-export commonly used items
export { baseTheme as defaultTheme } from "./base";
export { lightTheme, darkTheme, themes, type ThemeVariant } from "./variants";
export { designTokens } from "./tokens";
export {
  getTheme,
  useTheme,
  getColor,
  getSpacing,
  getComponentStyles,
} from "./utils";

/**
 * Theme configuration
 * TODO: Add theme configuration options
 */
export const themeConfig = {
  defaultTheme: "light" as const,
  enableColorModeToggle: true,
  enableCustomThemes: false,
  cssVariablePrefix: "--dri-posts",

  // TODO: Add more configuration options
  transitions: {
    duration: "200ms",
    easing: "ease-in-out",
  },

  // TODO: Add breakpoint configuration
  responsive: {
    enabled: true,
    strategy: "mobile-first" as const,
  },
};
