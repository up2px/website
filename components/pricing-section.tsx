"use client";

import Link from "next/link";
import { bookingHref } from "@/lib/site-config";
import { Section } from "./frame";
import { IconCheck } from "@tabler/icons-react";
import { motion } from "motion/react";
import { blurFade } from "@/lib/animations";
import { singlePagePlan, multiplePagesPlan } from "./pricing-data";

export function PricingSection() {
  return (
    <Section
      id="pricing"
      className="relative w-full pt-8 md:pt-12 pb-8 md:pb-12 border-t border-rule px-4 md:px-8"
    >
      <motion.h2
        {...blurFade(0)}
        className="max-w-xl font-display text-xl font-bold tracking-tight text-balance text-ink md:text-2xl"
      >
        Bespoke web builds, priced{" "}
        <span className="bg-accent px-1.5 py-0.5 text-white">affordably</span>.
      </motion.h2>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch mt-8 max-w-5xl">
        <motion.div
          {...blurFade(0.1)}
          className="flex flex-col justify-between rounded-md border border-rule bg-ground/60 p-4 sm:p-5 shadow-sm transition-all hover:border-rule-strong"
        >
          <div>
            <div className="rounded-md border border-rule/50 bg-ground/80 p-6 sm:p-7 mb-6">
              <h3 className="font-inter text-xl font-bold text-ink">
                {singlePagePlan.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {singlePagePlan.description}
              </p>
            </div>

            <div className="px-2 sm:px-3">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-inter text-4xl sm:text-5xl font-bold text-ink tracking-tight">
                  <span className="text-xl sm:text-2xl font-normal text-muted mr-1">
                    ₹
                  </span>
                  {singlePagePlan.price}
                </span>
                <span className="font-inter text-xs text-muted">
                  {singlePagePlan.period}
                </span>
              </div>

              <Link
                href={bookingHref}
                className="w-full group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md active:scale-98 bg-linear-to-b from-[#FF5E2E] to-accent px-4 py-2.5 text-base font-semibold tracking-wide text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-inset ring-white/30 transition-all ring-offset-2 ring-offset-accent duration-200 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/50"
              >
                {singlePagePlan.ctaText}
              </Link>

              <svg
                fill="none"
                height="2"
                viewBox="0 0 280 2"
                width="280"
                xmlns="http://www.w3.org/2000/svg"
                className="my-7 w-full text-rule"
              >
                <line
                  stroke="currentColor"
                  strokeDasharray="2 6"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  x1="0.75"
                  x2="279.25"
                  y1="1.25"
                  y2="1.25"
                />
              </svg>

              <div className="font-inter text-xs font-semibold uppercase tracking-wider text-muted mb-4">
                {singlePagePlan.includesTitle}
              </div>

              <ul className="flex flex-col gap-3.5 text-sm text-muted">
                {singlePagePlan.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <IconCheck className="size-4.5 shrink-0 text-accent mt-0.5" />
                    <span className="leading-snug">
                      {item.prefix && <>{item.prefix} </>}
                      {item.highlight && (
                        <strong className="font-semibold text-ink">
                          {item.highlight}
                        </strong>
                      )}
                      {item.suffix && <> {item.suffix}</>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...blurFade(0.2)}
          className="relative flex flex-col justify-between rounded-md bg-linear-to-b from-[#FF5E2E] to-accent p-4 sm:p-5 text-white shadow-xl shadow-accent/15 overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 h-full w-full bg-[repeating-linear-gradient(315deg,white_0,white_1px,transparent_0,transparent_50%)] bg-size-[6px_6px]" />
          </div>

          <div className="relative z-10">
            <div className="rounded-md border border-white/20 bg-white/10 p-6 sm:p-7 mb-6 backdrop-blur-xs">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-inter text-xl font-bold text-white">
                  {multiplePagesPlan.title}
                </h3>
                {multiplePagesPlan.badge && (
                  <span className="shrink-0 rounded-md bg-white/20 px-2.5 py-0.5 font-inter text-[11px] font-semibold text-white ring-1 ring-white/30">
                    {multiplePagesPlan.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-white/90 leading-relaxed">
                {multiplePagesPlan.description}
              </p>
            </div>

            <div className="px-2 sm:px-3">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-inter text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <span className="text-xl sm:text-2xl font-normal text-white/80 mr-1">
                    ₹
                  </span>
                  {multiplePagesPlan.price}
                </span>
                <span className="font-inter text-xs text-white/80">
                  {multiplePagesPlan.period}
                </span>
              </div>

              <Link
                href={bookingHref}
                className="w-full group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md active:scale-98 bg-white px-4 py-2.5 text-base font-semibold tracking-wide text-accent shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-inset ring-white/30 transition-all duration-200 hover:bg-white/95 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset]"
              >
                {multiplePagesPlan.ctaText}
              </Link>

              <svg
                fill="none"
                height="2"
                viewBox="0 0 280 2"
                width="280"
                xmlns="http://www.w3.org/2000/svg"
                className="my-7 w-full text-white/25"
              >
                <line
                  stroke="currentColor"
                  strokeDasharray="2 6"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  x1="0.75"
                  x2="279.25"
                  y1="1.25"
                  y2="1.25"
                />
              </svg>

              <div className="font-inter text-xs font-semibold uppercase tracking-wider text-white/85 mb-4">
                {multiplePagesPlan.includesTitle}
              </div>

              <ul className="flex flex-col gap-3.5 text-sm text-white/95">
                {multiplePagesPlan.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <IconCheck className="size-4.5 shrink-0 text-white mt-0.5" />
                    <span className="leading-snug">
                      {item.prefix && <>{item.prefix} </>}
                      {item.badge && (
                        <span className="rounded-md bg-white/20 px-1.5 py-0.5 text-xs font-medium text-white">
                          {item.badge}
                        </span>
                      )}
                      {item.highlight && (
                        <strong className="font-semibold text-white">
                          {item.highlight}
                        </strong>
                      )}
                      {item.suffix && <> {item.suffix}</>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
