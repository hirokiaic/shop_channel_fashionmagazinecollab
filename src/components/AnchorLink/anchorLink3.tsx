import IconSvg from "@/components/iconSvg";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type AnchorLink3Props = {
    children: ReactNode;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<"a">, "children">;

const AnchorLink3 = ({ children, className, ...props }: AnchorLink3Props) => {
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
            <span className="shrink-0 whitespace-nowrap">{children}</span>

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
