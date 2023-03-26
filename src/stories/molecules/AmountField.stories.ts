import type { Meta, StoryObj } from "@storybook/react";
import { AmountField } from "./AmountField";

const meta = {
  title: "Molecules/AmountField",
  component: AmountField,
  tags: ["autodocs"],
} satisfies Meta<typeof AmountField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Amount: Story = {};
