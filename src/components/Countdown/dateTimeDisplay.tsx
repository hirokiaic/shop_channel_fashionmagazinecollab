"use client";
import { cn } from "@/lib/utils";

type DateTimeDisplayProps = React.ComponentProps<"div"> & {
    value: string;
    size?: "day" | "time";
    className?: string;
};

const sizeStyles = {
    day: "lg:w-[96px]",
    time: "lg:w-[147px]",
} as const;

const DateTimeDisplay = ({
    value,
    size = "time",
    className,
    ...props
}: DateTimeDisplayProps) => {
    return (
        <div
            className={cn(
                "flex h-14 items-center justify-center bg-navy px-3 font-noto-serif-jp lg:h-[106px] lg:px-6",
                sizeStyles[size],
                className,
            )}
            {...props}
        >
            <p className="text-[39px] font-bold leading-[1.4] tracking-[2.34px] text-white lg:text-[76px] lg:tracking-[4.56px]">
                {value}
            </p>
        </div>
    );
};

export default DateTimeDisplay;
