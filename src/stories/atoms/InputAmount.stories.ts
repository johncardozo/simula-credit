import type { Meta, StoryObj } from "@storybook/react";
import { InputAmount } from "./InputAmount";

const meta = {
  title: "Atoms/InputAmount",
  component: InputAmount,
  tags: ["autodocs"],
} satisfies Meta<typeof InputAmount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    value: 100_000,
  },
};
export const Medium: Story = {
  args: {
    value: 500_000_000,
  },
};
export const Large: Story = {
  args: {
    value: 1_000_000_000,
  },
};
