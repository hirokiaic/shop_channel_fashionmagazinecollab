"use client";

import BgSticky from "@/components/bgStick";
import IntroSection from "./PageSections/introSection";
import MVContent from "./PageSections/mvContent";
import Footer from "./Footer";
import AnchorSection from "./PageSections/anchorSection";
import { Separator } from "@base-ui/react";
import ItemSection from "./PageSections/itemSection";
import StyleSection from "./PageSections/styleSection";
import InfoSection from "./PageSections/infoSection";
import ThanksSection from "./PageSections/thanksSection";
import { item01SectionData, item02SectionData } from "../mocks/itemSectionData";
import { styleSectionData } from "../mocks/styleSectionData";
import { useDomain } from "@/hooks/use-domain";
import { useUrlParam } from "@/hooks/use-urlParams";
import { useExpired } from "./Context/expiredContext";
import TeaserContent from "./PageSections/teaserContent";

export default function PageTop() {
    const day = useUrlParam('day');
    const { expiredMap } = useExpired();
    const isExpired = (key: string) => expiredMap[key] ?? false;
    const { isProd } = useDomain();

    // const phase1 = isExpired("phase1")
    const previewDay10_20 = isProd ? false : !isExpired("phase1") && day == "10/20";

    return (
        <main id="main">
            <div className="relative z-[1] overflow-hidden">
                {previewDay10_20 ? <TeaserContent /> : <MVContent />}
            </div>

            <div className="relative flex h-full bg-background-blush -mt-px">
                <BgSticky className="hidden lg:block" />

                <div className="w-full max-w-[440px] mx-auto bg-white relative overflow-hidden shadow-[0_20px_40px_rgba(51,51,51,0.40)] outline outline-1 outline-black -outline-offset-1">
                    <IntroSection />

                    {!previewDay10_20 && (
                        <>
                            <AnchorSection />

                            <ItemSection {...item01SectionData} />

                            <Separator className="w-full h-px bg-grayCC" />

                            <ItemSection {...item02SectionData} />

                            <StyleSection {...styleSectionData} />

                            <InfoSection />

                            <ThanksSection />
                        </>
                    )}

                    <Footer id="footer" />
                </div>
            </div>

        </main >
    );
}
