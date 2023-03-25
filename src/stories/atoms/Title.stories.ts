import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta = {
  title: "Atoms/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    text: "simula",
    size: "large",
  },
};
export const Medium: Story = {
  args: {
    text: "Resumen de la simulación",
    size: "medium",
  },
};
export const Small: Story = {
  args: {
    text: "Crédito sin abonos",
    size: "small",
  },
};
