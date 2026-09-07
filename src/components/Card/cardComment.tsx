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
                className="pointer-events-none absolute left-0 top-0 h-[80px] w-[200px] border-l border-t border-black"
            />
            <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-[80px] w-[200px] border-r border-b border-black"
            />

            <div className="flex w-full flex-col items-start gap-[16px] text-black">
                <div className="w-full font-noto-serif-jp text-[18px] font-bold leading-[1.8] tracking-[0.9px] break-words">
                    {heading}
                </div>

                <p className="m-0 w-full font-noto-sans-jp text-[14px] font-normal leading-[2] tracking-[1.4px] break-words">
                    {children}
                </p>
            </div>

            <div className="relative flex w-full min-w-full shrink-0 items-end justify-end gap-[8px]">
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
                        className="w-[119px] max-w-none absolute right-full bottom-0"
                    />
                </span>
                </p>
            </div>
        </article>
    );
};

export default CardComment;
