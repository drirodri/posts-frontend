import React from "react";
import { designTokens } from "@/lib/theme/tokens";
import { ButtonVariant, ButtonSize } from "@/lib/theme/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = "",
      style = {},
      ...props
    },
    ref
  ) => {
    const tokens = designTokens.button;

    // Type-safe access to variant styles
    const variantStyles =
      tokens.variants[variant as keyof typeof tokens.variants];

    if (!variantStyles) {
      console.warn(
        `Button variant "${variant}" not found. Using primary as fallback.`
      );
      // Fallback to primary if variant doesn't exist
      const fallbackVariant = tokens.variants.primary;

      const buttonStyles: React.CSSProperties = {
        ...tokens.base,
        ...tokens.sizes[size],
        ...fallbackVariant,
        width: fullWidth ? "100%" : "auto",
        opacity: loading ? 0.7 : 1,
        pointerEvents: disabled || loading ? "none" : "auto",
        ...style,
      };

      return (
        <button
          ref={ref}
          style={buttonStyles}
          className={className}
          disabled={disabled || loading}
          {...props}
        >
          {loading && (
            <span
              style={{
                display: "inline-block",
                width: "1em",
                height: "1em",
                border: "2px solid currentColor",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
          )}
          {!loading && leftIcon && <span>{leftIcon}</span>}
          <span>{children}</span>
          {!loading && rightIcon && <span>{rightIcon}</span>}
        </button>
      );
    }

    // Combine base styles with variant and size styles
    const baseStyles = tokens.base;
    const sizeStyles = tokens.sizes[size];

    const buttonStyles: React.CSSProperties = {
      ...baseStyles,
      ...sizeStyles,
      ...variantStyles,
      width: fullWidth ? "100%" : "auto",
      opacity: loading ? 0.7 : 1,
      pointerEvents: disabled || loading ? "none" : "auto",
      ...style,
    };

    // Handle disabled state
    if (disabled && variantStyles.disabled) {
      Object.assign(buttonStyles, variantStyles.disabled);
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading && variantStyles.hover) {
        Object.assign(e.currentTarget.style, variantStyles.hover);
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading) {
        // Reset to base variant styles
        Object.assign(e.currentTarget.style, {
          backgroundColor: variantStyles.backgroundColor,
          color: variantStyles.color,
          boxShadow: variantStyles.boxShadow || "none",
          transform: "none",
          textDecoration: variantStyles.textDecoration || "none",
        });
      }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading && variantStyles.active) {
        Object.assign(e.currentTarget.style, variantStyles.active);
      }
    };

    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading && variantStyles.hover) {
        Object.assign(e.currentTarget.style, variantStyles.hover);
      }
    };

    return (
      <button
        ref={ref}
        style={buttonStyles}
        className={className}
        disabled={disabled || loading}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      >
        {loading && (
          <span
            style={{
              display: "inline-block",
              width: "1em",
              height: "1em",
              border: "2px solid currentColor",
              borderTopColor: "transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
        )}
        {!loading && leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
