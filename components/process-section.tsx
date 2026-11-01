"use client";

import { useState } from "react";
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandStripe,
  IconBrandTailwind,
  IconBrandVercel,
  IconBrandWhatsapp,
  IconPaperclip,
  IconArrowUp,
  IconArrowDown,
  IconGitCommit,
  IconCheck,
} from "@tabler/icons-react";
import { Section } from "./frame";
import { motion } from "motion/react";
import { blurFade } from "@/lib/animations";
import { processSteps } from "./process-data";

export const ProcessSection = () => {
  const [feedback, setFeedback] = useState(
    "Scale hero headline & add one-tap WhatsApp checkout"
  );
  const [isSent, setIsSent] = useState(false);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 2500);
  };

  const [isDeploying, setIsDeploying] = useState(false);
  const [deployTime, setDeployTime] = useState("1.2s");

  const triggerDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setTimeout(() => {
      setDeployTime((Math.random() * 0.4 + 1.0).toFixed(1) + "s");
      setIsDeploying(false);
    }, 600);
  };

  return (
    <Section
      id="process"
      className="flex flex-col items-center pt-8 md:pt-12 pb-8 md:pb-12 border-t border-rule"
    >
      <div className="flex w-full max-w-frame flex-col items-start gap-6 px-4 md:px-8">
        <motion.p
          {...blurFade(0)}
          className="max-w-xl font-display text-xl font-medium sm:text-3xl text-ink"
        >
          <span className="transition-colors duration-300 text-muted">
            Share your vision & assets
            <sup className="relative -top-2.5 text-sm font-bold tracking-wide transition-colors duration-300 inline tabular-nums lining-nums text-muted">
              {" "}
              01
            </sup>
          </span>
          <span className="transition-colors duration-300 text-muted">
            <br />
            Review the bespoke prototype
            <sup className="relative -top-2.5 text-xs font-bold tracking-wide transition-colors duration-300 inline tabular-nums lining-nums text-muted">
              {" "}
              02
            </sup>
          </span>
          <span className="transition-colors duration-300 text-ink">
            <br />
            Launch your website
            <sup className="relative -top-2.5 text-xs font-bold tracking-wide transition-colors duration-300 inline tabular-nums lining-nums text-accent">
              {" "}
              03
            </sup>
          </span>
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-12 md:gap-6 md:grid-cols-3">
          <motion.div {...blurFade(0.1)} className="flex flex-col gap-2 md:gap-6">
            <div className="relative w-full">
              <div className="relative flex h-72 w-full flex-col overflow-hidden rounded-xl border border-rule bg-ground/85 p-5 shadow-sm transition-colors duration-300 hover:border-rule-strong">
                <div className="flex items-center gap-1.5 border-b border-rule/50 pb-3">
                  <div className="size-2 rounded-full bg-rule-strong" />
                  <div className="size-2 rounded-full bg-rule-strong" />
                  <div className="size-2 rounded-full bg-rule-strong" />
                  <span className="ml-2 font-mono text-[10px] text-muted">
                    tools/ecosystem
                  </span>
                </div>
                <div className="flex flex-1 flex-wrap content-center items-center justify-center gap-x-8 gap-y-6 pt-2">
                  <div className="shrink-0 transition-transform duration-300 hover:scale-110">
                    <IconBrandFigma className="size-6" />
                  </div>
                  <div className="shrink-0 transition-transform duration-300 hover:scale-110">
                    <IconBrandNextjs className="size-6" />
                  </div>
                  <div className="shrink-0 transition-transform duration-300 hover:scale-110">
                    <IconBrandReact className="size-6" />
                  </div>
                  <div className="shrink-0 transition-transform duration-300 hover:scale-110">
                    <IconBrandTailwind className="size-6 text-[#38BDF8]" />
                  </div>
                  <div className="shrink-0 transition-transform duration-300 hover:scale-110">
                    <IconBrandWhatsapp className="size-6 text-emerald-500" />
                  </div>
                  <div className="shrink-0 transition-transform duration-300 hover:scale-110">
                    <IconBrandGithub className="size-6" />
                  </div>
                  <div className="shrink-0 transition-transform duration-300 hover:scale-110">
                    <IconBrandVercel className="size-6" />
                  </div>
                  <div className="shrink-0 transition-transform duration-300 hover:scale-110">
                    <IconBrandStripe className="size-6 text-[#635BFF]" />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-2 -bottom-2 h-20 bg-linear-to-t from-ground from-20% to-transparent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tabular-nums lining-nums text-muted">
                {processSteps[0].step}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-medium tracking-[-0.02em] text-ink">
                  {processSteps[0].title}
                </p>
                <div className="my-1.5 h-px w-10 bg-rule" />
                <p className="text-sm leading-relaxed text-muted">
                  {processSteps[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...blurFade(0.2)} className="flex flex-col gap-2 md:gap-6">
            <div className="relative w-full">
              <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-xl border border-rule bg-ground/85 p-5 shadow-sm transition-colors duration-300 hover:border-rule-strong">
                <form
                  onSubmit={handleSendFeedback}
                  className="relative w-full max-w-sm rounded-xl border border-rule bg-ground/95 p-3.5 shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.08)] transition-all hover:border-rule-strong focus-within:border-accent/60 focus-within:ring-1 focus-within:ring-accent/20"
                >
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Ask questions or request revisions..."
                    rows={2}
                    className="w-full resize-none border-0 bg-transparent p-0 font-inter text-xs sm:text-sm text-ink placeholder:text-muted/60 focus:outline-none"
                  />
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      className="flex size-7 items-center justify-center rounded-lg text-muted hover:bg-rule/40 hover:text-ink transition cursor-pointer"
                      title="Attach assets"
                    >
                      <IconPaperclip className="size-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {isSent && (
                        <span className="font-mono text-[10px] text-emerald-400 font-semibold inline-flex items-center gap-1">
                          <IconCheck className="size-3" />
                          Sent &lt; 24h
                        </span>
                      )}
                      <button
                        type="submit"
                        className={`flex size-7 items-center justify-center rounded-lg transition-all active:scale-95 cursor-pointer shadow-xs ${
                          isSent
                            ? "bg-emerald-500 text-white"
                            : "bg-ink text-ground hover:bg-accent hover:text-white"
                        }`}
                        title="Send revision"
                      >
                        <IconArrowUp className="size-4" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-2 -bottom-2 h-20 bg-linear-to-t from-ground from-20% to-transparent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tabular-nums lining-nums text-muted">
                {processSteps[1].step}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-medium tracking-[-0.02em] text-ink">
                  {processSteps[1].title}
                </p>
                <div className="my-1.5 h-px w-10 bg-rule" />
                <p className="text-sm leading-relaxed text-muted">
                  {processSteps[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...blurFade(0.3)} className="flex flex-col gap-2 md:gap-6">
            <div className="relative w-full">
              <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-rule bg-ground/85 p-5 shadow-sm transition-colors duration-300 hover:border-rule-strong">
                <div
                  onClick={triggerDeploy}
                  className="flex flex-col items-center justify-center gap-2 cursor-pointer select-none group/pipeline"
                  title="Click to trigger pipeline test"
                >
                  <div className="flex items-center gap-2 rounded-xl border border-rule bg-ground/90 px-3.5 py-2 font-mono text-xs sm:text-sm font-semibold text-ink shadow-xs transition-all group-hover/pipeline:border-rule-strong group-hover/pipeline:shadow-sm">
                    <IconGitCommit className="size-4 text-muted" />
                    <span>git push</span>
                  </div>

                  <div className="relative flex flex-col items-center my-0.5">
                    <div className="relative h-6 w-0.5 bg-rule overflow-hidden">
                      <div
                        className={`absolute inset-0 h-full w-full bg-linear-to-b from-transparent via-accent to-transparent ${
                          isDeploying ? "animate-pulse" : "animate-pulse"
                        }`}
                      />
                    </div>
                    <IconArrowDown className="size-4 text-accent -mt-1 shrink-0" />
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-rule bg-ground/90 px-3.5 py-2 font-mono text-xs sm:text-sm font-semibold text-ink shadow-xs transition-all group-hover/pipeline:border-rule-strong group-hover/pipeline:shadow-sm">
                    <span
                      className={`size-2 rounded-full ${
                        isDeploying
                          ? "bg-amber-400 animate-ping"
                          : "bg-emerald-400 animate-pulse"
                      }`}
                    />
                    <span>Production</span>
                    <IconBrandVercel className="size-3.5 text-ink ml-0.5" />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px] text-muted">
                  <span className="text-emerald-400 font-semibold">
                    {isDeploying ? "Deploying..." : `Ready in ${deployTime}`}
                  </span>
                  <span className="text-rule-strong">·</span>
                  <span>Sub-second TTFB</span>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-2 -bottom-2 h-20 bg-linear-to-t from-ground from-20% to-transparent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tabular-nums lining-nums text-accent font-bold">
                {processSteps[2].step}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-medium tracking-[-0.02em] text-ink">
                  {processSteps[2].title}
                </p>
                <div className="my-1.5 h-px w-10 bg-rule" />
                <p className="text-sm leading-relaxed text-muted">
                  {processSteps[2].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
