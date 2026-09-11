import Button from "@/components/Button/button";
import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";

const thanksBackLinkSp =
    "https://www.shopch.jp/sp/cmn/a/sp/30th?il=spcl07&ic=footer_30thlogo_sp";
const thanksBackLinkPc =
    "https://www.shopch.jp/pc/cmn/a/sp/30th?il=spcl07&ic=footer_30thlogo_pc";

type ThanksSectionProps = {
    className?: string;
};

export default function ThanksSection({
    className,
}: ThanksSectionProps) {
    return (
        <section
            className={cn(
                "outer max-md:px-4 pb-20",
                className,
            )}
        >
            <div className="inner flex flex-col items-center border border-black bg-background-warm pt-8 pb-16">
                <div className="w-full max-w-[340px] items-center justify-center">
                    <Image
                        src={addBasePathToPath("/images/thankyou.svg")}
                        alt="Thank you!"
                        width={340}
                        height={84}
                        className="h-auto w-full max-w-[295px] md:max-w-[340px] mx-auto"
                    />
                </div>

                <div className="flex w-full flex-col items-center gap-8">
                    <p className="w-full text-center font-noto-serif-jp text-[26px] md:text-[29px] font-semibold leading-[1.6] tracking-[2.9px] text-black">
                        おかげさまで<br />30周年を迎えました
                    </p>

                    <p className="m-0 w-full text-center font-noto-sans-jp text-[14px] font-normal leading-[2] tracking-[1.4px] text-black">
                        これまでのご愛顧<br className="md:hidden" />に心より感謝申し上げます。
                        <br />
                        これからも、皆さまの暮らしに寄り添い、
                        <br />
                        ワクワクする商品との出会いを
                        <br />
                        お届けしてまいります。
                        <br />
                        引き続きジュピターショップチャンネル
                        <br />
                        30周年企画をお楽しみください。
                    </p>

                    {/* sp */}
                    <Button
                        id="spcl06_footer_30th_sp"
                        href={thanksBackLinkSp}
                        variant="back"
                        isExtLink
                        className="w-full lg:hidden"
                        data-shopch-link
                    >
                        30周年特設サイトへ戻る
                    </Button>

                    {/* pc */}
                    <Button
                        id="spcl06_footer_30th_pc"
                        href={thanksBackLinkPc}
                        variant="back"
                        isExtLink
                        className="hidden w-full lg:flex"
                        data-shopch-link
                    >
                        30周年特設サイトへ戻る
                    </Button>
                </div>
            </div>
        </section>
    );
}
