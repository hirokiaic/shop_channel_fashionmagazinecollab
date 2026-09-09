import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ItemSection from "@/app/PageSections/itemSection";
import {
    item01SectionData,
    item02SectionData,
} from "@/app/PageSections/itemSectionData";

const meta = {
    title: "Section/ItemSection",
    component: ItemSection,
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
} satisfies Meta<typeof ItemSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Item01: Story = {
    args: item01SectionData,
};

export const Item02: Story = {
    args: item02SectionData,
};
