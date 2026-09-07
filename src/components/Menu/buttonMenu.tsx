import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ButtonMenuProps = {
    isOpen: boolean;
    onClick?: () => void;
    className?: string;
};

export function ButtonMenu({ isOpen, onClick, className }: ButtonMenuProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn("size-14 bg-white rounded-lg flex flex-col items-center justify-center gap-1.5 cursor-pointer", 
             "fixed top-3.5 right-5 z-50",
            isOpen ? "shadow-none" : "shadow-[0_0_40px_rgba(51,51,51,0.20)]", className)}
            aria-label="Menu"
            aria-expanded={isOpen}
        >
            <motion.span
                className="w-6 h-0.5 bg-pink"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
            />
            <motion.span
                className="w-6 h-0.5 bg-pink"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
            />
            <motion.span
                className="w-6 h-0.5 bg-pink"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
            />
        </button>
    );
}