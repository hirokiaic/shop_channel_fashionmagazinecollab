import Tag from "@/components/Tag/tag";
import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";

type IntroSectionProps = {
    className?: string;
};

export default function IntroSection({ className }: IntroSectionProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center gap-[64px] border-x border-black bg-background-blush inner pt-20",
                className,
            )}
        >
            <div className="flex w-full flex-col items-start gap-[40px]">
                <div className="flex w-full flex-col items-start font-semibold">
                    <p className="text-[23px] leading-[1.6] tracking-[0.15em] text-pink-brown-dark font-noto-serif-jp">
                        今こそ選びたい！
                    </p>

                    <p className="text-[38px] leading-[1.6] tracking-[0.15em] text-black font-noto-serif-jp">
                        上質を愉しむ
                        <br />
                        「大人の名品」
                    </p>
                </div>

                <p>
                    ショップチャンネル30周年を記念して、
                    <br />
                    ファッション誌「エクラ」との
                    <br />
                    特別な取り組みが実現しました。
                    <br />
                    大人の女性に寄り添う“心地よさ”と、
                    <br />
                    さりげなく際立つ“美しさ”を
                    <br />
                    兼ね備えたアイテムを、
                    <br />
                    感謝の想いとともにお届けします。
                    <br />
                    みなさまの心おどる、
                    <br />
                    特別な一着との出会いとなりますように。
                </p>
            </div>

            <div className="flex w-full flex-col items-center gap-[24px] border-y border-black px-[8px] pt-[32px] pb-[40px]">
                <div className="flex w-full max-w-[270px] flex-col items-center gap-[8px]">
                    <Image
                        src={addBasePathToPath("/images/eclat-shop-channel-logo.svg")}
                        alt="éclat × SHOP CHANNEL"
                        width={264}
                        height={48}
                        className="h-[48px] w-auto max-w-[264px]"
                    />

                    <p className="m-0 text-center font-heading text-[13px] font-semibold leading-[1.6] tracking-[1.95px] text-black">
                        コラボレーション
                    </p>
                </div>

                <div className="flex w-full flex-col items-center gap-[8px] bg-white pb-[24px] pt-[16px]">
                    <Tag>OA INFORMATION</Tag>

                    <div className="flex w-full flex-col items-center gap-[4px] text-center text-black">
                        <p className="font-jost font-normal tracking-[1.4px]">
                            <span className="text-[28px] leading-[1.7]">2026.11.08 </span>
                            <span className="text-[18px] leading-[1.7]">(sun)</span>
                            <span className="text-[28px] leading-[1.7]"> 23:00～</span>
                        </p>

                        <p className="font-heading text-[20px] font-semibold leading-[1.6] tracking-[1px]">
                            「今こそ選びたい、大人の名品」
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
