// Theme Definition Types
export interface ColorPalette {
  // Primary colors
  primary: {
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
    950: string;
  };

  // Secondary colors
  secondary: {
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
    950: string;
  };

  // Neutral/Gray colors
  neutral: {
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
    950: string;
  };

  // Semantic colors
  success: {
    50: string;
    100: string;
    500: string;
    700: string;
    900: string;
  };

  warning: {
    50: string;
    100: string;
    500: string;
    700: string;
    900: string;
  };

  error: {
    50: string;
    100: string;
    500: string;
    700: string;
    900: string;
  };

  info: {
    50: string;
    100: string;
    500: string;
    700: string;
    900: string;
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
    thin: string;
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
  };

  lineHeight: {
    tight: string;
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
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
  40: string;
  48: string;
  56: string;
  64: string;
}

export interface BorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  full: string;
}

export interface Shadow {
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

export interface Theme {
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  borderRadius: BorderRadius;
  shadow: Shadow;
  breakpoints: Breakpoints;

  // Component-specific themes
  components: {
    button: {
      variants: {
        primary: string;
        secondary: string;
        danger: string;
        ghost: string;
        outline: string;
      };
      sizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };

    input: {
      variants: {
        default: string;
        error: string;
        success: string;
      };
      sizes: {
        sm: string;
        md: string;
        lg: string;
      };
    };

    text: {
      variants: {
        heading: string;
        body: string;
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

    avatar: {
      sizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
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
  };
}
