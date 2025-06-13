// Theme Definition Types
export interface ColorShade {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface SemanticColorShade {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface BackgroundColors {
  default: string;
  paper: string;
  alt: string;
}

export interface TextColors {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
}

export interface ColorPalette {
  // Primary colors
  primary: ColorShade;

  // Secondary colors
  secondary: ColorShade;

  // Neutral/Gray colors
  neutral: ColorShade;

  // Background colors
  background: BackgroundColors;

  // Text colors
  text: TextColors;

  // Semantic colors
  success: SemanticColorShade;
  warning: SemanticColorShade;
  error: SemanticColorShade;
  info: SemanticColorShade;

  // Direct palette access
  palette?: {
    ghostWhite: string;
    silver: string;
    frenchGray: string;
    raisinBlack: string;
    nonPhotoBlue: string;
  };
}

export interface Typography {
  fontFamily: {
    sans: string[];
    serif: string[];
    mono: string[];
  };

  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
  };

  fontWeight: {
    thin: number | string;
    light: number | string;
    normal: number | string;
    medium: number | string;
    semibold: number | string;
    bold: number | string;
    extrabold: number | string;
    black: number | string;
  };

  lineHeight: {
    none: string;
    tight: string;
    snug: string;
    normal: string;
    relaxed: string;
    loose: string;
  };

  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  };
}

export interface Spacing {
  0: string;
  px: string;
  0.5: string;
  1: string;
  1.5: string;
  2: string;
  2.5: string;
  3: string;
  3.5: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  14: string;
  16: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
  52: string;
  56: string;
  60: string;
  64: string;
  72: string;
  80: string;
  96: string;
}

export interface BorderRadius {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  full: string;
}

export interface Shadow {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  inner: string;
  none: string;
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

export interface Transition {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  timing: {
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
}

export interface ZIndex {
  hide: number;
  auto: string;
  base: number;
  docked: number;
  dropdown: number;
  sticky: number;
  banner: number;
  overlay: number;
  modal: number;
  popover: number;
  skipLink: number;
  toast: number;
  tooltip: number;
}

export interface ComponentVariants {
  button: {
    variants: {
      primary: string;
      secondary: string;
      tertiary: string;
      danger: string;
      success: string;
      warning: string;
      ghost: string;
      outline: string;
      link: string;
    };
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    states: {
      default: string;
      hover: string;
      active: string;
      disabled: string;
      loading: string;
    };
  };

  input: {
    variants: {
      default: string;
      filled: string;
      outlined: string;
      error: string;
      success: string;
      warning: string;
    };
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    states: {
      default: string;
      focus: string;
      error: string;
      disabled: string;
    };
  };

  text: {
    variants: {
      display: string;
      heading: string;
      title: string;
      body: string;
      label: string;
      caption: string;
      overline: string;
    };
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
    };
  };

  card: {
    variants: {
      elevated: string;
      outlined: string;
      filled: string;
    };
    sizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };

  avatar: {
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    variants: {
      circular: string;
      rounded: string;
      square: string;
    };
  };

  icon: {
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
  };

  badge: {
    variants: {
      solid: string;
      outline: string;
      soft: string;
    };
    sizes: {
      sm: string;
      md: string;
      lg: string;
    };
  };
}

export interface Theme {
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  borderRadius: BorderRadius;
  shadow: Shadow;
  breakpoints: Breakpoints;
  transition: Transition;
  zIndex: ZIndex;

  // Component-specific themes
  components: ComponentVariants;
}

// Utility types for theme consumption
export type ThemeColors = Theme["colors"];
export type ThemeTypography = Theme["typography"];
export type ThemeSpacing = Theme["spacing"];
export type ThemeBorderRadius = Theme["borderRadius"];
export type ThemeShadow = Theme["shadow"];
export type ThemeBreakpoints = Theme["breakpoints"];

// Color utility types
export type ColorVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";
export type ColorShadeKey = keyof ColorShade;
export type ButtonVariant = keyof ComponentVariants["button"]["variants"];
export type ButtonSize = keyof ComponentVariants["button"]["sizes"];
export type InputVariant = keyof ComponentVariants["input"]["variants"];
export type InputSize = keyof ComponentVariants["input"]["sizes"];
export type TextVariant = keyof ComponentVariants["text"]["variants"];
export type TextSize = keyof ComponentVariants["text"]["sizes"];

// Theme context types
export interface ThemeContextType {
  theme: Theme;
  toggleColorMode?: () => void;
  colorMode?: "light" | "dark";
}
