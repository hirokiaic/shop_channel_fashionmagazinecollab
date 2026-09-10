import type { Metadata } from "next";
import { Amiri, Gilda_Display, Jost, Noto_Sans_JP, Noto_Serif_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import MenuSP from "@/components/menuSP";
import ScrollAnchor from "@/components/scrollAnchor";
import FidLinkInterceptor from "@/components/fidLinkInterceptor";
import { ExpiredProvider } from "./Context/expiredContext";
import { cn } from "@/lib/utils";
import { GTMChecker } from "@/components/GTMChecker";

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
                amiri.variable,
                jost.variable,
                gilda_display.variable,
                shippori_mincho.variable,
            )}
        >
            <body className="min-h-full flex flex-col">
                <GTMChecker />
                <Header />
                <MenuSP />
                <ScrollAnchor />
                <FidLinkInterceptor />
                <ExpiredProvider>
                    {children}
                </ExpiredProvider>
            </body>
        </html>
    );
}
