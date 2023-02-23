import type { Meta, StoryObj } from "@storybook/react";
import Boton from "./Boton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Atoms/Boton",
  component: Boton,
  tags: ["autodocs"],
} satisfies Meta<typeof Boton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Boton",
  },
};
