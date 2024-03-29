import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "primary",
  },
};

export const CalcularPrestamo: Story = {
  args: {
    label: "Calcular préstamo",
  },
};
