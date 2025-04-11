import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { fn } from '@storybook/test';
import { IconPlus } from '@components/icons';

const meta = {
  title: 'Tokens/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onPress: fn() },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined'],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithText: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'contained',
    theme: 'primary',
    disabled: false,
  },
};

export const WithTextAndIcon: Story = {
  args: {
    children: 'Button',
    icon: <IconPlus />,
    iconPosition: 'left',
    size: 'medium',
    variant: 'contained',
    theme: 'primary',
    disabled: false,
  },
};

export const IconOnly: Story = {
  args: {
    icon: <IconPlus />,
    iconPosition: 'left',
    size: 'medium',
    variant: 'contained',
    theme: 'primary',
    disabled: false,
  },
};
