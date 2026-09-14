import type { Metadata } from "next";
import { Suspense } from "react";
import PageTopCountdown from "./page-top-countdown";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("/");

export default function Home() {
    return (
        <Suspense fallback={null}>
            <PageTopCountdown />
        </Suspense>
    );
}
