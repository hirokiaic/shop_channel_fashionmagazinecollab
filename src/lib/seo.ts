import type { Metadata } from "next";

export const productionSiteBaseUrl = "https://30th.shopch.jp/spcl06";
export const testSiteBaseUrl = "https://shop-channel-fashionmagazinecollab.vercel.app";

export const isVercelDeployment = process.env.VERCEL === "1";
export const isProductionSite =
    process.env.PRODUCTION === "production" && !isVercelDeployment;

export const siteBaseUrl = isVercelDeployment
    ? testSiteBaseUrl
    : productionSiteBaseUrl;


interface MetadataParams {
    title?: string;
    description?: string;
    path?: string;
    image?: string;
}

export function getMetadata({
    title,
    description,
    path = "",
    image = "/OGP.png",
}: MetadataParams): Metadata {
    const siteName = "ショップチャンネル×éclat（エクラ） スペシャルコラボ｜ショップチャンネル 30周年特別企画";
    const baseUrl = "https://30th.shopch.jp/spcl06/";

    const fullTitle = title || siteName;
    const fullUrl = `${baseUrl}${path}`;
    const imageUrl = image
        ? image.startsWith("http")
            ? image
            : `${baseUrl}${image}`
        : `${baseUrl}/OGP.png`;

    const defaultDescription = "30周年を迎えたショップチャンネル×ファッション誌『éclat（エクラ）』の特別企画！大人の女性に寄り添う心地よさと美しさを兼ね備えた「大人の名品」ファッションアイテムを感謝を込めてお届けします。あなたの心がおどる特別な一着との出会いを、ぜひお楽しみください。";

    return {
        title: fullTitle,
        description:
            description || defaultDescription,
        openGraph: {
            title: fullTitle,
            description:
                description || defaultDescription,
            url: fullUrl,
            siteName,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 600,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description:
                description || defaultDescription,
            images: [imageUrl],
        },
        robots: {
            index: isProductionSite,
            follow: isProductionSite,
        },
    };
}

export function getPageMetadata(path: string) {
    const config = seoConfig[path] || seoConfig["/"];
    return getMetadata({ ...config, path });
}


export interface SEOConfigItem {
    title: string;
    description: string;
    image?: string;
}

export interface SEOConfig {
    [path: string]: SEOConfigItem;
}

export const seoConfig: SEOConfig = {
    "/": {
        title: "ショップチャンネル×éclat（エクラ） スペシャルコラボ｜ショップチャンネル 30周年特別企画",
        description:
            "30周年を迎えたショップチャンネル×ファッション誌『éclat（エクラ）』の特別企画！大人の女性に寄り添う心地よさと美しさを兼ね備えた「大人の名品」ファッションアイテムを感謝を込めてお届けします。あなたの心がおどる特別な一着との出会いを、ぜひお楽しみください。",
    },
};






