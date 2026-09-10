import Tag from "@/components/Tag/tag";
import { addBasePathToPath, cn } from "@/lib/utils";
import { Separator } from "@base-ui/react";
import Image from "next/image";

type InfoSectionGuest = {
    name: string;
    description: string;
    image: string;
    imageAlt?: string;
};

type InfoSectionProps = {
    className?: string;
    date?: string;
    day?: string;
    time?: string;
    guest?: InfoSectionGuest;
};

const defaultGuest: InfoSectionGuest = {
    name: "杉浦編集長",
    description:
        "編集長の説明が入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    image: "/images/info/guest-1.webp",
    imageAlt: "杉浦編集長",
};

export default function InfoSection({
    className,
    date = "2026.11.08",
    day = "(sun)",
    time = "23:00～",
    guest = defaultGuest,
}: InfoSectionProps) {
    return (
        <section
            className={cn(
                "inner flex flex-col items-center gap-6 py-12 md:py-16",
                className,
            )}
        >
            <Separator className="w-full h-px bg-black" />
            <div className="flex w-full flex-col items-center gap-[16px]">
                <Tag>OA INFORMATION</Tag>

                <p className="m-0 text-center font-jost font-normal tracking-[1.4px] text-black">
                    <span className="text-[28px] leading-[1.7]">{date} </span>
                    <span className="text-[18px] leading-[1.7]">{day}</span>
                    <span className="text-[28px] leading-[1.7]"> {time}</span>
                </p>
            </div>

            <Separator className="w-full h-px bg-black" />

            <div className="flex w-full flex-col items-center gap-[16px]">
                <Tag>GUEST</Tag>

                <div className="flex w-full max-w-[360px] items-start gap-[24px]">
                    <div className="relative size-[100px] shrink-0 overflow-hidden rounded-full">
                        <Image
                            src={addBasePathToPath(guest.image)}
                            alt={guest.imageAlt ?? guest.name}
                            fill
                            sizes="100px"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-[12px]">
                        <p className="m-0 font-noto-serif-jp text-[16px] font-bold leading-[1.6] tracking-[0.8px] text-black">
                            {guest.name}
                        </p>

                        <p className="m-0 font-noto-sans-jp text-[14px] font-normal leading-[2] tracking-[1.4px] text-black break-words">
                            {guest.description}
                        </p>
                    </div>
                </div>
            </div>
            <Separator className="w-full h-px bg-black" />

        </section>
    );
}
