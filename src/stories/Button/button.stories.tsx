import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ReactNode } from "react";

import Button from "@/components/Button/button";

type ButtonStoryProps = {
    children?: ReactNode;
    variant?: "default" | "small" | "back";
    className?: string;
    href?: string;
    isExtLink?: boolean;
};

const meta = {
    title: "Button/Button",
    component: Button,
    parameters: {
        layout: "padded",
        backgrounds: {
            default: "warm",
            values: [
                { name: "warm", value: "#efe9e0" },
                { name: "white", value: "#ffffff" },
                { name: "dark", value: "#1b1b1b" },
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
        children: "BUY",
        variant: "default",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "small", "back"],
        },
        href: {
            control: "text",
        },
        isExtLink: {
            control: "boolean",
        },
    },
} satisfies Meta<ButtonStoryProps>;

export default meta;

type Story = StoryObj<ButtonStoryProps>;

/** Figma 42034:2289 — Default */
export const Default: Story = {};

/** Figma 44009:1400 — Small */
export const Small: Story = {
    args: {
        variant: "small",
    },
};

/** Hover: navy → #5469ad */
export const WithHoverAnimation: Story = {
    parameters: {
        docs: {
            description: {
                story: "On hover, the background transitions from navy to navy-hover.",
            },
        },
    },
};

/** External link */
export const AsLink: Story = {
    args: {
        href: "https://www.shopch.jp/",
        isExtLink: true,
    },
};

/** Figma 50007:3773 — Back */
export const Back: Story = {
    args: {
        children: "30周年特設サイトへ戻る",
        variant: "back",
        href: "https://www.shopch.jp/pc/cmn/a/sp/30th",
        isExtLink: true,
        className: "w-full",
    },
};
