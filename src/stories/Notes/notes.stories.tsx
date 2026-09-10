import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Notes from "@/components/Notes/notes";

const defaultText =
    "先行販売の数量には限りがございます。予定数に達した場合は、11月8日(日)放映日にあらためてご確認ください。";

const meta = {
    title: "Notes/Notes",
    component: Notes,
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
                <Story />
            </div>
        ),
    ],
    args: {
        children: defaultText,
    },
} satisfies Meta<typeof Notes>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma 50015:3820 */
export const Default: Story = {};

/** Wrapped lines align with text start, not under ※ */
export const WithLineBreak: Story = {
    decorators: [
        (Story) => (
            <div className="mx-auto w-full max-w-[280px] bg-background-warm p-10">
                <Story />
            </div>
        ),
    ],
    parameters: {
        docs: {
            description: {
                story: "When text wraps, continuation lines stay aligned with the body text — not beneath the ※ marker.",
            },
        },
    },
};
