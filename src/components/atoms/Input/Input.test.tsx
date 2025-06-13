import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Input";

describe("Input", () => {
  it("renders with label", () => {
    render(<Input label="Test Label" />);
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("shows error message when error prop is provided", () => {
    render(<Input label="Test" error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("shows helper text when provided", () => {
    render(<Input label="Test" helperText="This is helper text" />);
    expect(screen.getByText("This is helper text")).toBeInTheDocument();
  });

  it("calls onChange when value changes", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<Input label="Test" onChange={onChange} />);

    const input = screen.getByLabelText("Test");
    await user.type(input, "hello");

    expect(onChange).toHaveBeenCalled();
  });

  it("shows password toggle for password inputs", () => {
    render(<Input type="password" label="Password" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles password visibility when toggle button is clicked", async () => {
    const user = userEvent.setup();
    render(<Input type="password" label="Password" />);

    const input = screen.getByLabelText("Password") as HTMLInputElement;
    const toggleButton = screen.getByRole("button");

    expect(input.type).toBe("password");

    await user.click(toggleButton);
    expect(input.type).toBe("text");

    await user.click(toggleButton);
    expect(input.type).toBe("password");
  });
  it("applies correct size styles", () => {
    const { rerender } = render(<Input size="sm" data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input).toHaveStyle({ height: "32px" });

    rerender(<Input size="md" data-testid="input" />);
    expect(input).toHaveStyle({ height: "40px" });

    rerender(<Input size="lg" data-testid="input" />);
    expect(input).toHaveStyle({ height: "48px" });
  });
  it("applies error variant when error is provided", () => {
    render(<Input error="Error message" data-testid="input" />);
    const input = screen.getByTestId("input");
    // Check if border color matches error color from theme
    expect(input).toHaveStyle({
      borderColor: expect.stringContaining("#f44336"),
    });
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input disabled label="Test" />);
    expect(screen.getByLabelText("Test")).toBeDisabled();
  });

  it("shows required asterisk when required prop is true", () => {
    render(<Input label="Test Field" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders left and right icons", () => {
    render(
      <Input
        label="Test"
        leftIcon={<span data-testid="left-icon">Left</span>}
        rightIcon={<span data-testid="right-icon">Right</span>}
      />
    );

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });
});
