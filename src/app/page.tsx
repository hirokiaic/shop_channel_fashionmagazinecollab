import type { Metadata } from "next";
import PageTopCountdown from "./page-top-countdown";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("/");

export default function Home() {
    return (
        <PageTopCountdown />
    );
}
