import localFont from "next/font/local";

export const amiri = localFont({
    src: [{ path: "../../fonts/Amiri-Regular.woff2", weight: "400", style: "normal" }],
    variable: "--font-amiri",
    display: "swap",
    preload: false,
});
