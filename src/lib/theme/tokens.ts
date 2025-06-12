/**
 * Design tokens for component styling
 * These tokens define the specific styling rules for each atomic component
 * TODO: Implement actual design token values
 */

export const designTokens = {
  // Button component tokens
  button: {
    // Base button properties
    base: {
      borderRadius: "TODO: theme.borderRadius.md",
      fontWeight: "TODO: theme.typography.fontWeight.medium",
      fontSize: "TODO: theme.typography.fontSize.base",
      lineHeight: "TODO: theme.typography.lineHeight.normal",
      transition: "TODO: all 0.2s ease-in-out",
      cursor: "TODO: pointer",
      border: "TODO: none",
      outline: "TODO: none",
      display: "TODO: inline-flex",
      alignItems: "TODO: center",
      justifyContent: "TODO: center",
      gap: "TODO: theme.spacing[2]",
    },

    // Button size variants
    sizes: {
      xs: {
        height: "TODO: 24px",
        padding: "TODO: theme.spacing[1] theme.spacing[2]",
        fontSize: "TODO: theme.typography.fontSize.xs",
      },
      sm: {
        height: "TODO: 32px",
        padding: "TODO: theme.spacing[2] theme.spacing[3]",
        fontSize: "TODO: theme.typography.fontSize.sm",
      },
      md: {
        height: "TODO: 40px",
        padding: "TODO: theme.spacing[3] theme.spacing[4]",
        fontSize: "TODO: theme.typography.fontSize.base",
      },
      lg: {
        height: "TODO: 48px",
        padding: "TODO: theme.spacing[4] theme.spacing[6]",
        fontSize: "TODO: theme.typography.fontSize.lg",
      },
      xl: {
        height: "TODO: 56px",
        padding: "TODO: theme.spacing[5] theme.spacing[8]",
        fontSize: "TODO: theme.typography.fontSize.xl",
      },
    },

    // Button color variants
    variants: {
      primary: {
        backgroundColor: "TODO: theme.colors.primary[500]",
        color: "TODO: theme.colors.neutral[50]",
        hover: {
          backgroundColor: "TODO: theme.colors.primary[600]",
        },
        active: {
          backgroundColor: "TODO: theme.colors.primary[700]",
        },
        disabled: {
          backgroundColor: "TODO: theme.colors.neutral[300]",
          color: "TODO: theme.colors.neutral[500]",
          cursor: "TODO: not-allowed",
        },
      },
      secondary: {
        backgroundColor: "TODO: theme.colors.secondary[500]",
        color: "TODO: theme.colors.neutral[50]",
        hover: {
          backgroundColor: "TODO: theme.colors.secondary[600]",
        },
        active: {
          backgroundColor: "TODO: theme.colors.secondary[700]",
        },
        disabled: {
          backgroundColor: "TODO: theme.colors.neutral[300]",
          color: "TODO: theme.colors.neutral[500]",
          cursor: "TODO: not-allowed",
        },
      },
      danger: {
        backgroundColor: "TODO: theme.colors.error[500]",
        color: "TODO: theme.colors.neutral[50]",
        hover: {
          backgroundColor: "TODO: theme.colors.error[600]",
        },
        active: {
          backgroundColor: "TODO: theme.colors.error[700]",
        },
        disabled: {
          backgroundColor: "TODO: theme.colors.neutral[300]",
          color: "TODO: theme.colors.neutral[500]",
          cursor: "TODO: not-allowed",
        },
      },
      ghost: {
        backgroundColor: "TODO: transparent",
        color: "TODO: theme.colors.primary[500]",
        hover: {
          backgroundColor: "TODO: theme.colors.primary[50]",
        },
        active: {
          backgroundColor: "TODO: theme.colors.primary[100]",
        },
        disabled: {
          backgroundColor: "TODO: transparent",
          color: "TODO: theme.colors.neutral[400]",
          cursor: "TODO: not-allowed",
        },
      },
      outline: {
        backgroundColor: "TODO: transparent",
        color: "TODO: theme.colors.primary[500]",
        border: "TODO: 1px solid theme.colors.primary[500]",
        hover: {
          backgroundColor: "TODO: theme.colors.primary[500]",
          color: "TODO: theme.colors.neutral[50]",
        },
        active: {
          backgroundColor: "TODO: theme.colors.primary[600]",
          color: "TODO: theme.colors.neutral[50]",
        },
        disabled: {
          backgroundColor: "TODO: transparent",
          color: "TODO: theme.colors.neutral[400]",
          border: "TODO: 1px solid theme.colors.neutral[300]",
          cursor: "TODO: not-allowed",
        },
      },
    },
  },

  // Input component tokens
  input: {
    base: {
      borderRadius: "TODO: theme.borderRadius.md",
      fontSize: "TODO: theme.typography.fontSize.base",
      lineHeight: "TODO: theme.typography.lineHeight.normal",
      fontWeight: "TODO: theme.typography.fontWeight.normal",
      transition: "TODO: all 0.2s ease-in-out",
      width: "TODO: 100%",
      outline: "TODO: none",
      fontFamily: "TODO: theme.typography.fontFamily.sans",
    },

    sizes: {
      sm: {
        height: "TODO: 32px",
        padding: "TODO: theme.spacing[2] theme.spacing[3]",
        fontSize: "TODO: theme.typography.fontSize.sm",
      },
      md: {
        height: "TODO: 40px",
        padding: "TODO: theme.spacing[3] theme.spacing[4]",
        fontSize: "TODO: theme.typography.fontSize.base",
      },
      lg: {
        height: "TODO: 48px",
        padding: "TODO: theme.spacing[4] theme.spacing[5]",
        fontSize: "TODO: theme.typography.fontSize.lg",
      },
    },

    variants: {
      default: {
        backgroundColor: "TODO: theme.colors.neutral[50]",
        border: "TODO: 1px solid theme.colors.neutral[300]",
        color: "TODO: theme.colors.neutral[900]",
        placeholder: {
          color: "TODO: theme.colors.neutral[500]",
        },
        focus: {
          border: "TODO: 1px solid theme.colors.primary[500]",
          boxShadow: "TODO: 0 0 0 3px theme.colors.primary[100]",
        },
        disabled: {
          backgroundColor: "TODO: theme.colors.neutral[100]",
          color: "TODO: theme.colors.neutral[500]",
          cursor: "TODO: not-allowed",
        },
      },
      error: {
        backgroundColor: "TODO: theme.colors.neutral[50]",
        border: "TODO: 1px solid theme.colors.error[500]",
        color: "TODO: theme.colors.neutral[900]",
        focus: {
          border: "TODO: 1px solid theme.colors.error[500]",
          boxShadow: "TODO: 0 0 0 3px theme.colors.error[100]",
        },
      },
      success: {
        backgroundColor: "TODO: theme.colors.neutral[50]",
        border: "TODO: 1px solid theme.colors.success[500]",
        color: "TODO: theme.colors.neutral[900]",
        focus: {
          border: "TODO: 1px solid theme.colors.success[500]",
          boxShadow: "TODO: 0 0 0 3px theme.colors.success[100]",
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
