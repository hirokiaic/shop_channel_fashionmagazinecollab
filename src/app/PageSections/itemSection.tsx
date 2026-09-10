import Button from "@/components/Button/button";
import CardComment from "@/components/Card/cardComment";
import ModalImage from "@/components/Modal/modalImage";
import Notes from "@/components/Notes/notes";
import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

export type ItemSectionBadge = {
    src: string;
    width: number;
    height: number;
    className?: string;
};

export type ItemSectionImage = {
    src: string;
    alt: string;
};

export type ItemSectionDetail = {
    image: string;
    text: string;
};

export type ItemSectionProduct = {
    name: ReactNode;
    price: string;
    buyHref: string;
};

export type ItemSectionComment = {
    heading: ReactNode;
    body: string;
    signature?: string;
};

export type ItemSectionData = {
    id: string;
    badge: ItemSectionBadge;
    heading: ReactNode;
    mainImages: ItemSectionImage[];
    product: ItemSectionProduct;
    comment: ItemSectionComment;
    details: ItemSectionDetail[];
    note: string;
};

type ItemSectionProps = ItemSectionData & {
    className?: string;
};

function ProductBlock({
    product,
    className,
}: {
    product: ItemSectionProduct;
    className?: string;
}) {
    return (
        <div className={cn("flex w-full flex-col items-start gap-[16px]", className)}>
            <div className="flex w-full flex-col items-start gap-[4px] text-black">
                <p className="m-0 font-noto-sans-jp text-[14px] font-medium leading-[1.8] tracking-[1.4px]">
                    {product.name}
                </p>

                <p className="m-0 flex items-center gap-[8px] font-jost text-[18px] font-semibold leading-[1.8] tracking-[0.9px]">
                    {product.price}
                    <span className="font-noto-sans-jp text-[11px] font-normal tracking-[1.1px]">
                        (税込)
                    </span>
                </p>
            </div>

            <Button href={product.buyHref} className="w-full max-w-none">
                BUY
            </Button>
        </div>
    );
}

export default function ItemSection({
    id,
    badge,
    heading,
    mainImages,
    product,
    comment,
    details,
    note,
    className,
}: ItemSectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "flex flex-col items-center gap-16 bg-background-blush inner pt-20 pb-16",
                className,
            )}
        >
            <div className="flex w-full flex-col items-center gap-20">
                <div className="flex w-full flex-col items-start gap-16">
                    <div className="flex w-full flex-col items-start gap-12">
                        <div className="flex w-full flex-col items-start gap-8">
                            <div className="relative flex w-full items-center justify-center gap-2.5 pt-10">
                                <Image
                                    src={addBasePathToPath(badge.src)}
                                    alt=""
                                    width={badge.width}
                                    height={badge.height}
                                    aria-hidden
                                    className={badge.className}
                                />

                                <p className="relative m-0 w-full max-w-[392px] font-noto-serif-jp text-[20px] font-bold leading-[1.6] tracking-[2px] text-black">
                                    {heading}
                                </p>
                            </div>

                            <div className="flex w-full flex-col items-start gap-[32px]">
                                {mainImages.map((image) => (
                                    <div
                                        key={image.src}
                                        className="relative aspect-[392/555] w-full"
                                    >
                                        <Image
                                            src={addBasePathToPath(image.src)}
                                            alt={image.alt}
                                            width={1920}
                                            height={1920}
                                            sizes="392px"
                                            className="object-cover"
                                        />
                                    </div>
                                ))}

                                <ProductBlock product={product} />
                            </div>
                        </div>

                        <CardComment
                            heading={comment.heading}
                            signature={comment.signature}
                        >
                            {comment.body}
                        </CardComment>
                    </div>

                    <div className="flex w-full flex-col items-center gap-10">
                        <div className="flex w-full flex-col items-center gap-4">
                            <p className="m-0 font-amiri text-[23px] leading-[1.4] tracking-[2.3px] text-black">
                                DETAIL
                            </p>

                            <p className="m-0 font-noto-sans-jp text-[11px] font-normal leading-[1.8] tracking-[1.1px] text-black">
                                写真をタップすると拡大できます。
                            </p>

                            <div className="flex w-full flex-col items-start gap-8">
                                {details.map((item, index) => (
                                    <div
                                        key={item.image}
                                        className={cn(
                                            "flex w-full items-center justify-center gap-8",
                                            index % 2 === 1 && "flex-row-reverse",
                                        )}
                                    >
                                        <ModalImage
                                            src={item.image}
                                            alt=""
                                            className="shrink-0"
                                        />

                                        <p className="w-full max-w-[160px] font-noto-sans-jp text-[13px] font-normal leading-[1.8] tracking-[0.65px] text-black">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex w-full flex-col items-start gap-[16px]">
                            <ProductBlock product={product} />

                            <Notes>{note}</Notes>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
