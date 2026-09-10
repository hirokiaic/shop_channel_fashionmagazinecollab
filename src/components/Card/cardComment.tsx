import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

type CardCommentProps = {
    heading: ReactNode;
    children: ReactNode;
    signature?: string;
    className?: string;
};

const CardComment = ({
    heading,
    children,
    signature = "エクラ編集長",
    className,
}: CardCommentProps) => {
    return (
        <article
            className={cn(
                "relative flex w-full max-w-[392px] flex-col items-center gap-[8px] p-[24px]",
                className,
            )}
        >
            <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-20 w-[200px] border-l border-t border-black"
            />
            <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-20 w-[200px] border-r border-b border-black"
            />

            <div className="flex w-full flex-col items-start gap-4 text-black">
                <div className="w-full font-noto-serif-jp text-lg font-bold leading-[1.8]">
                    {heading}
                </div>

                <p className="m-0 w-full font-noto-sans-jp font-normal tracking-[0.1em]">
                    {children}
                </p>
            </div>

            <div className="relative flex w-full min-w-full shrink-0 items-end justify-end gap-2">
                <p className="m-0 font-noto-sans-jp text-[13px] font-normal leading-[1.8] tracking-[1.3px] text-black whitespace-nowrap relative">
                    {signature}

                    <span
                    aria-hidden
                    className="shrink-0 leading-none"
                >
                    <Image
                        src={addBasePathToPath("/images/comment.svg")}
                        alt=""
                        width={135}
                        height={44}
                        className="w-[119px] max-w-none absolute right-[92%] sm:right-full bottom-0"
                    />
                </span>
                </p>
            </div>
        </article>
    );
};

export default CardComment;
