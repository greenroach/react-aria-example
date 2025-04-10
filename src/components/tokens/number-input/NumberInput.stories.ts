import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { NumberInput } from "./NumberInput";

const meta = {
  title: "Tokens/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },

  args: { onChange: fn() },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
    value: 42,
    minValue: 0,
    maxValue: 100,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    isDisabled: true,
    value: 0,
  },
};
