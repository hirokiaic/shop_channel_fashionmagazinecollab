import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type NotesProps = {
    children: ReactNode;
    className?: string;
};

const Notes = ({ children, className }: NotesProps) => {
    return (
        <p
            className={cn(
                "m-0 flex w-full items-start gap-1",
                "font-noto-sans-jp text-[11px] font-normal leading-[1.8] tracking-[1.1px] text-black break-words",
                className,
            )}
        >
            <span aria-hidden className="shrink-0 whitespace-nowrap">
                ※
            </span>
            <span className="min-w-0 flex-1">{children}</span>
        </p>
    );
};

export default Notes;
