"use client";

import { motion } from "motion/react";
import { blurFade } from "@/lib/animations";

export function Wordmark() {
  return (
    <div className="relative flex w-full select-none justify-center overflow-y-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 z-0 h-28 w-full bg-accent/5 blur-[96px] dark:bg-accent/8"
      />
      <motion.div
        {...blurFade(0)}
        className="flex justify-center items-center font-bold tracking-tighter leading-none max-w-frame w-full border-x border-rule"
        style={{
          fontSize: "clamp(6rem, 18vw, 24rem)",
          letterSpacing: "0em",
        }}
      >
        <div
          className="bg-linear-to-b from-ink/25 via-ink/15 via-65% to-accent/15 bg-clip-text text-transparent dark:from-white/20 dark:via-white/10 dark:via-65% dark:to-accent/10"
          style={{
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))",
          }}
        >
          up2px
        </div>
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-accent/10 to-transparent"
      />
    </div>
  );
}
