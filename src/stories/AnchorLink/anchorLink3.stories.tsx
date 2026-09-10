import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import AnchorLink3 from "@/components/AnchorLink/anchorLink3";

const meta = {
    title: "AnchorLink/AnchorLink3",
    component: AnchorLink3,
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
        children: "COTTON CASHMERE TOP",
        href: "#cotton-cashmere-top",
    },
    argTypes: {
        href: {
            control: "text",
        },
    },
} satisfies Meta<typeof AnchorLink3>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma 46001:2107 */
export const Default: Story = {};
