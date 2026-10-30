import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import MenuSP from "@/components/menuSP";
import ScrollAnchor from "@/components/scrollAnchor";
import FidLinkInterceptor from "@/components/fidLinkInterceptor";
import { ExpiredProvider } from "./Context/expiredContext";
import { GTMChecker } from "@/components/GTMChecker";
import { GOOGLE_FONTS_STYLESHEET_HREF } from "@/lib/fonts/google-fonts";

export const metadata: Metadata = {
    title: "ショップチャンネル×éclat（エクラ） スペシャルコラボ｜ショップチャンネル 30周年特別企画",
    description: "30周年を迎えたショップチャンネル×ファッション誌『éclat（エクラ）』の特別企画！大人の女性に寄り添う心地よさと美しさを兼ね備えた「大人の名品」ファッションアイテムを感謝を込めてお届けします。あなたの心がおどる特別な一着との出会いを、ぜひお楽しみください。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="ja" className="h-full antialiased font-sans">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="stylesheet" href={GOOGLE_FONTS_STYLESHEET_HREF} />
            </head>
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
