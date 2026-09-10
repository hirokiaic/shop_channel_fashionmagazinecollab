import { cn } from "@/lib/utils";

type IconSvgProps = {
    iconSrc: string;
    iconW: string;
    iconH: string;
    alt?: string;
    className?: string;
};

const IconSvg = ({ iconSrc, iconW, iconH, alt = "", className, ...props }: IconSvgProps) => {
    return (
        <span
            role="img"
            aria-hidden="true"
            className={cn(
                "inline-block bg-black mask-no-repeat mask-center mask-contain",
                className
            )}
            style={{
                maskImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${iconSrc})`,
                WebkitMaskImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${iconSrc})`,
                width: `${iconW}px`,
                height: `${iconH}px`,
            }}
            {...props}
        />
    );
};

export default IconSvg;
