import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ThanksSection from "@/app/PageSections/thanksSection";

const meta = {
    title: "Section/ThanksSection",
    component: ThanksSection,
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
    decorators: [
        (Story) => (
            <div className="mx-auto w-full max-w-[440px]">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ThanksSection>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma 50007:3768 */
export const Default: Story = {};
