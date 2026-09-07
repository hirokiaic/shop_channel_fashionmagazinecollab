import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

const variantStyles = {
    default: {
        link: "max-w-[392px]",
        icon: "right-[21px]",
    },
    compact: {
        link: "max-w-[343px]",
        icon: "right-[17px]",
    },
} as const;

type AnchorLinkProps = {
    children: ReactNode;
    className?: string;
    variant?: keyof typeof variantStyles;
} & Omit<React.ComponentPropsWithoutRef<"a">, "children">;

const AnchorLink = ({
    children,
    className,
    variant = "default",
    ...props
}: AnchorLinkProps) => {
    const styles = variantStyles[variant];

    return (
        <a
            className={cn(
                "relative flex h-[48px] w-full cursor-pointer items-center justify-center",
                "rounded-[4px] border border-black py-[8px] pl-[4px]",
                "font-jost text-[15px] font-medium leading-[1.7] tracking-[0.75px] text-black",
                "no-underline outline-none transition-opacity duration-300 hover:opacity-70",
                "focus:outline-none focus-visible:outline-none",
                styles.link,
                className,
            )}
            {...props}
        >
            <span className="relative z-[1] shrink-0 text-center whitespace-nowrap">
                {children}
            </span>

            <span
                aria-hidden
                className={cn(
                    "pointer-events-none absolute top-[11px] flex size-[24px] items-center justify-center",
                    styles.icon,
                )}
            >
                <Image
                    src={addBasePathToPath("/images/icon-arrow.svg")}
                    alt=""
                    width={24}
                    height={24}
                    className="size-3.5"
                />
            </span>
        </a>
    );
};

export default AnchorLink;
