import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ModelSelector  from "../components/ModelSelector";

const meta: Meta<typeof ModelSelector> = {
  title: "Components/ModelSelector",
  component: ModelSelector,
};

export default meta;

type Story = StoryObj<typeof ModelSelector>;

export const Default: Story = {

args: {
    selectedModel: "GPT-4",
    setSelectedModel: () => {},
  },


};

