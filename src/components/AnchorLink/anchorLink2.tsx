import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";

const numberImages = {
    "01": "/images/item01.svg",
    "02": "/images/item02.svg",
} as const;

const numberImageSizes = {
    "01": { width: 127, height: 58 },
    "02": { width: 138, height: 57 },
} as const;

type AnchorLink2Props = {
    href: string;
    number?: keyof typeof numberImages;
    imageSrc?: string;
    imageAlt?: string;
    className?: string;
};

const AnchorLink2 = ({
    href,
    number = "01",
    imageSrc = "/images/temp.png",
    imageAlt = "",
    className,
}: AnchorLink2Props) => {
    const numberImage = numberImages[number];
    const numberSize = numberImageSizes[number];

    return (
        <a
            href={href}
            className={cn(
                "flex w-full max-w-[392px] items-start justify-between",
                "no-underline outline-none",
                "focus:outline-none focus-visible:outline-none",
                className,
            )}
        >
            <div className="flex shrink-0 flex-col items-start pt-[8px]">
                <div className="relative inline-grid shrink-0 leading-none">
                    <Image
                        src={addBasePathToPath(numberImage)}
                        alt=""
                        width={numberSize.width}
                        height={numberSize.height}
                        aria-hidden
                        className={cn(
                            "col-start-1 row-start-1 ml-[3px] h-[58px] w-auto max-w-none",
                            number === "01" ? "max-w-[127px]" : "max-w-[138px]",
                        )}
                    />

                    <div className="col-start-1 row-start-1 mt-[39px] flex w-[119px] flex-col items-start">
                        <span className="font-jost text-[15px] font-medium leading-[1.7] tracking-[0.75px] text-black whitespace-nowrap">
                            COLLABORATION
                        </span>

                        <span className="flex h-[26px] items-center gap-[12px]">
                            <span className="font-jost text-[15px] font-medium leading-[1.7] tracking-[0.75px] text-black whitespace-nowrap">
                                ITEM #{number}
                            </span>
                            <Image
                                src={addBasePathToPath("/images/icon-arrow.svg")}
                                alt=""
                                width={24}
                                height={24}
                                aria-hidden
                                className="size-3 shrink-0 object-contain"
                            />
                        </span>
                    </div>
                </div>
            </div>

            <span className="relative block size-[136px] shrink-0 overflow-hidden">
                <Image
                    src={addBasePathToPath(imageSrc)}
                    alt={imageAlt}
                    fill
                    sizes="136px"
                    className="object-cover"
                />
            </span>
        </a>
    );
};

export default AnchorLink2;
