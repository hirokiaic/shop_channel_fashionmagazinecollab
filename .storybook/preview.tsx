import type { Preview } from "@storybook/nextjs-vite";
import {
    Amiri,
    Gilda_Display,
    Jost,
    Noto_Sans_JP,
    Noto_Serif_JP,
    Shippori_Mincho,
} from "next/font/google";

import { cn } from "../src/lib/utils";
import "../src/app/globals.css";

const noto_serif_jp = Noto_Serif_JP({
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-noto-serif-jp",
    subsets: ["latin"],
});

const noto_sans_jp = Noto_Sans_JP({
    weight: ["400", "500", "600", "700"],
    variable: "--font-noto-sans-jp",
    subsets: ["latin"],
});

const amiri = Amiri({
    weight: ["400", "700"],
    variable: "--font-amiri",
    subsets: ["latin"],
});

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

const gilda_display = Gilda_Display({
    weight: ["400"],
    variable: "--font-gilda-display",
    subsets: ["latin"],
});

const shippori_mincho = Shippori_Mincho({
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-shippori-mincho",
    subsets: ["latin"],
});

const fontVariables = cn(
    noto_serif_jp.variable,
    noto_sans_jp.variable,
    amiri.variable,
    jost.variable,
    gilda_display.variable,
    shippori_mincho.variable,
);

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: "todo",
        },
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <div className={cn("min-h-full antialiased font-sans", fontVariables)}>
                <Story />
            </div>
        ),
    ],
    tags: ["autodocs"],
};

export default preview;
