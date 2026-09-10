import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import IntroSection from "@/app/PageSections/introSection";

const meta = {
    title: "Section/IntroSection",
    component: IntroSection,
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
            <div className="mx-auto w-full max-w-[440px]">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof IntroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
