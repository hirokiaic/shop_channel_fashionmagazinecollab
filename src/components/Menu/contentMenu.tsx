import { motion } from "framer-motion";
import Image from "next/image";
import { addBasePathToPath } from "@/lib/utils";
import AnchorLink from "../AnchorLink/anchorLink";
import SubAnchorLink from "../AnchorLink/subAnchorLink";
import AnchorLink2 from "../AnchorLink/anchorLink2";
import AnchorLink3 from "../AnchorLink/anchorLink3";
// import AnchorLinkMenu from "../AnchorLink/anchorLinkMenu";
// import AnchorLinkMenuSub from "../AnchorLink/anchorLinkMenuSub";

type ContentMenuProps = {
    onClose: () => void;
};

export function ContentMenu({ onClose }: ContentMenuProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 5 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut" as const,
            }
        }
    };

    return (
        <motion.div
            className="fixed top-0 w-full h-full bg-background-warm px-9 py-12 z-[49] flex items-center justify-center"
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
        >
            <motion.div variants={item} className="w-full w-full flex flex-col gap-8 mt-[30%]" onClick={onClose}>

                <div className="mx-auto flex w-full max-w-[340px] flex-col items-center px-4">
                    <div className="flex w-full flex-col items-end gap-[16px]">
                        <AnchorLink2
                            href="#collaboration-01"
                            number="01"
                            imageSrc="/images/collab-item-1.webp"
                            imageAlt="Collaboration item 01"
                            className="w-full"
                        />

                        <AnchorLink2
                            href="#collaboration-02"
                            number="02"
                            imageSrc="/images/collab-item-2.webp"
                            imageAlt="Collaboration item 02"
                            className="w-full [&>span:last-child]:opacity-40"
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

            </motion.div>
        </motion.div>
    );
}