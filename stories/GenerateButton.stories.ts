import type { Meta, StoryObj } from "@storybook/nextjs";
import GenerateButton from "../components/GenerateButton";

const meta: Meta<typeof GenerateButton> = {
  title: "Components/GenerateButton",
  component: GenerateButton,
};

export default meta;

type Story = StoryObj<typeof GenerateButton>;

export const Default: Story = {
  args: {
    loading: false,
    onGenerate: () => alert("Generate clicked"),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onGenerate: () => {},
  },
};