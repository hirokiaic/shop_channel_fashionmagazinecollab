import IconSvg from "@/components/iconSvg";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const variantStyles = {
    default: {
        button:
            "h-[48px] w-full max-w-[392px] text-[18px] tracking-[0.9px]",
        icon: "left-[24px] top-[12px]",
    },
    small: {
        button:
            "h-[40px] w-full max-w-[140px] text-[16px] tracking-[0.8px]",
        icon: "left-[8px] top-[8px]",
    },
    back: {
        button:
            "h-[56px] w-full max-w-none font-noto-sans-jp text-[16px] font-medium leading-[1.8] tracking-[1.6px]",
        icon: "left-[24px] top-1/2 -translate-y-1/2",
    },
} as const;

const iconStyles = {
    default: {
        iconSrc: "/images/icon-cart.svg",
        iconW: "24",
        iconH: "24",
        className: "bg-white",
    },
    small: {
        iconSrc: "/images/icon-cart.svg",
        iconW: "24",
        iconH: "24",
        className: "bg-white",
    },
    back: {
        iconSrc: "/images/icon-arrow.svg",
        iconW: "14",
        iconH: "8",
        className: "bg-white rotate-90",
    },
} as const;

type ButtonBaseProps = {
    children?: ReactNode;
    variant?: keyof typeof variantStyles;
    className?: string;
    isExtLink?: boolean;
};

type ButtonAsButtonProps = ButtonBaseProps &
    Omit<React.ComponentPropsWithoutRef<"button">, "children"> & {
        href?: undefined;
    };

type ButtonAsLinkProps = ButtonBaseProps &
    Omit<React.ComponentPropsWithoutRef<"a">, "children"> & {
        href: string;
    };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const buttonClassName =
    "relative isolate flex cursor-pointer items-center justify-center rounded-[4px] bg-navy font-jost font-medium leading-[1.7] text-white no-underline outline-none transition-colors duration-300 ease-out hover:bg-navy-hover focus:outline-none focus-visible:outline-none";

const ButtonContent = ({
    children,
    variant,
}: {
    children: ReactNode;
    variant: keyof typeof variantStyles;
}) => {
    const icon = iconStyles[variant];

    return (
        <>
            <span
                className={cn(
                    "pointer-events-none absolute flex size-[24px] items-center justify-center",
                    variantStyles[variant].icon,
                )}
            >
                <IconSvg
                    iconSrc={icon.iconSrc}
                    iconW={icon.iconW}
                    iconH={icon.iconH}
                    className={icon.className}
                />
            </span>
            <span className="relative z-[1] shrink-0 whitespace-nowrap">
                {children}
            </span>
        </>
    );
};

const Button = ({
    children = "BUY",
    variant = "default",
    className,
    href,
    isExtLink = false,
    ...props
}: ButtonProps) => {
    const sharedClassName = cn(
        buttonClassName,
        variantStyles[variant].button,
        className,
    );

    if (href) {
        const anchorProps = props as Omit<
            ButtonAsLinkProps,
            keyof ButtonBaseProps | "href"
        >;

        return (
            <a
                href={href}
                className={sharedClassName}
                target={isExtLink ? "_blank" : undefined}
                rel={isExtLink ? "noopener noreferrer" : undefined}
                {...anchorProps}
            >
                <ButtonContent variant={variant}>{children}</ButtonContent>
            </a>
        );
    }

    const buttonProps = props as Omit<
        ButtonAsButtonProps,
        keyof ButtonBaseProps | "href"
    >;

    return (
        <button type="button" className={sharedClassName} {...buttonProps}>
            <ButtonContent variant={variant}>{children}</ButtonContent>
        </button>
    );
};

export default Button;
