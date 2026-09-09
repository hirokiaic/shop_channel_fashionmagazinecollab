import Button from "@/components/Button/button";
import ButtonProduct from "@/components/Button/buttonProduct";
import ModalImage from "@/components/Modal/modalImage";
import Notes from "@/components/Notes/notes";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type StyleFeaturedImages = {
    main: string;
    sub1: string;
    sub2: string;
};

export type StyleFeaturedItem = {
    images: StyleFeaturedImages;
    description: string;
    name: ReactNode;
    price: string;
    buyHref: string;
    note?: string;
};

export type StyleGridItem = {
    image: string;
    description: string;
    name: string;
    price: string;
    buyHref?: string;
};

export type StyleProductButton = {
    href: string;
    leftImage: string;
    rightImage: string;
    leftImageAlt?: string;
    rightImageAlt?: string;
    leftImageClassName?: string;
    rightImageClassName?: string;
    isExtLink?: boolean;
};

export type StyleSectionData = {
    featuredItems: StyleFeaturedItem[];
    stylingItems: StyleGridItem[];
    productButton: StyleProductButton;
};

type StyleSectionProps = StyleSectionData & {
    className?: string;
};

function FeaturedItemRow({
    item,
    isLast,
}: {
    item: StyleFeaturedItem;
    isLast: boolean;
}) {
    return (
        <div
            className={cn(
                "flex w-full flex-col items-center gap-5 border-t border-grayCC px-5 py-6",
                isLast && "border-b",
            )}
        >
            <div className="flex w-full items-center justify-center gap-[26px]">
                <ModalImage
                    src={item.images.main}
                    alt=""
                    size="portrait"
                    className="shrink-0"
                />

                <div className="flex w-full max-w-[140px] shrink-0 flex-col items-start gap-[22px]">
                    <ModalImage
                        src={item.images.sub1}
                        alt=""
                        size="compact"
                        className="shrink-0"
                    />
                    <ModalImage
                        src={item.images.sub2}
                        alt=""
                        size="compact"
                        className="shrink-0"
                    />
                </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[12px]">
                <p className="m-0 w-full font-noto-sans-jp text-[13px] font-normal leading-[1.8] tracking-[1.3px] text-black break-words">
                    {item.description}
                </p>

                <div className="flex w-full flex-col items-start gap-[4px]">
                    <p className="m-0 w-full font-noto-sans-jp text-[14px] font-medium leading-[1.8] tracking-[1.4px] text-black">
                        {item.name}
                    </p>

                    <div className="flex w-full items-center justify-between gap-[8px]">
                        <p className="m-0 flex items-baseline gap-[8px] font-jost text-[14px] font-semibold leading-[1.8] tracking-[0.7px] text-black">
                            {item.price}
                            <span className="font-noto-sans-jp text-[11px] font-normal tracking-[1.1px]">
                                (税込)
                            </span>
                        </p>

                        <Button
                            href={item.buyHref}
                            variant="small"
                            className="shrink-0"
                        >
                            BUY
                        </Button>
                    </div>
                </div>
            </div>

            {item.note ? <Notes>{item.note}</Notes> : null}
        </div>
    );
}

function StylingCard({ item }: { item: StyleGridItem }) {
    return (
        <div className="flex w-full max-w-[160px] flex-col items-start gap-[16px]">
            <ModalImage src={item.image} alt="" size="card" className="shrink-0" />

            <p className="m-0 w-full font-noto-sans-jp text-[13px] font-normal leading-[1.8] tracking-[1.3px] text-black break-words">
                {item.description}
            </p>

            <div className="flex w-full flex-col items-start leading-[1.8]">
                {item.buyHref ? (
                    <a
                        href={item.buyHref}
                        className="font-noto-sans-jp text-[12px] font-medium tracking-[1.2px] text-black underline"
                    >
                        {item.name}
                    </a>
                ) : (
                    <p className="m-0 font-noto-sans-jp text-[12px] font-medium tracking-[1.2px] text-black underline">
                        {item.name}
                    </p>
                )}

                <p className="m-0 flex items-baseline gap-[4px] font-jost text-[14px] font-semibold tracking-[0.7px] text-black">
                    {item.price}
                    <span className="font-noto-sans-jp text-[10px] font-normal tracking-[1px]">
                        (税込)
                    </span>
                </p>
            </div>
        </div>
    );
}

function chunkItems<T>(items: T[], size: number): T[][] {
    const rows: T[][] = [];

    for (let index = 0; index < items.length; index += size) {
        rows.push(items.slice(index, index + size));
    }

    return rows;
}

export default function StyleSection({
    featuredItems,
    stylingItems,
    productButton,
    className,
}: StyleSectionProps) {
    const stylingRows = chunkItems(stylingItems, 2);

    return (
        <section
            className={cn(
                "flex flex-col items-center gap-12 bg-white pt-16",
                className,
            )}
        >
            <div className="flex inner flex-col items-start gap-[32px] text-center">
                <div className="flex w-full flex-col items-start gap-[4px] font-semibold">
                    <p className="m-0 w-full font-noto-serif-jp text-[23px] leading-[1.6] tracking-[3.45px] text-pink-brown-dark">
                        éclat 12月号掲載
                    </p>

                    <p className="m-0 w-full font-noto-serif-jp leading-[1.6] tracking-[0.05em] text-black">
                        <span className="text-[26px]">美しい素材とデザインを纏う</span>
                        <span className="text-[32px]">
                            <br />
                            大人の名品
                        </span>
                    </p>
                </div>

                <p className="m-0 w-full font-noto-sans-jp font-normal tracking-[1.4px] text-black text-center">
                    選び抜かれた素材、洗練されたデザイン。
                    <br />
                    心地よい着心地を兼ね備えた大人の逸品をご紹介。
                </p>
            </div>

            <div className="flex outer flex-col items-center gap-10">
                <div className="flex w-full flex-col items-start">
                    {featuredItems.map((item, index) => (
                        <FeaturedItemRow
                            key={`${item.price}-${index}`}
                            item={item}
                            isLast={index === featuredItems.length - 1}
                        />
                    ))}
                </div>

                <div className="flex w-full flex-col items-start gap-10">
                    <p className="m-0 w-full text-center font-amiri text-[32px] leading-[1.4] tracking-[3.2px] text-pink-brown-dark">
                        For Your Styling
                    </p>

                    <div className="relative flex w-full flex-col items-center gap-[20px] px-[10px]">
                        {stylingRows.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex w-full flex-col items-center gap-[20px]">
                                {rowIndex === 0 ? (
                                    <div className="h-px w-full bg-grayCC" aria-hidden />
                                ) : null}

                                <div className="flex w-full items-center justify-between px-[20px]">
                                    {row.map((item, columnIndex) => (
                                        <StylingCard
                                            key={`${item.name}-${rowIndex}-${columnIndex}`}
                                            item={item}
                                        />
                                    ))}
                                </div>

                                <div className="h-px w-full bg-grayCC" aria-hidden />
                            </div>
                        ))}

                        <div
                            className="pointer-events-none absolute top-px bottom-0 left-1/2 w-px -translate-x-1/2 bg-grayCC"
                            aria-hidden
                        />
                    </div>
                </div>
            </div>

            <div className="outer">
                <div className="flex flex-col items-center gap-2 bg-background-warm py-[40px] rounded-[4px]">
                    <div className="w-full flex flex-col items-center gap-6 px-3.5">
                        <p className="text-center font-noto-serif-jp text-[26px] font-semibold leading-[1.6] tracking-[3.9px] text-black">
                            上質な一着との出会いは、<br/>ここから。
                        </p>

                        <ButtonProduct {...productButton} />
                    </div>
                </div>
            </div>
        </section>
    );
}
