import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { NumberInput } from "./NumberInput";

const meta = {
  title: "Tokens/NumberInput",
  component: NumberInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  args: { onChange: fn() },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
    placeholder: "0",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    value: 0,
  },
};
