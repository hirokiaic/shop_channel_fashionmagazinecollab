"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
    className?: string;
};

const Header = ({ className, ...props }: HeaderProps) => {
    const [hideNavBg, setHideNavBg] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const current = window.scrollY;
            setHideNavBg(current > 800);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <header className={cn("absolute lg:fixed top-3.5 lg:top-5 z-50 w-full px-5 pointer-events-none", className)}
            {...props}
        >
            <div className={cn("w-full h-16 lg:h-[88px] rounded-[8px] flex items-center justify-between px-4 lg:px-10",
                hideNavBg ? "bg-transparent backdrop-blur-none" : "bg-[rgba(255,255,255,0.8)] backdrop-blur-sm"
            )}>
                {/* sp */}
                <Link data-shopch-link href="https://www.shopch.jp/sp/?il=spcl06&ic=header_shopchannellogo " className="lg:hidden pointer-events-auto">
                    <Image id="spcl06_header_shopchannellogo_sp" src="images/logo.svg" alt="ロゴ" width={1440} height={1440} className="w-full max-w-20 lg:max-w-28" />
                </Link>
                {/* pc */}
                <Link data-shopch-link href="https://www.shopch.jp/?il=spcl06&ic=header_shopchannellogo" className="hidden lg:block pointer-events-auto">
                    <Image id="spcl06_header_shopchannellogo_pc" src="images/logo.svg" alt="ロゴ" width={1440} height={1440} className="w-full max-w-20 lg:max-w-28" />
                </Link>

                <div className="flex items-center gap-2 lg:gap-6">
                    {/* SP */}
                    <Link data-shopch-link href="https://www.shopch.jp/sp/cmn/a/sp/30th?il=spcl06&ic=header_30thlogo_sp" className="pointer-events-auto lg:hidden ">
                        <Image id="spcl06_header_30th_sp" src="images/30th.svg" alt="ロゴ" width={1440} height={1440} className="w-full max-w-12 lg:max-w-[66px]" />
                    </Link>
                    {/* PC */}
                    <Link data-shopch-link href="https://www.shopch.jp/pc/cmn/a/sp/30th?il=spcl06&ic=header_30thlogo_pc" className="pointer-events-auto hidden lg:block">
                        <Image id="spcl06_header_30th_pc" src="images/30th.svg" alt="ロゴ" width={1440} height={1440} className="w-full max-w-12 lg:max-w-[66px]" />
                    </Link>

                    <Separator orientation="vertical" className="bg-gray-line h-10! lg:h-12!" />
                    <p className="text-xs lg:text-sm font-bold font-shippori-mincho">心おどる<br />スペシャル企画</p>
                </div>
            </div>
        </header>
    );
};

export default Header; 
