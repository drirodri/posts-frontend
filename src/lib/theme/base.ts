import { Theme } from "./types";

// TODO: Implement actual color values, font families, and measurements
// This is a placeholder structure for the design system

export const baseTheme: Theme = {
  colors: {
    primary: {
      50: "TODO: #primary-50",
      100: "TODO: #primary-100",
      200: "TODO: #primary-200",
      300: "TODO: #primary-300",
      400: "TODO: #primary-400",
      500: "TODO: #primary-500",
      600: "TODO: #primary-600",
      700: "TODO: #primary-700",
      800: "TODO: #primary-800",
      900: "TODO: #primary-900",
      950: "TODO: #primary-950",
    },

    secondary: {
      50: "TODO: #secondary-50",
      100: "TODO: #secondary-100",
      200: "TODO: #secondary-200",
      300: "TODO: #secondary-300",
      400: "TODO: #secondary-400",
      500: "TODO: #secondary-500",
      600: "TODO: #secondary-600",
      700: "TODO: #secondary-700",
      800: "TODO: #secondary-800",
      900: "TODO: #secondary-900",
      950: "TODO: #secondary-950",
    },

    neutral: {
      50: "TODO: #neutral-50",
      100: "TODO: #neutral-100",
      200: "TODO: #neutral-200",
      300: "TODO: #neutral-300",
      400: "TODO: #neutral-400",
      500: "TODO: #neutral-500",
      600: "TODO: #neutral-600",
      700: "TODO: #neutral-700",
      800: "TODO: #neutral-800",
      900: "TODO: #neutral-900",
      950: "TODO: #neutral-950",
    },

    success: {
      50: "TODO: #success-50",
      100: "TODO: #success-100",
      500: "TODO: #success-500",
      700: "TODO: #success-700",
      900: "TODO: #success-900",
    },

    warning: {
      50: "TODO: #warning-50",
      100: "TODO: #warning-100",
      500: "TODO: #warning-500",
      700: "TODO: #warning-700",
      900: "TODO: #warning-900",
    },

    error: {
      50: "TODO: #error-50",
      100: "TODO: #error-100",
      500: "TODO: #error-500",
      700: "TODO: #error-700",
      900: "TODO: #error-900",
    },

    info: {
      50: "TODO: #info-50",
      100: "TODO: #info-100",
      500: "TODO: #info-500",
      700: "TODO: #info-700",
      900: "TODO: #info-900",
    },
  },

  typography: {
    fontFamily: {
      sans: ["Roboto", "system-ui", "sans-serif"],
      serif: ["Playfair Display", "Georgia", "serif"],
      mono: ["Fira Code", "Monaco", "monospace"],
    },

    fontSize: {
      xs: "TODO: 0.75rem",
      sm: "TODO: 0.875rem",
      base: "TODO: 1rem",
      lg: "TODO: 1.125rem",
      xl: "TODO: 1.25rem",
      "2xl": "TODO: 1.5rem",
      "3xl": "TODO: 1.875rem",
      "4xl": "TODO: 2.25rem",
      "5xl": "TODO: 3rem",
      "6xl": "TODO: 3.75rem",
    },

    fontWeight: {
      thin: "TODO: 100",
      light: "TODO: 300",
      normal: "TODO: 400",
      medium: "TODO: 500",
      semibold: "TODO: 600",
      bold: "TODO: 700",
      extrabold: "TODO: 800",
    },

    lineHeight: {
      tight: "TODO: 1.25",
      normal: "TODO: 1.5",
      relaxed: "TODO: 1.625",
      loose: "TODO: 2",
    },

    letterSpacing: {
      tighter: "TODO: -0.05em",
      tight: "TODO: -0.025em",
      normal: "TODO: 0em",
      wide: "TODO: 0.025em",
      wider: "TODO: 0.05em",
      widest: "TODO: 0.1em",
    },
  },

  spacing: {
    0: "TODO: 0px",
    1: "TODO: 0.25rem",
    2: "TODO: 0.5rem",
    3: "TODO: 0.75rem",
    4: "TODO: 1rem",
    5: "TODO: 1.25rem",
    6: "TODO: 1.5rem",
    8: "TODO: 2rem",
    10: "TODO: 2.5rem",
    12: "TODO: 3rem",
    16: "TODO: 4rem",
    20: "TODO: 5rem",
    24: "TODO: 6rem",
    32: "TODO: 8rem",
    40: "TODO: 10rem",
    48: "TODO: 12rem",
    56: "TODO: 14rem",
    64: "TODO: 16rem",
  },

  borderRadius: {
    none: "TODO: 0px",
    sm: "TODO: 0.125rem",
    md: "TODO: 0.375rem",
    lg: "TODO: 0.5rem",
    xl: "TODO: 0.75rem",
    "2xl": "TODO: 1rem",
    "3xl": "TODO: 1.5rem",
    full: "TODO: 9999px",
  },

  shadow: {
    sm: "TODO: 0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "TODO: 0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "TODO: 0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "TODO: 0 20px 25px -5px rgb(0 0 0 / 0.1)",
    "2xl": "TODO: 0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "TODO: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "TODO: 0 0 #0000",
  },

  breakpoints: {
    xs: "TODO: 475px",
    sm: "TODO: 640px",
    md: "TODO: 768px",
    lg: "TODO: 1024px",
    xl: "TODO: 1280px",
    "2xl": "TODO: 1536px",
  },

  components: {
    button: {
      variants: {
        primary: "TODO: primary button styles",
        secondary: "TODO: secondary button styles",
        danger: "TODO: danger button styles",
        ghost: "TODO: ghost button styles",
        outline: "TODO: outline button styles",
      },
      sizes: {
        xs: "TODO: extra small button size",
        sm: "TODO: small button size",
        md: "TODO: medium button size",
        lg: "TODO: large button size",
        xl: "TODO: extra large button size",
      },
    },

    input: {
      variants: {
        default: "TODO: default input styles",
        error: "TODO: error input styles",
        success: "TODO: success input styles",
      },
      sizes: {
        sm: "TODO: small input size",
        md: "TODO: medium input size",
        lg: "TODO: large input size",
      },
    },

    text: {
      variants: {
        heading: "TODO: heading text styles",
        body: "TODO: body text styles",
        caption: "TODO: caption text styles",
        overline: "TODO: overline text styles",
      },
      sizes: {
        xs: "TODO: extra small text size",
        sm: "TODO: small text size",
        md: "TODO: medium text size",
        lg: "TODO: large text size",
        xl: "TODO: extra large text size",
        "2xl": "TODO: 2x large text size",
        "3xl": "TODO: 3x large text size",
        "4xl": "TODO: 4x large text size",
        "5xl": "TODO: 5x large text size",
        "6xl": "TODO: 6x large text size",
      },
    },

    avatar: {
      sizes: {
        xs: "TODO: 20px",
        sm: "TODO: 24px",
        md: "TODO: 32px",
        lg: "TODO: 40px",
        xl: "TODO: 48px",
        "2xl": "TODO: 64px",
      },
    },

    icon: {
      sizes: {
        xs: "TODO: 12px",
        sm: "TODO: 16px",
        md: "TODO: 20px",
        lg: "TODO: 24px",
        xl: "TODO: 32px",
        "2xl": "TODO: 40px",
      },
    },
  },
};
