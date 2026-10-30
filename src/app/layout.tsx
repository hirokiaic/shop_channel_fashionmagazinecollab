import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";
import MenuSP from "@/components/menuSP";
import ScrollAnchor from "@/components/scrollAnchor";
import FidLinkInterceptor from "@/components/fidLinkInterceptor";
import { ExpiredProvider } from "./Context/expiredContext";
import { cn } from "@/lib/utils";
import { GTMChecker } from "@/components/GTMChecker";

const noto_serif_jp = localFont({
    src: [
        { path: "../fonts/NotoSerifJP-SemiBold.woff2", weight: "600", style: "normal" },
        { path: "../fonts/NotoSerifJP-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-noto-serif-jp",
    display: "swap",
});

const noto_sans_jp = localFont({
    src: [
        { path: "../fonts/NotoSansJP-Regular.woff2", weight: "400", style: "normal" },
        { path: "../fonts/NotoSansJP-Medium.woff2", weight: "500", style: "normal" },
    ],
    variable: "--font-noto-sans-jp",
    display: "swap",
});

const jost = localFont({
    src: [
        { path: "../fonts/Jost-Regular.woff2", weight: "400", style: "normal" },
        { path: "../fonts/Jost-Medium.woff2", weight: "500", style: "normal" },
        { path: "../fonts/Jost-SemiBold.woff2", weight: "600", style: "normal" },
    ],
    variable: "--font-jost",
    display: "swap",
});

const shippori_mincho = localFont({
    src: [{ path: "../fonts/ShipporiMincho-Bold.woff2", weight: "700", style: "normal" }],
    variable: "--font-shippori-mincho",
    display: "swap",
});

export const metadata: Metadata = {
    title: "ショップチャンネル×éclat（エクラ） スペシャルコラボ｜ショップチャンネル 30周年特別企画",
    description: "30周年を迎えたショップチャンネル×ファッション誌『éclat（エクラ）』の特別企画！大人の女性に寄り添う心地よさと美しさを兼ね備えた「大人の名品」ファッションアイテムを感謝を込めてお届けします。あなたの心がおどる特別な一着との出会いを、ぜひお楽しみください。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="ja"
            className={cn(
                "h-full antialiased font-sans",
                noto_serif_jp.variable,
                noto_sans_jp.variable,
                jost.variable,
                shippori_mincho.variable,
            )}
        >
            <body className="min-h-full flex flex-col">
                <GTMChecker />
                <ExpiredProvider>
                    <Header />
                    <MenuSP />
                    <ScrollAnchor />
                    <FidLinkInterceptor />
                    {children}
                </ExpiredProvider>
            </body>
        </html>
    );
}
