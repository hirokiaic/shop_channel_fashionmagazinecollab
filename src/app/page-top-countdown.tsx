"use client";
import { useState } from "react";
import PageTop from "./page-top";
import CountdownSection from "./PageSections/countdownSection";

export default function PageTopCountdown() {
    const targetDate = new Date('2026-08-30T00:00:00+09:00');
    const [isExpired, setIsExpired] = useState(targetDate.getTime() < new Date().getTime());

    return (
        <div>
            {isExpired ? (
                <PageTop />
            ) : (
                <CountdownSection targetDate={targetDate} setIsExpired={setIsExpired} />
            )}
        </div>
    );
}
