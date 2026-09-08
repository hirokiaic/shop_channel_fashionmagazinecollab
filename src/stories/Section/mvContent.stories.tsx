import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MVContent from "@/app/PageSections/mvContent";

const meta = {
    title: "Section/MVContent",
    component: MVContent,
    parameters: {
        layout: "fullscreen",
        backgrounds: {
            default: "white",
            values: [
                { name: "white", value: "#ffffff" },
                { name: "warm", value: "#efe9e0" },
            ],
        },
    },
} satisfies Meta<typeof MVContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
