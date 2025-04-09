import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "./Input";

const meta = {
  title: "Tokens/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
    placeholder: "Enter text",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    placeholder: "Enter text",
  },
};
