"use client";
import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";
import DateTimeDisplay from "./dateTimeDisplay";

function formatDay(day: number): string {
    return day.toString();
}

function formatNumber(n: number): string {
    return n.toString().padStart(2, "0");
}

type CounterProps = {
    targetDate: number;
    className?: string;
};

const Counter = ({ targetDate, className, ...props }: CounterProps) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    const units = [
        { value: formatDay(days), label: "日" },
        { value: formatNumber(hours), label: "時間" },
        { value: formatNumber(minutes), label: "分" },
        { value: formatNumber(seconds), label: "秒" },
    ];

    return (
        <div
            className={cn(
                "relative mx-auto w-full border border-black bg-white px-6 pt-12 pb-14 lg:px-10 lg:pt-14 lg:pb-16 shadow-[0_0px_40px_rgba(51,51,51,0.20)]",
                className,
            )}
            {...props}
        >
            <div className="flex flex-col items-center gap-8 lg:gap-10">
                <p className="text-center font-noto-serif-jp text-[24px] font-bold leading-[1.6] tracking-[2.4px] text-black lg:text-[32px] lg:tracking-[3.2px]">
                    公開まであと
                </p>

                <div className="flex w-fit items-baseline justify-center gap-x-2 gap-y-4 lg:gap-x-4">
                    {units.map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-2 lg:flex-row lg:items-baseline"
                        >
                            <DateTimeDisplay value={value} />
                            <p className="font-noto-serif-jp text-[32px] font-bold leading-[1.4] tracking-[1.92px] text-black lg:text-[49px] lg:tracking-[2.94px]">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;
