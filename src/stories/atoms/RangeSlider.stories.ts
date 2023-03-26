import type { Meta, StoryObj } from "@storybook/react";
import RangeSlider from "./RangeSlider";

const meta = {
  title: "Atoms/Range Slider",
  component: RangeSlider,
  tags: ["autodocs"],
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Amount: Story = {
  args: {
    className: "h-8",
    defaultValue: 200_000_000,
    max: 1_000_000_000,
    min: 100_000_000,
    step: 5_000,
  },
};

export const Months: Story = {
  args: {
    className: "h-8",
    defaultValue: 2,
    max: 300,
    min: 2,
    step: 1,
  },
};

export const AnnualInterest: Story = {
  args: {
    className: "h-8",
    defaultValue: 2,
    max: 5.0,
    min: 0.0,
    step: 0.01,
  },
};

export const Width: Story = {
  args: {
    className: "w-80 h-8",
    defaultValue: 2,
    max: 5.0,
    min: 0.0,
    step: 0.01,
  },
};
