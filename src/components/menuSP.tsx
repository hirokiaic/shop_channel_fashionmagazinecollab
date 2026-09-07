"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ButtonMenu } from "./Menu/buttonMenu";
import { ContentMenu } from "./Menu/contentMenu";

type MenuSPProps = {
    className?: string;
};

const MenuSP = ({ className, ...props }: MenuSPProps) => {
    const [showButton, setShowButton] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const current = window.scrollY;
            setShowButton(current > 200);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

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
