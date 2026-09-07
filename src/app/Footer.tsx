import IconSvg from "@/components/iconSvg";
import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

const Footer = ({ className, ...props }: FooterProps) => {


    return (
        <div className={cn("w-full pb-14 lg:pb-0", className)}
            {...props}
        >
             <Link href="#main" className="p-4 flex items-baseline justify-center bg-black text-white font-gilda-display gap-4
             after:content-[''] after:w-0 after:h-0 after:border-l-6 after:border-r-6 after:border-b-10 after:border-transparent after:border-b-white">
             BACK TO TOP
             </Link>
            <div className="w-full max-w-[90%] mx-auto relative pt-16 pb-12 border-b border-gray-line">
                <Image src={addBasePathToPath("/images/footer-dots.webp")} alt="" width={1440} height={1440} className="w-full max-w-[50px] absolute bottom-4 left-0" />

                {/* sp */}
                <Link data-shopch-link href="https://www.shopch.jp/sp/?il=spcl06&ic=footer_shopchannellogo" className="lg:hidden curson-pointer">
                    <Image id="spcl06_footer_shopchannellogo_sp" src={addBasePathToPath("/images/logo.webp")} alt="shop channel logo" width={1440} height={1440} className="w-full max-w-[120px] mx-auto" />
                </Link>
                {/* pc */}
                <Link data-shopch-link href="https://www.shopch.jp/?il=spcl06&ic=footer_shopchannellogo" className="hidden lg:block curson-pointer">
                    <Image id="spcl06_footer_shopchannellogo_pc" src={addBasePathToPath("/images/logo.webp")} alt="shop channel logo" width={1440} height={1440} className="w-full max-w-[120px] mx-auto" />
                </Link>

                <Image src={addBasePathToPath("/images/footer-dots.webp")} alt="" width={1440} height={1440} className="w-full max-w-[50px] absolute top-4 right-0 transform -scale-y-[1]" />
            </div>
            <p className="p-8 text-center text-black text-xs font-shippori-mincho font-medium">© 2026 Jupiter Shop Channel Co.,Ltd. All rights reserved.</p>
        </div>
    );
};

export default Footer;
