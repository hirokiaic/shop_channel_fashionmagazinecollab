"use client";
import { addBasePathToPath, cn } from "@/lib/utils";
import { useExpired } from "@/app/Context/expiredContext";
import React from "react";
import Image from "next/image";

type BgStickyProps = {
    className?: string;
};

const BgSticky = ({ className, ...props }: BgStickyProps) => {

    const { expiredMap } = useExpired();
    const isExpired = (key: string) => expiredMap[key] ?? false;

    return (
        <div className={cn("absolute top-0 w-full h-full", className)} {...props} >
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* right */}
                <div className="hidden lg:block justify-self-end w-[calc((100vw-440px)/2)] -translate-y-1/2 absolute top-1/2">
                    {/* <div className="w-full max-w-[300px] m-auto flex flex-col gap-8 px-4">
                        <div className="w-full flex flex-col gap-2">
                            <AnchorLink href="#challenge-01" variant="compact">
                                <p className="m-0 shrink-0 bg-gold-gradient bg-clip-text font-scheherazade-new text-[20px] font-normal leading-[1.4] tracking-[2px] text-transparent">
                                    Challenge 01
                                </p>
                            </AnchorLink>
                            <div className="flex flex-col pl-2">
                                <SubAnchorLink href="#01チャレンジ対象商品">チャレンジ対象商品</SubAnchorLink>
                                <SubAnchorLink href="#01ご参加方法">ご参加方法</SubAnchorLink>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <AnchorLink href="#challenge-02" variant="compact">
                                <p className="m-0 shrink-0 bg-gold-gradient bg-clip-text font-scheherazade-new text-[20px] font-normal leading-[1.4] tracking-[2px] text-transparent">
                                    Challenge 02
                                </p>
                            </AnchorLink>
                            <div className="flex flex-col pl-2">
                                <SubAnchorLink href="#02チャレンジ対象商品">チャレンジ対象商品</SubAnchorLink>
                                <SubAnchorLink href="#02ご参加方法">ご参加方法</SubAnchorLink>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* left */}
                <div className="hidden lg:block justify-self-start w-[calc((100vw-440px)/2)] -translate-y-1/2 absolute top-1/2">
                    {/* <div className="flex flex-col items-center gap-3 px-4">
                        <CardFrame3 title={<>本日チャレンジ挑戦中<span className="font-noto-serif-jp font-bold">！</span></>}>
                            <>
                                <div className="relative mx-auto h-14 w-full max-w-[166px] shrink-0">
                                    <Image
                                        alt=""
                                        className="object-contain"
                                        fill
                                        src={addBasePathToPath("/images/guiness-logo-2.svg")}
                                    />
                                </div>
                                <p className="m-0 w-full text-center font-shippori-mincho text-[0px] font-bold tracking-[1.6px] text-primary">
                                    <span className="text-[30px] leading-[1.2]">
                                        世界記
                                    </span>
                                    <span className="text-[30px] leading-[1.2] tracking-[4.5px]">
                                        録
                                    </span>
                                    <span className="text-[24px] leading-[1.2]">
                                        への
                                    </span>
                                    <span className="text-[30px] leading-[1.2]">
                                        挑戦
                                    </span>
                                </p>
                            </>
                        </CardFrame3>
                        <Button2>ブランド詳細はこちら</Button2>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BgSticky; 