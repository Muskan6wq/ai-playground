import type { Meta, StoryObj } from "@storybook/nextjs";
import Slider from "../components/Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Temperature: Story = {
  args: {
    label: "Temperature",
    value: 50,
    min: 0,
    max: 100,
    onChange: () => {},
  },
};

export const MaxTokens: Story = {
  args: {
    label: "Max Tokens",
    value: 500,
    min: 100,
    max: 2000,
    onChange: () => {},
  },
};