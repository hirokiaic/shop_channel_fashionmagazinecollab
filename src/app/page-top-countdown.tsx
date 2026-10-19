"use client";
import { useEffect, useState } from "react";
import PageTop from "./page-top";
import CountdownSection from "./PageSections/countdownSection";
import { useDomain } from "@/hooks/use-domain";

export default function PageTopCountdown() {
    const targetDate = new Date('2026-10-20T00:00:00+09:00');
    // const [isExpired, setIsExpired] = useState(targetDate.getTime() < new Date().getTime());

    const [isExpired, setIsExpired] = useState<boolean | null>(null);
    const { isTest, isLocalhost } = useDomain();

    useEffect(() => {
        // avoid mismatch between client and server(run in client)
        const check = () => {
            setIsExpired(new Date().getTime() >= targetDate.getTime());
        };

        // update as soon as the component mounts
        check();

        // update every second
        const interval = setInterval(check, 1000);

        return () => clearInterval(interval);
    }, []);

    // avoid hydration error (Until I know if it has expired, it doesn't render anything.)
    if (isExpired === null) return null;

    return (
        <div>
            {isExpired || isTest || isLocalhost ? (
                <PageTop />
            ) : (
                <CountdownSection targetDate={targetDate} />
            )}
        </div>
    );
}
