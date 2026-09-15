"use client";
import { addBasePathToPath, cn } from "@/lib/utils";
import Tag from "@/components/Tag/tag";
import AnchorLink2 from "@/components/AnchorLink/anchorLink2";
import AnchorLink3 from "@/components/AnchorLink/anchorLink3";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import { useDomain } from "@/hooks/use-domain";
import { useUrlParam } from "@/hooks/use-urlParams";
import { useExpired } from "@/app/Context/expiredContext";
import { useIsClient } from "@/hooks/use-is-client";
import { useEffect, useState } from "react";

const COLLABORATION_SECTION_IDS = ["collaboration-01", "collaboration-02"] as const;

const SLIDES = [
    {
        src: "/images/slides/slide-3.webp",
        alt: "コラボレーションルック",
    },
    {
        src: "/images/slides/slide-4.webp",
        alt: "コラボレーションルック",
    }
] as const;

type BgStickyProps = {
    className?: string;
};

const BgSticky = ({ className, ...props }: BgStickyProps) => {

    const day = useUrlParam('day');
    const { expiredMap } = useExpired();
    const isExpired = (key: string) => expiredMap[key] ?? false;
    const { isProd } = useDomain();
    const isClient = useIsClient();

    // const phase1 = isExpired("phase1")
    const previewDay10_20 = isProd ? false : !isExpired("phase1") && day == "10/20";

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (!isClient || previewDay10_20) return;

        const sections = COLLABORATION_SECTION_IDS
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        if (sections.length === 0) return;

        const sectionEntries = new Map<string, IntersectionObserverEntry>();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    sectionEntries.set(entry.target.id, entry);
                });

                const visibleEntries = [...sectionEntries.values()].filter(
                    (entry) => entry.isIntersecting,
                );

                if (visibleEntries.length === 0) {
                    setActiveSection("");
                    return;
                }

                const mostVisible = visibleEntries.reduce((current, entry) =>
                    entry.intersectionRatio > current.intersectionRatio ? entry : current,
                );
                setActiveSection(mostVisible.target.id);
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [isClient, previewDay10_20]);

    return (
        <div className={cn("absolute top-0 w-full h-full", className)} {...props} >

            {!previewDay10_20 && (
                <div className="sticky top-0 h-screen overflow-hidden">
                    {/* right */}
                    <div className="absolute top-0 right-0 bottom-0 my-auto h-fit hidden w-[calc((100vw-440px)/2)] lg:block">
                        <div className="w-full max-w-[250px] xl:max-w-[340px] m-auto flex flex-col gap-6 xl:gap-8">
                            <div className="flex w-full flex-col items-center gap-[8px] border-y border-black px-2 py-2 xl:py-4 tracking-[0.05em]">
                                <Tag>OA INFORMATION</Tag>

                                <p className="m-0 text-center font-jost font-normal tracking-[0.05em] text-black">
                                    <span className="text-2xl xl:text-[28px] leading-[1.7]">2026.11.08 <span className="text-[18px] xl:text-[18px]">(sun)</span></span>
                                    <span className="text-2xl xl:text-[28px] leading-[1.7] whitespace-nowrap"> 23:00～</span>
                                </p>
                            </div>


                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                loop
                                slidesPerView={1}
                                speed={1500}
                                autoplay={{
                                    delay: 7000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                className="aspect-[366/560] w-full max-w-[300px]"
                            >
                                {SLIDES.map((slide) => (
                                    <SwiperSlide key={slide.src}>
                                        <div className="relative aspect-[366/560] w-full">
                                            <Image
                                                src={addBasePathToPath(slide.src)}
                                                alt={slide.alt}
                                                fill
                                                sizes="300px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* left */}
                    <div className="absolute top-0 left-0 bottom-0 my-auto h-fit hidden w-[calc((100vw-440px)/2)] lg:block">
                        <div className="mx-auto flex w-full max-w-[340px] flex-col items-center px-4">
                            <div className="flex w-full flex-col items-end gap-[16px]">
                                <AnchorLink2
                                    href="#collaboration-01"
                                    number="01"
                                    imageSrc="/images/collab-item-1.webp"
                                    imageAlt="Collaboration item 01"
                                    className="w-full"
                                    isActive={activeSection === "collaboration-01"}
                                />

                                <AnchorLink2
                                    href="#collaboration-02"
                                    number="02"
                                    imageSrc="/images/collab-item-2.webp"
                                    imageAlt="Collaboration item 02"
                                    className="w-full"
                                    isActive={activeSection === "collaboration-02"}
                                />
                            </div>

                            <div className="mt-[24px] flex w-full flex-col items-start gap-[10px] pr-[20px]">
                                <AnchorLink3 href="#cotton-cashmere-top" className="w-full max-w-none">
                                    COTTON CASHMERE TOP
                                </AnchorLink3>

                                <AnchorLink3 href="#semi-wide-jeans" className="w-full max-w-none">
                                    SEMI - WIDE JEANS
                                </AnchorLink3>

                                <AnchorLink3 href="#cardigan" className="w-full max-w-none">
                                    CARDIGAN
                                </AnchorLink3>

                                <AnchorLink3 href="#check-stole" className="w-full max-w-none">
                                    CHECK STOLE
                                </AnchorLink3>

                                <AnchorLink3 href="#other-item" className="w-full max-w-none">
                                    OTHER ITEM
                                </AnchorLink3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BgSticky; 