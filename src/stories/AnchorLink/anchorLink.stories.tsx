import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import AnchorLink from "@/components/AnchorLink/anchorLink";

const meta = {
    title: "AnchorLink/AnchorLink",
    component: AnchorLink,
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
        children: "COLLABORATION ITEM #01",
        href: "#collaboration-01",
        variant: "default",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "compact"],
        },
        href: {
            control: "text",
        },
    },
} satisfies Meta<typeof AnchorLink>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma 42011:2158 — Default 392px */
export const Default: Story = {};

/** Figma 42114:3653 — Compact 343px */
export const Compact: Story = {
    args: {
        variant: "compact",
    },
};
