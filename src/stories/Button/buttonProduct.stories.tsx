import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ButtonProduct from "@/components/Button/buttonProduct";

type ButtonProductStoryProps = {
    href: string;
    leftImage: string;
    rightImage: string;
    leftImageAlt?: string;
    rightImageAlt?: string;
    isExtLink?: boolean;
};

const meta = {
    title: "Button/ButtonProduct",
    component: ButtonProduct,
    parameters: {
        layout: "padded",
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
            <div className="mx-auto w-full max-w-[440px] bg-background-blush p-10">
                <Story />
            </div>
        ),
    ],
    args: {
        leftImage: "/images/product-btn-img1.webp",
        rightImage: "/images/product-btn-img2.webp",
        href: "https://www.shopch.jp/",
        isExtLink: true,
    },
} satisfies Meta<ButtonProductStoryProps>;

export default meta;

type Story = StoryObj<ButtonProductStoryProps>;

/** Figma 42089:1244 */
export const Default: Story = {};
