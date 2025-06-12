// Atom: Button component
// TODO: Implement button component with variants (primary, secondary, danger, etc.)
// Props: children, variant, size, disabled, onClick, type, etc.

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={`${size} ${variant}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
