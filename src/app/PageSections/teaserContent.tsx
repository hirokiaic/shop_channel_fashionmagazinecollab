"use client";

import { addBasePathToPath, cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const LOADING_DISPLAY_MS = 1500;
const FADE_DURATION = 0.8;

type TeaserContentProps = {
    className?: string;
    loadingDurationMs?: number;
};

function TeaserLoading() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-warm px-5">

            <div className="flex w-full max-w-[593px] items-center justify-center">
                <Image
                    src={addBasePathToPath("/images/eclat-shop-channel-logo.svg")}
                    alt="éclat × SHOP CHANNEL"
                    width={593}
                    height={100}
                    priority
                    className="h-auto w-full"
                />
            </div>

            <div
                className="absolute bottom-0 left-0 h-px w-full bg-black"
                aria-hidden
            />
        </div>
    );
}

const TEASER_IMG_SP_PATH = "/images/teaser/img-sp.webp";

type TeaserImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    sizes: string;
    priority?: boolean;
};

function TeaserImage({
    src,
    alt,
    width,
    height,
    className,
    sizes,
    priority,
}: TeaserImageProps) {
    return (
        <div className={cn("relative w-full", className)}>
            <Image
                src={addBasePathToPath(src)}
                alt={alt}
                width={width}
                height={height}
                sizes={sizes}
                priority={priority}
                className="h-auto w-full"
            />
        </div>
    );
}

function DateFrame() {
    return (
        <div className="relative w-full max-w-[392px] px-5 md:px-[55px] py-[31px] md:py-6 text-center text-black">
            <span
                className="absolute top-0 left-0 size-[40px] border-t border-l border-black"
                aria-hidden
            />
            <span
                className="absolute top-0 right-0 size-[40px] border-t border-r border-black"
                aria-hidden
            />
            <span
                className="absolute bottom-0 left-0 size-[40px] border-b border-l border-black"
                aria-hidden
            />
            <span
                className="absolute right-0 bottom-0 size-[40px] border-r border-b border-black"
                aria-hidden
            />

            <p className="m-0 font-jost text-[29px] md:text-[32px] font-medium leading-[1.7] tracking-[1.6px]">
                先行販売{" "}
                <span className="text-[32px] md:text-[35px] font-normal">START</span>
            </p>

            <p className="m-0 font-jost text-xl lg:text-[28px] font-normal leading-[1.7] tracking-[1.4px]">
                2026.10.30{" "}
                <span className="text-base md:text-lg">(fri) </span>
                10:00 AM
            </p>
        </div>
    );
}

function TeaserMain() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background-warm border-b border-black">

            <div className="relative z-[2] flex min-h-screen w-full items-center gap-2 lg:gap-20 px-5 pt-[140px] pb-10 justify-center lg:pt-[88px]">
                <TeaserImage
                    src="/images/teaser/img-left.webp"
                    alt=""
                    width={680}
                    height={1100}
                    sizes="270px"
                    className="w-full max-w-[340px] hidden md:block"
                />

                <div className="flex w-full max-w-[315px] md:max-w-[440px] flex-col items-center gap-6 lg:gap-10 lg:shrink-0">
                    <div className="flex w-full flex-col items-center gap-6">
                        <Image
                            src={addBasePathToPath(
                                "/images/eclat-shop-channel-logo.svg",
                            )}
                            alt="éclat × SHOP CHANNEL"
                            width={440}
                            height={80}
                            priority
                            className="h-auto w-full"
                        />

                        <p className="w-full text-center font-noto-serif-jp text-[15px] md:text-lg font-bold leading-[2] tracking-[0.05em] text-black">
                                上質、トレンド、<br className="max-md:hidden lg:hidden" />ベーシックのすべてが叶う<br/>
                                SPECIAL COLLABORATION
                        </p>
                    </div>

                    <DateFrame />

                    <TeaserImage
                        src={TEASER_IMG_SP_PATH}
                        alt=""
                        width={630}
                        height={961}
                        sizes="270px"
                        priority
                        className="w-full max-w-[315px] md:hidden mt-2"
                    />
                </div>

                <TeaserImage
                    src="/images/teaser/img-right.webp"
                    alt=""
                    width={680}
                    height={1100}
                    sizes="270px"
                    className="w-full max-w-[340px] hidden md:block"
                />
            </div>
        </div>
    );
}

export default function TeaserContent({
    className,
    loadingDurationMs = LOADING_DISPLAY_MS,
}: TeaserContentProps) {
    const [phase, setPhase] = useState<"loading" | "main">("loading");

    // Preload the teaser image for faster loading on mobile
    useEffect(() => {
        const img = new window.Image();
        img.src = addBasePathToPath(TEASER_IMG_SP_PATH);
    }, []);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setPhase("main");
        }, loadingDurationMs);

        return () => window.clearTimeout(timer);
    }, [loadingDurationMs]);

    return (
        <div className={cn("relative min-h-screen w-full", className)}>
            <AnimatePresence mode="wait">
                {phase === "loading" ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: FADE_DURATION, ease: "easeOut" }}
                    >
                        <TeaserLoading />
                    </motion.div>
                ) : (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: FADE_DURATION, ease: "easeIn" }}
                    >
                        <TeaserMain />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
