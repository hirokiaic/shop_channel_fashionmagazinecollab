"use client";

import BgSticky from "@/components/bgStick";
import IntroSection from "./PageSections/introSection";
import MVContent from "./PageSections/mvContent";
import Footer from "./Footer";

export default function PageTop() {
        return (
        <main id="main">
            <div className="relative z-[1] overflow-hidden">
                <MVContent />
            </div>

            <div className="relative flex h-full bg-background-blush -mt-px">
                <BgSticky className="hidden lg:block" />

                <div className="w-full max-w-[440px] mx-auto bg-white relative overflow-hidden shadow-[0_20px_40px_rgba(51,51,51,0.40)]">
                    <IntroSection />

                    <Footer id="footer" />
                </div>
            </div>

        </main>
    );
}
