import IconSvg from "@/components/iconSvg";
import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

type ButtonProductProps = {
    href: string;
    leftImage: string;
    rightImage: string;
    leftImageAlt?: string;
    rightImageAlt?: string;
    leftImageClassName?: string;
    rightImageClassName?: string;
    children?: ReactNode;
    className?: string;
    isExtLink?: boolean;
} & Omit<React.ComponentPropsWithoutRef<"a">, "children" | "href">;

const buttonProductClassName =
    "relative block w-full max-w-[392px] h-[96px] no-underline outline-none transition-opacity duration-300 ease-out hover:opacity-80 focus:outline-none focus-visible:outline-none";

const ButtonProduct = ({
    href,
    leftImage,
    rightImage,
    leftImageAlt = "",
    rightImageAlt = "",
    leftImageClassName,
    rightImageClassName,
    children = "商品をすべて見る",
    className,
    isExtLink = true,
    ...props
}: ButtonProductProps) => {
    return (
        <a
            href={href}
            className={cn(buttonProductClassName, className)}
            target={isExtLink ? "_blank" : undefined}
            rel={isExtLink ? "noopener noreferrer" : undefined}
            {...props}
        >
            <div
                aria-hidden
                className={cn("pointer-events-none absolute left-3.5 -top-4 z-10 flex size-[92px] items-center justify-center", leftImageClassName)}
            >
                    <Image
                        src={addBasePathToPath(leftImage)}
                        alt={leftImageAlt}
                        fill
                        sizes="80px"
                        className="object-contain"
                    />
            </div>

            <div
                aria-hidden
                className={cn("pointer-events-none absolute right-3.5 -top-3 z-10 flex h-[92px] w-[90px] items-center justify-center", rightImageClassName)}
            >
                    <Image
                        src={addBasePathToPath(rightImage)}
                        alt={rightImageAlt}
                        fill
                        sizes="77px"
                        className="object-contain"
                    />
            </div>

            <span className="z-[1] flex w-full flex-col items-center gap-3.5 rounded-[4px] border border-black bg-white pt-4 pb-3 pl-1">
                <span className="font-noto-sans-jp text-[14px] font-medium leading-[1.8] tracking-[1.4px] text-black whitespace-nowrap">
                    {children}
                </span>

                <IconSvg
                    iconSrc="/images/icon-link.svg"
                    iconW="12"
                    iconH="12"
                    className="bg-black"
                />
            </span>
        </a>
    );
};

export default ButtonProduct;
