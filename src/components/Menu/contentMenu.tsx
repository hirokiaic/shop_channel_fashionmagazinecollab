import { motion } from "framer-motion";
import Image from "next/image";
import { addBasePathToPath } from "@/lib/utils";
import AnchorLink from "../AnchorLink/anchorLink";
import SubAnchorLink from "../AnchorLink/subAnchorLink";
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
            className="fixed top-0 w-full h-full bg-background-warm px-9 py-12 z-[49]"
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
        >
            <motion.div variants={item} className="w-full w-full flex flex-col gap-8 mt-[30%]" onClick={onClose}>

                <div className="w-full max-w-[300px] mx-auto flex flex-col gap-2">
                    <AnchorLink href="#challenge-01" variant="compact">
                        <p className="m-0 shrink-0 bg-gold-gradient bg-clip-text font-scheherazade-new text-[20px] font-normal leading-[1.4] tracking-[2px] text-transparent">
                            Challenge 01
                        </p>
                    </AnchorLink>
                    <div className="flex flex-col pl-2">
                        <SubAnchorLink href="#01チャレンジ対象商品">チャレンジ対象商品</SubAnchorLink>
                        <SubAnchorLink href="#01ご参加方法">ご参加方法</SubAnchorLink>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-auto flex flex-col gap-2">
                    <AnchorLink href="#challenge-02" variant="compact">
                        <p className="m-0 shrink-0 bg-gold-gradient bg-clip-text font-scheherazade-new text-[20px] font-normal leading-[1.4] tracking-[2px] text-transparent">
                            Challenge 02
                        </p>
                    </AnchorLink>
                    <div className="flex flex-col pl-2">
                        <SubAnchorLink href="#02チャレンジ対象商品">チャレンジ対象商品</SubAnchorLink>
                        <SubAnchorLink href="#02ご参加方法">ご参加方法</SubAnchorLink>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}