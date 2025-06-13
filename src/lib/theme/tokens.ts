import { baseTheme } from "./base";

/**
 * Design tokens for component styling
 * These tokens define the specific styling rules for each atomic component
 */

export const designTokens = {
  // Button component tokens
  button: {
    // Base button properties
    base: {
      borderRadius: baseTheme.borderRadius.md,
      fontWeight: baseTheme.typography.fontWeight.medium,
      fontSize: baseTheme.typography.fontSize.base,
      lineHeight: baseTheme.typography.lineHeight.normal,
      transition: `all ${baseTheme.transition.duration.normal} ${baseTheme.transition.timing.easeInOut}`,
      cursor: "pointer",
      border: "none",
      outline: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: baseTheme.spacing[2],
      fontFamily: baseTheme.typography.fontFamily.sans.join(", "),
      textDecoration: "none", // Add this to base so all variants inherit it
      userSelect: "none" as const,
    },

    // Button size variants
    sizes: {
      xs: {
        height: "24px",
        padding: `${baseTheme.spacing[1]} ${baseTheme.spacing[2]}`,
        fontSize: baseTheme.typography.fontSize.xs,
        gap: baseTheme.spacing[1],
      },
      sm: {
        height: "32px",
        padding: `${baseTheme.spacing[2]} ${baseTheme.spacing[3]}`,
        fontSize: baseTheme.typography.fontSize.sm,
        gap: baseTheme.spacing[1.5],
      },
      md: {
        height: "40px",
        padding: `${baseTheme.spacing[3]} ${baseTheme.spacing[4]}`,
        fontSize: baseTheme.typography.fontSize.base,
        gap: baseTheme.spacing[2],
      },
      lg: {
        height: "48px",
        padding: `${baseTheme.spacing[4]} ${baseTheme.spacing[6]}`,
        fontSize: baseTheme.typography.fontSize.lg,
        gap: baseTheme.spacing[2.5],
      },
      xl: {
        height: "56px",
        padding: `${baseTheme.spacing[5]} ${baseTheme.spacing[8]}`,
        fontSize: baseTheme.typography.fontSize.xl,
        gap: baseTheme.spacing[3],
      },
    },

    // Button color variants - Make all variants consistent
    variants: {
      primary: {
        backgroundColor: baseTheme.colors.primary.main,
        color: baseTheme.colors.primary.contrastText,
        boxShadow: baseTheme.shadow.sm,
        textDecoration: "none", // Add to all variants
        hover: {
          backgroundColor: baseTheme.colors.primary[600],
          boxShadow: baseTheme.shadow.md,
          transform: "translateY(-1px)",
          textDecoration: "none",
        },
        active: {
          backgroundColor: baseTheme.colors.primary[700],
          boxShadow: baseTheme.shadow.sm,
          transform: "translateY(0)",
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[300],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
          boxShadow: "none",
          transform: "none",
          textDecoration: "none",
        },
      },
      secondary: {
        backgroundColor: baseTheme.colors.secondary.main,
        color: baseTheme.colors.secondary.contrastText,
        boxShadow: baseTheme.shadow.sm,
        textDecoration: "none",
        hover: {
          backgroundColor: baseTheme.colors.secondary[600],
          boxShadow: baseTheme.shadow.md,
          transform: "translateY(-1px)",
          textDecoration: "none",
        },
        active: {
          backgroundColor: baseTheme.colors.secondary[700],
          boxShadow: baseTheme.shadow.sm,
          transform: "translateY(0)",
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[300],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
          boxShadow: "none",
          transform: "none",
          textDecoration: "none",
        },
      },
      tertiary: {
        backgroundColor: baseTheme.colors.neutral[100],
        color: baseTheme.colors.neutral[700],
        boxShadow: baseTheme.shadow.sm,
        textDecoration: "none",
        hover: {
          backgroundColor: baseTheme.colors.neutral[200],
          boxShadow: baseTheme.shadow.md,
          transform: "translateY(-1px)",
          textDecoration: "none",
        },
        active: {
          backgroundColor: baseTheme.colors.neutral[300],
          boxShadow: baseTheme.shadow.sm,
          transform: "translateY(0)",
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[300],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
          boxShadow: "none",
          transform: "none",
          textDecoration: "none",
        },
      },
      danger: {
        backgroundColor: baseTheme.colors.error.main,
        color: baseTheme.colors.error.contrastText,
        boxShadow: baseTheme.shadow.sm,
        textDecoration: "none",
        hover: {
          backgroundColor: baseTheme.colors.error[600],
          boxShadow: baseTheme.shadow.md,
          transform: "translateY(-1px)",
          textDecoration: "none",
        },
        active: {
          backgroundColor: baseTheme.colors.error[700],
          boxShadow: baseTheme.shadow.sm,
          transform: "translateY(0)",
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[300],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
          boxShadow: "none",
          transform: "none",
          textDecoration: "none",
        },
      },
      success: {
        backgroundColor: baseTheme.colors.success.main,
        color: baseTheme.colors.success.contrastText,
        boxShadow: baseTheme.shadow.sm,
        textDecoration: "none",
        hover: {
          backgroundColor: baseTheme.colors.success[600],
          boxShadow: baseTheme.shadow.md,
          transform: "translateY(-1px)",
          textDecoration: "none",
        },
        active: {
          backgroundColor: baseTheme.colors.success[700],
          boxShadow: baseTheme.shadow.sm,
          transform: "translateY(0)",
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[300],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
          boxShadow: "none",
          transform: "none",
          textDecoration: "none",
        },
      },
      warning: {
        backgroundColor: baseTheme.colors.warning.main,
        color: baseTheme.colors.warning.contrastText,
        boxShadow: baseTheme.shadow.sm,
        textDecoration: "none",
        hover: {
          backgroundColor: baseTheme.colors.warning[600],
          boxShadow: baseTheme.shadow.md,
          transform: "translateY(-1px)",
          textDecoration: "none",
        },
        active: {
          backgroundColor: baseTheme.colors.warning[700],
          boxShadow: baseTheme.shadow.sm,
          transform: "translateY(0)",
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[300],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
          boxShadow: "none",
          transform: "none",
          textDecoration: "none",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: baseTheme.colors.primary.main,
        boxShadow: "none",
        textDecoration: "none",
        hover: {
          backgroundColor: baseTheme.colors.primary[50],
          color: baseTheme.colors.primary[600],
          textDecoration: "none",
        },
        active: {
          backgroundColor: baseTheme.colors.primary[100],
          color: baseTheme.colors.primary[700],
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: "transparent",
          color: baseTheme.colors.neutral[400],
          cursor: "not-allowed",
          textDecoration: "none",
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: baseTheme.colors.primary.main,
        border: `1px solid ${baseTheme.colors.primary.main}`,
        boxShadow: "none",
        textDecoration: "none",
        hover: {
          backgroundColor: baseTheme.colors.primary.main,
          color: baseTheme.colors.primary.contrastText,
          boxShadow: baseTheme.shadow.sm,
          textDecoration: "none",
        },
        active: {
          backgroundColor: baseTheme.colors.primary[600],
          color: baseTheme.colors.primary.contrastText,
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: "transparent",
          color: baseTheme.colors.neutral[400],
          border: `1px solid ${baseTheme.colors.neutral[300]}`,
          cursor: "not-allowed",
          textDecoration: "none",
        },
      },
      link: {
        backgroundColor: "transparent",
        color: baseTheme.colors.primary.main,
        boxShadow: "none",
        textDecoration: "underline",
        padding: "0",
        height: "auto",
        hover: {
          color: baseTheme.colors.primary[600],
          textDecoration: "none",
        },
        active: {
          color: baseTheme.colors.primary[700],
          textDecoration: "none",
        },
        disabled: {
          backgroundColor: "transparent",
          color: baseTheme.colors.neutral[400],
          cursor: "not-allowed",
          textDecoration: "none",
        },
      },
    },
  },
  // Input component tokens
  input: {
    base: {
      borderRadius: baseTheme.borderRadius.md,
      fontSize: baseTheme.typography.fontSize.base,
      lineHeight: baseTheme.typography.lineHeight.normal,
      fontWeight: baseTheme.typography.fontWeight.normal,
      transition: `all ${baseTheme.transition.duration.normal} ${baseTheme.transition.timing.easeInOut}`,
      width: "100%",
      outline: "none",
      fontFamily: baseTheme.typography.fontFamily.sans.join(", "),
      border: "1px solid",
    },

    sizes: {
      sm: {
        height: "32px",
        padding: `${baseTheme.spacing[2]} ${baseTheme.spacing[3]}`,
        fontSize: baseTheme.typography.fontSize.sm,
      },
      md: {
        height: "40px",
        padding: `${baseTheme.spacing[3]} ${baseTheme.spacing[4]}`,
        fontSize: baseTheme.typography.fontSize.base,
      },
      lg: {
        height: "48px",
        padding: `${baseTheme.spacing[4]} ${baseTheme.spacing[5]}`,
        fontSize: baseTheme.typography.fontSize.lg,
      },
    },

    variants: {
      default: {
        backgroundColor: baseTheme.colors.background.paper,
        borderColor: baseTheme.colors.neutral[300],
        color: baseTheme.colors.text.primary,
        placeholder: {
          color: baseTheme.colors.neutral[500],
        },
        focus: {
          borderColor: baseTheme.colors.primary.main,
          boxShadow: `0 0 0 3px ${baseTheme.colors.primary[100]}`,
        },
        hover: {
          borderColor: baseTheme.colors.neutral[400],
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[100],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
        },
      },
      error: {
        backgroundColor: baseTheme.colors.background.paper,
        borderColor: baseTheme.colors.error.main,
        color: baseTheme.colors.text.primary,
        placeholder: {
          color: baseTheme.colors.neutral[500],
        },
        focus: {
          borderColor: baseTheme.colors.error.main,
          boxShadow: `0 0 0 3px ${baseTheme.colors.error[100]}`,
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[100],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
        },
      },
      success: {
        backgroundColor: baseTheme.colors.background.paper,
        borderColor: baseTheme.colors.success.main,
        color: baseTheme.colors.text.primary,
        placeholder: {
          color: baseTheme.colors.neutral[500],
        },
        focus: {
          borderColor: baseTheme.colors.success.main,
          boxShadow: `0 0 0 3px ${baseTheme.colors.success[100]}`,
        },
        disabled: {
          backgroundColor: baseTheme.colors.neutral[100],
          color: baseTheme.colors.neutral[500],
          cursor: "not-allowed",
        },
      },
    },
  },

  // Text component tokens
  text: {
    base: {
      margin: "TODO: 0",
      padding: "TODO: 0",
      fontFamily: "TODO: theme.typography.fontFamily.sans",
    },

    variants: {
      heading: {
        fontWeight: "TODO: theme.typography.fontWeight.bold",
        lineHeight: "TODO: theme.typography.lineHeight.tight",
        color: "TODO: theme.colors.neutral[900]",
      },
      body: {
        fontWeight: "TODO: theme.typography.fontWeight.normal",
        lineHeight: "TODO: theme.typography.lineHeight.normal",
        color: "TODO: theme.colors.neutral[700]",
      },
      caption: {
        fontWeight: "TODO: theme.typography.fontWeight.normal",
        lineHeight: "TODO: theme.typography.lineHeight.normal",
        color: "TODO: theme.colors.neutral[500]",
      },
      overline: {
        fontWeight: "TODO: theme.typography.fontWeight.medium",
        lineHeight: "TODO: theme.typography.lineHeight.normal",
        textTransform: "TODO: uppercase",
        letterSpacing: "TODO: theme.typography.letterSpacing.wider",
        color: "TODO: theme.colors.neutral[500]",
      },
    },
  },

  // Avatar component tokens
  avatar: {
    base: {
      borderRadius: "TODO: theme.borderRadius.full",
      overflow: "TODO: hidden",
      display: "TODO: inline-flex",
      alignItems: "TODO: center",
      justifyContent: "TODO: center",
      backgroundColor: "TODO: theme.colors.neutral[200]",
      color: "TODO: theme.colors.neutral[600]",
      fontWeight: "TODO: theme.typography.fontWeight.medium",
    },

    sizes: {
      xs: {
        width: "TODO: 20px",
        height: "TODO: 20px",
        fontSize: "TODO: theme.typography.fontSize.xs",
      },
      sm: {
        width: "TODO: 24px",
        height: "TODO: 24px",
        fontSize: "TODO: theme.typography.fontSize.xs",
      },
      md: {
        width: "TODO: 32px",
        height: "TODO: 32px",
        fontSize: "TODO: theme.typography.fontSize.sm",
      },
      lg: {
        width: "TODO: 40px",
        height: "TODO: 40px",
        fontSize: "TODO: theme.typography.fontSize.base",
      },
      xl: {
        width: "TODO: 48px",
        height: "TODO: 48px",
        fontSize: "TODO: theme.typography.fontSize.lg",
      },
      "2xl": {
        width: "TODO: 64px",
        height: "TODO: 64px",
        fontSize: "TODO: theme.typography.fontSize.xl",
      },
    },
  },

  // Icon component tokens
  icon: {
    base: {
      display: "TODO: inline-block",
      flexShrink: "TODO: 0",
      color: "TODO: currentColor",
    },

    sizes: {
      xs: {
        width: "TODO: 12px",
        height: "TODO: 12px",
      },
      sm: {
        width: "TODO: 16px",
        height: "TODO: 16px",
      },
      md: {
        width: "TODO: 20px",
        height: "TODO: 20px",
      },
      lg: {
        width: "TODO: 24px",
        height: "TODO: 24px",
      },
      xl: {
        width: "TODO: 32px",
        height: "TODO: 32px",
      },
      "2xl": {
        width: "TODO: 40px",
        height: "TODO: 40px",
      },
    },
  },

  // Label component tokens
  label: {
    base: {
      display: "TODO: block",
      fontSize: "TODO: theme.typography.fontSize.sm",
      fontWeight: "TODO: theme.typography.fontWeight.medium",
      lineHeight: "TODO: theme.typography.lineHeight.normal",
      color: "TODO: theme.colors.neutral[700]",
      marginBottom: "TODO: theme.spacing[1]",
      fontFamily: "TODO: theme.typography.fontFamily.sans",
    },

    required: {
      color: "TODO: theme.colors.error[500]",
    },
  },
};

export type DesignTokens = typeof designTokens;
