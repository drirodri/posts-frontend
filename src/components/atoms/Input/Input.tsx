import React, { forwardRef, useState } from "react";
import { clsx } from "clsx";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { designTokens } from "../../../lib/theme";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Input variant */
  variant?: "default" | "error" | "success";
  /** Input size */
  size?: "sm" | "md" | "lg";
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
  /** Custom className for the input wrapper */
  wrapperClassName?: string;
  /** Custom className for the label */
  labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      size = "md",
      label,
      error,
      helperText,
      required,
      leftIcon,
      rightIcon,
      type = "text",
      className,
      wrapperClassName,
      labelClassName,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Generate a unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Determine actual input type
    const inputType = type === "password" && showPassword ? "text" : type;

    // Determine variant based on error
    const actualVariant = error ? "error" : variant;

    // Get theme tokens
    const inputTokens = designTokens.input;
    const baseStyles = inputTokens.base;
    const sizeStyles = inputTokens.sizes[size];
    const variantStyles = inputTokens.variants[actualVariant]; // Create inline styles for the input
    const inputStyles: React.CSSProperties = {
      width: baseStyles.width,
      borderRadius: baseStyles.borderRadius,
      fontSize: sizeStyles.fontSize,
      lineHeight: baseStyles.lineHeight,
      fontWeight: baseStyles.fontWeight,
      fontFamily: baseStyles.fontFamily,
      transition: baseStyles.transition,
      outline: baseStyles.outline,
      border: baseStyles.border,
      height: sizeStyles.height,
      backgroundColor: disabled
        ? variantStyles.disabled?.backgroundColor
        : variantStyles.backgroundColor,
      borderColor: isFocused
        ? variantStyles.focus.borderColor
        : variantStyles.borderColor,
      color: disabled ? variantStyles.disabled?.color : variantStyles.color,
      boxShadow: isFocused ? variantStyles.focus.boxShadow : "none",
      cursor: disabled ? variantStyles.disabled?.cursor : "text",
      // Padding personalizado com mais espaço à esquerda
      paddingTop: sizeStyles.padding.split(" ")[0],
      paddingBottom: sizeStyles.padding.split(" ")[0],
      paddingLeft: leftIcon ? "2.5rem" : "1rem", // Mais espaço à esquerda quando não há ícone
      paddingRight: rightIcon || type === "password" ? "2.5rem" : "1rem", // Mais espaço à direita quando não há ícone
    };

    // Placeholder styling via CSS custom properties
    const placeholderStyles = {
      "--placeholder-color": variantStyles.placeholder.color,
    } as React.CSSProperties;

    return (
      <div
        className={clsx("relative", wrapperClassName)}
        style={placeholderStyles}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={clsx(
              "block text-sm font-medium mb-1",
              actualVariant === "error" ? "text-red-700" : "text-gray-700",
              disabled && "text-gray-500",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}{" "}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            style={inputStyles}
            className={clsx(
              // Add CSS for placeholder
              "[&::placeholder]:text-[var(--placeholder-color)]",
              className
            )}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />
          {type === "password" && (
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
          {rightIcon && type !== "password" && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <div
            className={clsx(
              "mt-1 text-sm",
              actualVariant === "error" ? "text-red-600" : "text-gray-600"
            )}
          >
            {error && (
              <div className="flex items-center gap-1">
                <AlertCircle size={14} />
                <span>{error}</span>
              </div>
            )}
            {!error && helperText && <span>{helperText}</span>}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
