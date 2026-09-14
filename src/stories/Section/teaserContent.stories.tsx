import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import TeaserContent from "@/app/PageSections/teaserContent";

const meta = {
    title: "Section/TeaserContent",
    component: TeaserContent,
    parameters: {
        layout: "fullscreen",
        backgrounds: {
            default: "warm",
            values: [
                { name: "warm", value: "#efe9e0" },
                { name: "white", value: "#ffffff" },
            ],
        },
    },
} satisfies Meta<typeof TeaserContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const QuickTransition: Story = {
    args: {
        loadingDurationMs: 800,
    },
};
