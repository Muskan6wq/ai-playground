import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ResponseCard from "../components/ResponseCard";

const meta: Meta<typeof ResponseCard> = {
  title: "Components/ResponseCard",
  component: ResponseCard,
};

export default meta;

type Story = StoryObj<typeof ResponseCard>;

export const Empty: Story = {
  args: {
    response: "",
  },
};

export const Generated: Story = {
  args: {
    response: `

Based on your prompt:

"Explain Docker"

----------------------------------------

Here's a mock AI response generated using GPT-4.

This demonstrates how an AI assistant could respond to your request.

Current Parameters

• Model : GPT-4

• Temperature : 50

• Max Tokens : 500

----------------------------------------

Thank you for using Nova AI Studio.

`,
  },
};