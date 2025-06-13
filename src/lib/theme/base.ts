import { Theme } from "./types";

export const baseTheme: Theme = {
  colors: {
    // Primary palette
    primary: {
      50: "#b1e5f2", // non-photo-blue (lightest)
      100: "#b1e5f2",
      200: "#9dd9ed",
      300: "#89cde8",
      400: "#75c1e3",
      500: "#61b5de", // main primary
      600: "#4da9d9",
      700: "#399dd4",
      800: "#2591cf",
      900: "#1185ca", // darkest
      main: "#61b5de",
      light: "#b1e5f2",
      dark: "#1185ca",
      contrastText: "#272635", // raisin-black
    },

    // Secondary palette (usando ghost-white como base)
    secondary: {
      50: "#f5f5f8",
      100: "#e8e9f3", // ghost-white
      200: "#dcdde8",
      300: "#d0d1dd",
      400: "#c4c5d2",
      500: "#b8b9c7",
      600: "#acadbc",
      700: "#a0a1b1",
      800: "#9495a6",
      900: "#88899b",
      main: "#e8e9f3",
      light: "#f5f5f8",
      dark: "#88899b",
      contrastText: "#272635",
    },

    // Neutral palette
    neutral: {
      50: "#f8f8f8",
      100: "#f0f0f0",
      200: "#e8e8e8",
      300: "#cecece", // silver
      400: "#b6b6b6",
      500: "#a6a6a8", // french-gray
      600: "#8a8a8c",
      700: "#6e6e70",
      800: "#525254",
      900: "#272635", // raisin-black
      main: "#a6a6a8",
      light: "#cecece",
      dark: "#272635",
      contrastText: "#e8e9f3",
    },

    // System colors
    background: {
      default: "#e8e9f3", // ghost-white
      paper: "#ffffff",
      alt: "#f5f5f8",
    },

    text: {
      primary: "#272635", // raisin-black
      secondary: "#a6a6a8", // french-gray
      disabled: "#cecece", // silver
      hint: "#cecece",
    },

    // Status colors
    success: {
      50: "#e8f5e8",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#ffffff",
    },

    warning: {
      50: "#fff8e1",
      100: "#ffecb3",
      200: "#ffe082",
      300: "#ffd54f",
      400: "#ffca28",
      500: "#ffc107",
      600: "#ffb300",
      700: "#ffa000",
      800: "#ff8f00",
      900: "#ff6f00",
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#ffffff",
    },

    error: {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#ffffff",
    },

    info: {
      50: "#e3f2fd",
      100: "#b1e5f2", // non-photo-blue
      200: "#c7edf6",
      300: "#b1e5f2",
      400: "#9bdcef",
      500: "#85d3ec",
      600: "#6fcae8",
      700: "#59c1e5",
      800: "#43b8e2",
      900: "#2dafdf",
      main: "#b1e5f2", // non-photo-blue
      light: "#c7edf6",
      dark: "#8dd4ea",
      contrastText: "#272635",
    },
  },

  typography: {
    fontFamily: {
      sans: ["Roboto", "system-ui", "sans-serif"],
      serif: ["Playfair Display", "Georgia", "serif"],
      mono: ["Fira Code", "Monaco", "monospace"],
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },

    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },

  spacing: {
    0: "0px",
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },

  borderRadius: {
    none: "0px",
    xs: "0.0625rem",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },

  shadow: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "0 0 #0000",
  },

  breakpoints: {
    xs: "475px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  transition: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
    timing: {
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    },
  },

  zIndex: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  components: {
    button: {
      variants: {
        primary: "primary button styles",
        secondary: "secondary button styles",
        tertiary: "tertiary button styles",
        danger: "danger button styles",
        success: "success button styles",
        warning: "warning button styles",
        ghost: "ghost button styles",
        outline: "outline button styles",
        link: "link button styles",
      },
      sizes: {
        xs: "extra small button size",
        sm: "small button size",
        md: "medium button size",
        lg: "large button size",
        xl: "extra large button size",
      },
      states: {
        default: "default button state",
        hover: "hover button state",
        active: "active button state",
        disabled: "disabled button state",
        loading: "loading button state",
      },
    },

    input: {
      variants: {
        default: "default input styles",
        filled: "filled input styles",
        outlined: "outlined input styles",
        error: "error input styles",
        success: "success input styles",
        warning: "warning input styles",
      },
      sizes: {
        xs: "extra small input size",
        sm: "small input size",
        md: "medium input size",
        lg: "large input size",
        xl: "extra large input size",
      },
      states: {
        default: "default input state",
        focus: "focus input state",
        error: "error input state",
        disabled: "disabled input state",
      },
    },

    text: {
      variants: {
        display: "display text styles",
        heading: "heading text styles",
        title: "title text styles",
        body: "body text styles",
        label: "label text styles",
        caption: "caption text styles",
        overline: "overline text styles",
      },
      sizes: {
        xs: "extra small text size",
        sm: "small text size",
        md: "medium text size",
        lg: "large text size",
        xl: "extra large text size",
        "2xl": "2x large text size",
        "3xl": "3x large text size",
        "4xl": "4x large text size",
        "5xl": "5x large text size",
        "6xl": "6x large text size",
      },
    },

    card: {
      variants: {
        elevated: "elevated card styles",
        outlined: "outlined card styles",
        filled: "filled card styles",
      },
      sizes: {
        sm: "small card size",
        md: "medium card size",
        lg: "large card size",
        xl: "extra large card size",
      },
    },

    avatar: {
      sizes: {
        xs: "20px",
        sm: "24px",
        md: "32px",
        lg: "40px",
        xl: "48px",
        "2xl": "64px",
      },
      variants: {
        circular: "circular avatar styles",
        rounded: "rounded avatar styles",
        square: "square avatar styles",
      },
    },

    icon: {
      sizes: {
        xs: "12px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
      },
    },

    badge: {
      variants: {
        solid: "solid badge styles",
        outline: "outline badge styles",
        soft: "soft badge styles",
      },
      sizes: {
        sm: "small badge size",
        md: "medium badge size",
        lg: "large badge size",
      },
    },
  },
};

// Exportar as cores como constantes para fácil acesso
export const colors = {
  ghostWhite: "#e8e9f3",
  silver: "#cecece",
  frenchGray: "#a6a6a8",
  raisinBlack: "#272635",
  nonPhotoBlue: "#b1e5f2",
} as const;
