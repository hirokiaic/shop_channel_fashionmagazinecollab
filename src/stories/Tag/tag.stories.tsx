import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Tag from "@/components/Tag/tag";

const meta = {
    title: "Tag/Tag",
    component: Tag,
    parameters: {
        layout: "padded",
        backgrounds: {
            default: "warm",
            values: [
                { name: "warm", value: "#efe9e0" },
                { name: "blush", value: "#f8f3ec" },
                { name: "white", value: "#ffffff" },
            ],
        },
    },
    decorators: [
        (Story) => (
            <div className="mx-auto w-full max-w-[440px] bg-background-warm p-10">
                <div className="flex w-full justify-center">
                    <Story />
                </div>
            </div>
        ),
    ],
    args: {
        children: "OA INFORMATION",
    },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma 50003:3204 */
export const Default: Story = {};
