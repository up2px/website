"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconPlus } from "@tabler/icons-react";
import { Section } from "@/components/frame";
import { blurFade } from "@/lib/animations";
import { faqs } from "./faq-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="pt-8 md:pt-12 border-t border-rule">
      <div className="relative z-10 max-w-2xl flex items-start flex-col gap-4 px-4 md:px-8">
        <motion.h2
          {...blurFade(0)}
          className="font-display text-xl md:text-3xl font-bold tracking-tight text-ink"
        >
          TALK TO US
        </motion.h2>
        <motion.p
          {...blurFade(0.1)}
          className="text-sm text-muted sm:text-base"
        >
          {
            "Have questions? Browse through our FAQs to find the answers you need."
          }
        </motion.p>
      </div>
      <motion.div
        {...blurFade(0.15)}
        className="divide-y divide-rule border-t border-rule bg-ground mt-8"
      >
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="group flex w-full items-center justify-between p-4 sm:p-8 text-left transition-colors hover:bg-rule/15 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 sm:gap-6 pr-4">
                  <span className="font-mono text-xs font-semibold text-accent shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="font-inter text-base sm:text-lg font-medium text-ink transition-colors group-hover:text-accent">
                    {item.q}
                  </span>
                </div>

                <div className="flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-md border border-rule bg-ground text-muted transition-all duration-200 group-hover:border-rule-strong group-hover:text-ink">
                  <IconPlus
                    className={`size-4 transition-transform duration-200 ${
                      isOpen ? "rotate-45 text-accent" : ""
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 pl-14 sm:pl-20 text-sm sm:text-base text-muted leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
}
