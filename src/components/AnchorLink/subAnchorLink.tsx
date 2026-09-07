import IconSvg from "@/components/iconSvg";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SubAnchorLinkProps = {
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    iconClassName?: string;
} & Omit<React.ComponentPropsWithoutRef<"a">, "children">;

const SubAnchorLink = ({
    children,
    className,
    contentClassName,
    iconClassName,
    ...props
}: SubAnchorLinkProps) => {
    return (
        <a
            className={cn(
                "flex w-full max-w-[292px] items-center justify-between",
                "border-b border-gold py-3 pl-4 pr-6",
                "transition-opacity duration-300 hover:opacity-70",
                className,
            )}
            {...props}
        >
            <span
                className={cn(
                    "shrink-0 whitespace-nowrap font-shippori-mincho text-base font-bold leading-[1.6] tracking-[1.6px] text-black",
                    contentClassName,
                )}
            >
                {children}
            </span>

            <IconSvg
                iconSrc="/images/icon-arrow-down.svg"
                iconW="12"
                iconH="6"
                className={cn("shrink-0 bg-black", iconClassName)}
            />
        </a>
    );
};

export default SubAnchorLink;
