import "@testing-library/jest-dom";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Button } from "./Button";
import { userEvent } from "@storybook/test";

const sizes = ["small", "medium"];
const variants = ["contained", "outlined"];
const themes = ["primary", "secondary"];

const generateButtonTestCases = () => {
  const testCases = [];

  for (const size of sizes) {
    for (const variant of variants) {
      for (const theme of themes) {
        testCases.push({ size, variant, theme });
      }
    }
  }

  return testCases;
};

describe("Button Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders with default props", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText("Click Me");

    expect(button).toMatchInlineSnapshot(`
      <span
        class="_label_40c60c"
      >
        Click Me
      </span>
    `);
  });
  const testCases = generateButtonTestCases();

  it.each(testCases)(
    "renders with size: $size, variant: $variant, theme: $theme",
    ({ size, variant, theme }) => {
      render(
        // @ts-expect-error passing raw strings from testcases
        <Button size={size} variant={variant} theme={theme}>
          "text"
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveTextContent("text");
      expect(button).toMatchSnapshot();
    },
  );

  it("renders with an icon", () => {
    render(<Button icon={<span>Icon</span>}>Button with Icon</Button>);
    const icon = screen.getByText("Icon");
    expect(icon).toBeVisible();
  });

  it("handles the disabled state", () => {
    render(<Button isDisabled={true}>Disabled Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("calls onPress when clicked", async () => {
    const onPress = vi.fn();
    render(<Button onPress={onPress}>Clickable Button</Button>);
    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  it("does not accept style prop", async () => {
    //@ts-expect-error testing a wrong prop
    render(<Button style={{ display: "block" }}>Clickable Button</Button>);
    const button = screen.getByRole("button");
    expect(button).not.toHaveStyle({ display: "block" });
  });

  it("does not accept className prop", async () => {
    //@ts-expect-error testing a wrong prop
    render(<Button className="test-class-name">Clickable Button</Button>);
    const button = screen.getByRole("button");
    expect(button).not.toHaveClass("test-class-name");
  });
});
