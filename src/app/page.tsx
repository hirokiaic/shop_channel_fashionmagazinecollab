import type { Metadata } from "next";
import PageTopCountdown from "./page-top-countdown";
import PageTop from "./page-top";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("/");

export default function Home() {

    return (
        <PageTopCountdown />
        // <PageTop />
    );
}
