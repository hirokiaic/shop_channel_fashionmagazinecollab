"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { addBasePathToPath, cn } from "@/lib/utils";

import "swiper/css";

const SLIDES = [
    {
        src: "/images/slides/slide-1.webp",
        alt: "コラボレーションルック 1",
    },
    {
        src: "/images/slides/slide-2.webp",
        alt: "コラボレーションルック 2",
    },
    {
        src: "/images/slides/slide-3.webp",
        alt: "コラボレーションルック 3",
    },
    {
        src: "/images/slides/slide-4.webp",
        alt: "コラボレーションルック 4",
    },
    {
        src: "/images/slides/slide-5.webp",
        alt: "コラボレーションルック 5",
    },
] as const;

const LOOP_SLIDES = [...SLIDES, ...SLIDES];

const logoContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.8,
            delayChildren: 0.1,
        },
    },
};

const logoReveal = {
    hidden: {
        opacity: 0,
        scaleX: 1.05,
    },
    show: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 1.4,
            ease: "easeOut" as const,
        },
    },
};

type MVSlideCardProps = {
    src: string;
    alt: string;
    className?: string;
};

function MVSlideCard({ src, alt, className }: MVSlideCardProps) {
    return (
        <div className={cn("relative h-[459px] w-[300px] shrink-0", className)}>
            <div className="absolute inset-x-0 top-0 aspect-[366/560]">
                <Image
                    src={addBasePathToPath(src)}
                    alt={alt}
                    fill
                    sizes="300px"
                    className="object-cover"
                />
            </div>
        </div>
    );
}

type MVContentProps = {
    className?: string;
};

export default function MVContent({ className }: MVContentProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden border-b border-black bg-white pb-[80px] min-h-[781px] md:min-h-[885px] flex flex-col justify-end",
                className,
            )}
        >
            {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40px] bg-white [clip-path:ellipse(120%_100%_at_50%_100%)]" /> */}

            <div className="relative z-[2] flex flex-col items-center px-4 md:px-5 md:pt-[60px]">
                <motion.div
                    className="flex w-full max-w-[593px] flex-col items-center gap-6"
                    variants={logoContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div
                        variants={logoReveal}
                        className="w-full max-w-[593px] origin-center"
                    >
                        <Image
                            src={addBasePathToPath("/images/eclat-shop-channel-logo.svg")}
                            alt="éclat × SHOP CHANNEL"
                            width={593}
                            height={100}
                            priority
                            className="h-auto w-full max-w-[593px]"
                        />
                    </motion.div>

                    <motion.div
                        variants={logoReveal}
                        className="relative z-[1] flex w-full max-w-[381px] origin-center items-center justify-center"
                    >
                        <Image
                            src={addBasePathToPath("/images/collaboration-logo.svg")}
                            alt="Collaboration"
                            width={381}
                            height={98}
                            className="h-auto w-full max-w-[214px] md:max-w-[381px]"
                        />
                    </motion.div>
                </motion.div>
            </div>

            <div className="relative z-[1] -mt-4 w-full overflow-hidden [&_.swiper-wrapper]:!ease-linear">
                <Swiper
                    modules={[Autoplay]}
                    loop
                    slidesPerView="auto"
                    spaceBetween={20}
                    speed={10000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    className="mv-swiper !overflow-visible px-5"
                >
                    {LOOP_SLIDES.map((slide, index) => (
                        <SwiperSlide key={`${slide.src}-${index}`} className="!w-[300px]">
                            <MVSlideCard src={slide.src} alt={slide.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
