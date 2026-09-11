"use client";

import IconSvg from "@/components/iconSvg";
import { addBasePathToPath, cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

const sizeStyles = {
    default: {
        trigger: "w-[47%] md:max-w-[170px]",
        aspect: "aspect-square",
        gradient: "h-[40px]",
        imageSizes: "170px",
        modalImage: "max-w-[380px] aspect-square",
        modalImageSizes: "380px",
    },
    compact: {
        trigger: "md:max-w-[140px]",
        aspect: "aspect-square",
        gradient: "h-[40px]",
        imageSizes: "140px",
        modalImage: "max-w-[380px] aspect-square",
        modalImageSizes: "380px",
    },
    portrait: {
        trigger: "w-[58%] md:max-w-[214px]",
        aspect: "aspect-[214/302]",
        gradient: "h-[48px]",
        imageSizes: "214px",
        modalImage: "max-w-[380px] aspect-[214/302]",
        modalImageSizes: "380px",
    },
    card: {
        trigger: "",
        aspect: "aspect-[160/226]",
        gradient: "h-[40px]",
        imageSizes: "160px",
        modalImage: "max-w-[380px] aspect-[160/226]",
        modalImageSizes: "380px",
    },
} as const;

type ModalImageProps = {
    src: string;
    alt?: string;
    size?: keyof typeof sizeStyles;
    className?: string;
};

const ModalImage = ({
    src,
    alt = "",
    size = "default",
    className,
}: ModalImageProps) => {
    const styles = sizeStyles[size];
    const [open, setOpen] = useState(false);
    const imageSrc = addBasePathToPath(src);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const dialog = open
        ? createPortal(
                  <div
                      className="fixed inset-0 z-[200] flex items-center justify-center p-5"
                      role="presentation"
                  >
                      <button
                          type="button"
                          aria-label="閉じる"
                          className="absolute inset-0 bg-black/60"
                          onClick={() => setOpen(false)}
                      />

                      <div
                          role="dialog"
                          aria-modal="true"
                          className="relative z-10 w-full max-w-[420px] bg-white px-5 pb-10 pt-4"
                          onClick={(event) => event.stopPropagation()}
                      >
                          <div className="flex justify-end">
                              <button
                                  type="button"
                                  aria-label="閉じる"
                                  className="flex size-10 shrink-0 cursor-pointer items-center justify-center"
                                  onClick={() => setOpen(false)}
                              >
                                  <IconSvg
                                      iconSrc="/images/icon-close.svg"
                                      iconW="40"
                                      iconH="40"
                                      className="bg-black"
                                  />
                              </button>
                          </div>

                          <div
                              className={cn(
                                  "relative mx-auto w-full mt-3",
                                  styles.modalImage,
                              )}
                          >
                              <Image
                                  src={imageSrc}
                                  alt={alt}
                                  sizes={styles.modalImageSizes}
                                  className="object-cover"
                                  width={1920}
                                  height={1920}
                              />
                          </div>
                      </div>
                  </div>,
                  document.body,
              )
            : null;

    return (
        <>
            <button
                type="button"
                aria-label="写真を拡大"
                className={cn(
                    "group relative block w-full cursor-pointer overflow-hidden",
                    styles.trigger,
                    className,
                )}
                onClick={() => setOpen(true)}
            >
                <span
                    className={cn(
                        "relative block w-full bg-[#d9d9d9]",
                        styles.aspect,
                    )}
                >
                    <Image
                        src={imageSrc}
                        alt={alt}
                        width={1920}
                        height={1920}
                        sizes={styles.imageSizes}
                        className="object-cover"
                    />
                </span>

                <span
                    aria-hidden
                    className={cn(
                        "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black/40",
                        styles.gradient,
                    )}
                />

                <span
                    aria-hidden
                    className="pointer-events-none absolute right-1 bottom-1 flex size-[32px] items-center justify-center"
                >
                    <span className="relative flex size-5 items-center justify-center">
                        <span className="absolute inset-0 rounded-full border border-white" />
                        <span className="absolute top-1/2 left-1/2 h-2.5 w-px -translate-x-1/2 -translate-y-1/2 bg-white" />
                        <span className="absolute top-1/2 left-1/2 h-px w-2.5 -translate-x-1/2 -translate-y-1/2 bg-white" />
                    </span>
                </span>
            </button>

            {dialog}
        </>
    );
};

export default ModalImage;
