import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ModalImage from "@/components/Modal/modalImage";

const meta = {
    title: "Modal/ModalImage",
    component: ModalImage,
    parameters: {
        layout: "padded",
        backgrounds: {
            default: "blush",
            values: [
                { name: "blush", value: "#f8f3ec" },
                { name: "warm", value: "#efe9e0" },
                { name: "white", value: "#ffffff" },
            ],
        },
    },
    decorators: [
        (Story) => (
            <div className="mx-auto w-full max-w-[440px] bg-background-blush p-10">
                <div className="flex w-full justify-center">
                    <Story />
                </div>
            </div>
        ),
    ],
    args: {
        src: "/images/temp.png",
        alt: "Product detail",
    },
    argTypes: {
        src: {
            control: "text",
        },
        alt: {
            control: "text",
        },
        size: {
            control: "select",
            options: ["default", "portrait"],
        },
    },
} satisfies Meta<typeof ModalImage>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Figma 42027:1587 — Square thumbnail 170×170 */
export const Default: Story = {};

/** Figma 52070:1478 — Portrait thumbnail 214×302 */
export const Portrait: Story = {
    args: {
        size: "portrait",
    },
};

/** Click the thumbnail to open the enlarged image modal (Figma 46010:3059) */
export const WithModal: Story = {
    parameters: {
        docs: {
            description: {
                story: "Click the thumbnail to open the image modal. Close with the X button, overlay click, or Escape.",
            },
        },
    },
};
