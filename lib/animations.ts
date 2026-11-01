import type { Variants } from "motion/react";

export const blurFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function blurFade(delay: number = 0, immediate: boolean = false) {
  return {
    variants: blurFadeVariants,
    initial: "hidden" as const,
    ...(immediate
      ? { animate: "visible" as const }
      : { whileInView: "visible" as const, viewport: { once: true } }),
    custom: delay,
  };
}
