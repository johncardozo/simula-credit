import type { Meta, StoryObj } from "@storybook/react";
import { InputInterest } from "./InputInterest";

const meta = {
  title: "Atoms/Inputs/InputInterest",
  component: InputInterest,
  tags: ["autodocs"],
} satisfies Meta<typeof InputInterest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    value: 2,
  },
};
export const Medium: Story = {
  args: {
    value: 20,
  },
};
export const Large: Story = {
  args: {
    value: 250,
  },
};
