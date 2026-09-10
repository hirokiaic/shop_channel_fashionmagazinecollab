import Counter from "@/components/Countdown/counter";
import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";

type CountdownSectionProps = {
    targetDate: Date;
    setIsExpired: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
};

const CountdownSection = ({
    targetDate,
    className,
    ...props
}: CountdownSectionProps) => {
    const targetInMs = targetDate.getTime();

    return (
        <section
            className={cn(
                "fixed inset-0 z-[1000] overflow-hidden bg-background-warm",
                className,
            )}
            {...props}
        >
            <div className="relative z-10 flex min-h-full w-full flex-col items-center justify-center px-5 py-10">
                <div className="flex w-full max-w-[1080px] flex-col items-center">
                    <div className="flex w-full max-w-[593px] flex-col items-center">
                        <Image
                            src={addBasePathToPath("/images/eclat-shop-channel-logo.svg")}
                            alt="éclat × SHOP CHANNEL"
                            width={593}
                            height={100}
                            priority
                            className="h-auto w-full max-w-[593px]"
                        />

                        <div className="relative z-[1] -mt-2 flex w-full max-w-[381px] items-center justify-center">
                            <Image
                                src={addBasePathToPath("/images/collaboration-logo.svg")}
                                alt="Collaboration"
                                width={381}
                                height={98}
                                className="h-auto w-full max-w-[381px]"
                            />
                        </div>
                    </div>

                    <Counter
                        targetDate={targetInMs}
                        className="-mt-4 w-full max-w-[1080px] lg:-mt-6"
                    />
                </div>
            </div>
        </section>
    );
};

export default CountdownSection;
