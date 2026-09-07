import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import CardComment from "@/components/Card/cardComment";

const defaultHeading = (
    <>
        見出しが入ります見出しが入ります
        <br />
        見出しが入ります
    </>
);

const defaultComment =
    "編集長コメントが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります";

const meta = {
    title: "Card/CardComment",
    component: CardComment,
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
            <div className="mx-auto w-full max-w-[600px] bg-background-warm p-10">
                <Story />
            </div>
        ),
    ],
    args: {
        heading: defaultHeading,
        children: defaultComment,
        signature: "エクラ編集長",
    },
    argTypes: {
        signature: {
            control: "text",
        },
    },
} satisfies Meta<typeof CardComment>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma 42079:1114 */
export const Default: Story = {};
