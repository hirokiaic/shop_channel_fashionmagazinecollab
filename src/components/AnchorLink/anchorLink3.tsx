import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";
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

            <span aria-hidden className="relative size-3 shrink-0">
                <span className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
                    <Image
                        src={addBasePathToPath("/images/icon-arrow.svg")}
                        alt=""
                        width={24}
                        height={24}
                        className="block size-full max-w-none"
                    />
                </span>
            </span>
        </a>
    );
};

export default AnchorLink3;
