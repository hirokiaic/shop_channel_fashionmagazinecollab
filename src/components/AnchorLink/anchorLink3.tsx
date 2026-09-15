import IconSvg from "@/components/iconSvg";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type AnchorLink3Props = {
    children: ReactNode;
    className?: string;
    isActive?: boolean;
} & Omit<React.ComponentPropsWithoutRef<"a">, "children">;

const AnchorLink3 = ({
    children,
    className,
    isActive = false,
    ...props
}: AnchorLink3Props) => {
    return (
        <a
            className={cn(
                "flex h-[26px] w-full max-w-[250px] items-center justify-between",
                "font-jost text-[15px] font-medium leading-[1.7] tracking-[0.75px] text-black",
                "no-underline outline-none transition-opacity duration-300 hover:opacity-70",
                "focus:outline-none focus-visible:outline-none",
                className,
            )}
            {...props}
        >
            <span
                className={cn(
                    "relative shrink-0 whitespace-nowrap",
                    "after:absolute after:bottom-0 after:left-0 after:block after:h-px after:w-full after:bg-black after:content-['']",
                    "after:transition-opacity after:duration-300 after:ease-out",
                    isActive ? "after:opacity-100" : "after:opacity-0",
                )}
            >
                {children}
            </span>

            <IconSvg
                iconSrc="/images/icon-arrow.svg"
                iconW="12"
                iconH="8"
                className="shrink-0 bg-black"
            />
        </a>
    );
};

export default AnchorLink3;
