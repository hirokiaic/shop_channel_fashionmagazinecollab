"use client";
import { useEffect, useRef, useState } from "react";

import type { Metadata } from "next";
import BgSticky from "@/components/bgStick";
import Footer from "./Footer";

export const metadata: Metadata = {
    title: "",
    description: "",
    robots: {
        index: false,
        follow: false,
    },
};

export default function PageTop() {
    const mvRef = useRef<HTMLDivElement>(null);
    const messageSeenRef = useRef(false);
    const footerVisibleRef = useRef(false);
    const mvHeroActiveRef = useRef(true);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const messageEl = document.getElementById("message-section");
        const footerEl = document.getElementById("footer");
        const mvEl = mvRef.current;
        if (!messageEl || !footerEl || !mvEl) return;

        const updateVisibility = () => {
            setShowButton(
                messageSeenRef.current &&
                    !footerVisibleRef.current &&
                    !mvHeroActiveRef.current,
            );
        };

        const updateMvHero = () => {
            mvHeroActiveRef.current =
                mvEl.getBoundingClientRect().bottom > window.innerHeight;
            updateVisibility();
        };

        const messageObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) messageSeenRef.current = true;
                updateVisibility();
            },
            { threshold: 0 },
        );

        const footerObserver = new IntersectionObserver(
            ([entry]) => {
                footerVisibleRef.current = entry.isIntersecting;
                updateVisibility();
            },
            { threshold: 0 },
        );

        messageObserver.observe(messageEl);
        footerObserver.observe(footerEl);

        updateMvHero();
        window.addEventListener("scroll", updateMvHero, { passive: true });
        window.addEventListener("resize", updateMvHero);

        return () => {
            messageObserver.disconnect();
            footerObserver.disconnect();
            window.removeEventListener("scroll", updateMvHero);
            window.removeEventListener("resize", updateMvHero);
        };
    }, []);

    return (
        <main id="main">
            <div ref={mvRef} className="relative z-[1] overflow-hidden">
                {/* <MVContent /> */}
            </div>

            <div className="relative flex h-full bg-background-blush -mt-px">
                <BgSticky className="hidden lg:block" />

                <div className="w-full max-w-[440px] mx-auto bg-white relative overflow-hidden shadow-[0_20px_40px_rgba(51,51,51,0.40)]">
                   
                    <Footer id="footer" />
                </div>
            </div>

        </main>
    );
}
