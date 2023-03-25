import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: ["money", "clock", "bank", "date"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Amount: Story = {
  args: {
    text: "Amount",
    icon: "money",
  },
};

export const Months: Story = {
  args: {
    text: "Months",
    icon: "clock",
  },
};
export const Interest: Story = {
  args: {
    text: "Annual Interest Rate",
    icon: "bank",
  },
};
export const Date: Story = {
  args: {
    text: "First quote",
    icon: "date",
  },
};
