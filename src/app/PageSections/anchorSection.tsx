import AnchorLink from "@/components/AnchorLink/anchorLink";
import { cn } from "@/lib/utils";

type AnchorSectionProps = {
    className?: string;
};

export default function AnchorSection({ className }: AnchorSectionProps) {
    return (
        <section
            className={cn(
                "flex flex-col items-center gap-2 border-x border-black bg-background-blush inner pt-16",
                className,
            )}
        >
            <AnchorLink href="#collaboration-01">COLLABORATION ITEM #01</AnchorLink>
            <AnchorLink href="#collaboration-02">COLLABORATION ITEM #02</AnchorLink>
        </section>
    );
}
