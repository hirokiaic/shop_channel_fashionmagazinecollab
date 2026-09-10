"use client";

import { GoogleTagManager } from "@next/third-parties/google";

export function GTMChecker() {
	if (typeof window === "undefined") return null;

	const isProd =
		window.location.hostname === "30th.shopch.jp" &&
		window.location.pathname.startsWith("/spcl06");

	const isDev =
		window.location.hostname === "shop-channel-.vercel.app";

	if (isProd || isDev) return <GoogleTagManager gtmId="GTM-5VLBQV4S" />;

	return null;
}