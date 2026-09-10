import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type TagProps = {
    children?: ReactNode;
    className?: string;
};

const Tag = ({ children, className }: TagProps) => {
    return (
        <span
            className={cn(
                "inline-flex items-center justify-center bg-navy px-[16px]",
                "font-jost text-[14px] font-normal leading-[1.7] tracking-[0.7px] text-white",
                "whitespace-nowrap",
                className,
            )}
        >
            {children}
        </span>
    );
};

export default Tag;
