import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import InfoSection from "@/app/PageSections/infoSection";

const meta = {
    title: "Section/InfoSection",
    component: InfoSection,
    parameters: {
        layout: "fullscreen",
        backgrounds: {
            default: "blush",
            values: [
                { name: "blush", value: "#f8f3ec" },
                { name: "white", value: "#ffffff" },
            ],
        },
    },
    decorators: [
        (Story) => (
            <div className="mx-auto w-full max-w-[440px] bg-white">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof InfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
