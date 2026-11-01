"use client";

import {
  IconArrowRight,
  IconDeviceDesktop,
} from "@tabler/icons-react";
import { Section } from "./frame";
import Link from "next/link";
import { bookingHref } from "@/lib/site-config";
import { motion } from "motion/react";
import { blurFade } from "@/lib/animations";
import { HeroTokens } from "./hero-tokens";

export const HeroSection = () => {
  const { deliverablePill, channelPill } = HeroTokens();

  return (
    <Section id="hero" className="overflow-hidden pt-16 md:pt-32 pb-8 md:pb-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 select-none opacity-40 dark:opacity-30"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-150 rounded-full bg-accent/15 dark:bg-accent/35 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="font-display text-2xl md:text-4xl leading-[0.94] tracking-tight text-ink">
            <motion.span
              className="inline-block"
              {...blurFade(0.06, true)}
            >
              UP TO THE PIXEL.
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-muted"
              {...blurFade(0.16, true)}
            >
              DOWN TO YOUR SCALE.
            </motion.span>
          </h1>
        </div>
        <motion.p
          {...blurFade(0.26, true)}
          className="max-w-2xl text-[17px] leading-relaxed text-muted"
        >
          We design and build bespoke<br className="sm:hidden" />{" "}
          {deliverablePill} for businesses.
          <br className="hidden sm:inline" />{" "}
          Engineered for speed, enriched with tactile micro-interactions, and
          <br className="hidden sm:inline" />{" "}
          built around seamless inquiry flows that connect customers directly
          to your {channelPill}.
        </motion.p>

        <motion.div
          {...blurFade(0.36, true)}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href={bookingHref}
            className="group inline-flex h-12 cursor-pointer items-center justify-center gap-1.5 rounded-md active:scale-98 bg-linear-to-b from-[#FF5E2E] to-accent px-4 py-2 text-base font-semibold tracking-wide text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-inset ring-white/30 transition-all ring-offset-2 ring-offset-accent duration-200 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/50"
          >
            <span>Get in touch</span>
            <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="#work"
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-md border border-rule bg-ground/60 px-4 py-2 text-sm font-medium text-ink backdrop-blur-md transition-all duration-200 hover:border-rule-strong hover:bg-ground/90 sm:w-auto"
          >
            <IconDeviceDesktop className="size-4 text-muted" />
            <span>See our work</span>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};
