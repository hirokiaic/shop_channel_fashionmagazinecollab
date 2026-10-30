import type { Preview } from "@storybook/nextjs-vite";

import { cn } from "../src/lib/utils";
import "../src/app/globals.css";

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
            <div className={cn("min-h-full antialiased font-sans")}>
                <Story />
            </div>
        ),
    ],
    tags: ["autodocs"],
};

export default preview;
