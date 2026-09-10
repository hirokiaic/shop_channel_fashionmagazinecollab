import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import AnchorLink2 from "@/components/AnchorLink/anchorLink2";

const meta = {
    title: "AnchorLink/AnchorLink2",
    component: AnchorLink2,
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
        href: "#collaboration-01",
        number: "01",
        imageSrc: "/images/collab-item-1.webp",
        imageAlt: "Collaboration item 01",
    },
    argTypes: {
        number: {
            control: "select",
            options: ["01", "02"],
        },
        href: {
            control: "text",
        },
        imageSrc: {
            control: "text",
        },
    },
} satisfies Meta<typeof AnchorLink2>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma 46001:3792 — ITEM #01 */
export const Item01: Story = {};

/** ITEM #02 variant */
export const Item02: Story = {
    args: {
        href: "#collaboration-02",
        number: "02",
        imageSrc: "/images/collab-item-2.webp",
        imageAlt: "Collaboration item 02",
    },
};
