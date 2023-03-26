import type { Meta, StoryObj } from "@storybook/react";
import { InputMonths } from "../inputs/InputMonths";

const meta = {
  title: "Atoms/Inputs/InputMonths",
  component: InputMonths,
  tags: ["autodocs"],
} satisfies Meta<typeof InputMonths>;

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
