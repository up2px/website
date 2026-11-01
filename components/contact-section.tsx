"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { IconArrowRight, IconCheck, IconLoader2 } from "@tabler/icons-react";
import { Section } from "./frame";
import { blurFade } from "@/lib/animations";
import { projectTypes } from "./contact-data";
import { sendContactToDiscord } from "@/app/actions/discord";

export function ContactSection() {
  const [projectType, setProjectType] = useState("Single Landing Page");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    query: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const res = await sendContactToDiscord({
      name: formData.name,
      email: formData.email,
      product: formData.product,
      projectType,
      query: formData.query,
    });

    if (res.success) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", product: "", query: "" });
    } else {
      setErrorMessage(
        res.error ||
          "Failed to send your message. Please try again or reach out directly on WhatsApp.",
      );
    }
    setIsSubmitting(false);
  };

  return (
    <Section
      id="contact"
      className="border-t border-rule px-4 md:px-8 pt-8 md:pt-12 pb-8 md:pb-12"
    >
      <div className="relative z-10 w-full flex items-center flex-col gap-4">
        <motion.h2
          {...blurFade(0)}
          className="font-display text-xl md:text-3xl font-bold tracking-tight text-ink"
        >
          {"LET'S GET YOUR SITE SHIPPED."}
        </motion.h2>
        <motion.p
          {...blurFade(0.1)}
          className="text-sm text-muted sm:text-base text-center max-w-2xl"
        >
          {
            "Tell us about your product or idea. We will review your goals, discuss your timeline, and get back to you with a direct proposal."
          }
        </motion.p>
      </div>
      <motion.div
        {...blurFade(0.15)}
        className="flex flex-col mt-8 max-w-3xl mx-auto"
      >
        {isSubmitted ? (
          <>
            <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
              <IconCheck className="size-6" />
            </div>
            <h3 className="font-inter text-2xl font-bold text-ink">
              Message received
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted leading-relaxed">
              Thanks for reaching out! We will review your details and send you
              a breakdown within 2 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setErrorMessage(null);
                setFormData({ name: "", email: "", product: "", query: "" });
              }}
              className="mt-6 rounded-md border border-rule px-4 py-2 font-inter text-xs text-muted hover:text-ink hover:border-rule-strong transition cursor-pointer"
            >
              Send another message
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block font-inter text-xs font-medium uppercase tracking-wider text-muted mb-2">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Steve Jobs"
                  className="w-full rounded-md border border-rule bg-ground px-3.5 py-2.5 font-inter text-sm text-ink placeholder:text-muted/50 shadow-xs outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30"
                />
              </div>

              <div>
                <label className="block font-inter text-xs font-medium uppercase tracking-wider text-muted mb-2">
                  Work Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="steve@apple.com"
                  className="w-full rounded-md border border-rule bg-ground px-3.5 py-2.5 font-inter text-sm text-ink placeholder:text-muted/50 shadow-xs outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30"
                />
              </div>
            </div>

            <div>
              <label className="block font-inter text-xs font-medium uppercase tracking-wider text-muted mb-2">
                Product / Current Website
              </label>
              <input
                type="text"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
                placeholder="Product name or current URL (e.g. acme.dev)"
                className="w-full rounded-md border border-rule bg-ground px-3.5 py-2.5 font-inter text-sm text-ink placeholder:text-muted/50 shadow-xs outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30"
              />
            </div>

            <div>
              <label className="block font-inter text-xs font-medium uppercase tracking-wider text-muted mb-2">
                What are you looking to build?
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`rounded-md border px-3 py-1.5 font-inter text-xs transition-all cursor-pointer active:scale-95 ${
                      projectType === type
                        ? "border-accent bg-accent/10 font-semibold text-accent shadow-xs"
                        : "border-rule bg-ground text-muted hover:border-rule-strong hover:text-ink"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-inter text-xs font-medium uppercase tracking-wider text-muted mb-2">
                Tell us about your project
              </label>
              <textarea
                required
                rows={4}
                value={formData.query}
                onChange={(e) =>
                  setFormData({ ...formData, query: e.target.value })
                }
                placeholder="What are your goals, reference sites you love, or timeline?"
                className="w-full rounded-md border border-rule bg-ground px-3.5 py-2.5 font-inter text-sm text-ink placeholder:text-muted/50 shadow-xs outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 resize-none"
              />
            </div>

            {errorMessage && (
              <div className="rounded-md border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 font-inter text-xs font-medium text-red-500">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group inline-flex cursor-pointer items-center justify-center gap-2 rounded-md active:scale-98 bg-linear-to-b from-[#FF5E2E] to-accent px-4 py-3 text-base font-semibold tracking-wide text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-inset ring-white/30 transition-all ring-offset-2 ring-offset-accent duration-200 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/50 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <IconLoader2 className="size-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <IconArrowRight className="size-4" />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </Section>
  );
}
