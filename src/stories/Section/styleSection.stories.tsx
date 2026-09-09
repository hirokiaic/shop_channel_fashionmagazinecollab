import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import StyleSection from "@/app/PageSections/styleSection";
import { styleSectionData } from "@/mocks/styleSectionData";

const meta = {
    title: "Section/StyleSection",
    component: StyleSection,
    parameters: {
        layout: "fullscreen",
        backgrounds: {
            default: "white",
            values: [
                { name: "white", value: "#ffffff" },
                { name: "blush", value: "#f8f3ec" },
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
} satisfies Meta<typeof StyleSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: styleSectionData,
};
