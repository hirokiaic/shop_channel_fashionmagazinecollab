"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ButtonMenu } from "./Menu/buttonMenu";
import { ContentMenu } from "./Menu/contentMenu";
import { useUrlParam } from "@/hooks/use-urlParams";
import { useExpired } from "@/app/Context/expiredContext";
import { useDomain } from "@/hooks/use-domain";

type MenuSPProps = {
    className?: string;
};

const MenuSP = ({ className, ...props }: MenuSPProps) => {
    const [showButton, setShowButton] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const day = useUrlParam('day');
    const { expiredMap } = useExpired();
    const isExpired = (key: string) => expiredMap[key] ?? false;
    const { isProd } = useDomain();

    // const phase1 = isExpired("phase1")
    const previewDay10_20 = isProd ? false : !isExpired("phase1") && day == "10/20";

    useEffect(() => {
        function handleScroll() {
            const current = window.scrollY;
            setShowButton(current > 200);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    if (previewDay10_20) return null;

    return (
        <div className={cn("", className)}
            {...props}
        >
            {showButton &&
                    <div className="lg:hidden">
                        <ButtonMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                    </div>
                }
                <AnimatePresence>
                    {isOpen &&
                        <ContentMenu onClose={() => setIsOpen(false)} />
                    }
                </AnimatePresence>
        </div>
    );
};

export default MenuSP; 
