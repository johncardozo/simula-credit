import type { Meta, StoryObj } from "@storybook/react";

import { Boton } from "./Boton";

const meta = {
  title: "Atoms/Boton",
  component: Boton,
  tags: ["autodocs"],
} satisfies Meta<typeof Boton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "secondary",
  },
};
