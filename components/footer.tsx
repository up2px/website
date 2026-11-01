"use client";

import Link from "next/link";
import { RectangleLogo } from "./brand/logo";
import { IconCopyright } from "@tabler/icons-react";
import { Rule } from "./frame";
import { motion } from "motion/react";
import { blurFade } from "@/lib/animations";
import { navLinks, socialLinks } from "./links-data";

export function Footer() {
  return (
    <footer>
      <div aria-hidden className="relative h-px">
        <Rule />
      </div>
      <motion.div
        {...blurFade(0)}
        className="flex flex-col gap-6 md:flex-row md:justify-between px-4 md:px-8 py-4 m:py-8"
      >
        <div className="flex flex-col items-start bg-ground lg:col-span-4">
          <div className="flex justify-start">
            <RectangleLogo className="h-10 sm:h-12 w-auto" />
          </div>

          <p className="mt-3 text-sm font-medium text-muted">
            Up to the pixel. Down to your scale.
          </p>
          <div className="flex gap-3 mt-3 items-center">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent-text"
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 pr-4 lg:col-span-6">
          <span className="font-inter text-[11px] font-semibold text-faint uppercase tracking-wider">
            Company
          </span>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-inter text-xs text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...blurFade(0.1)}
        className="flex flex-wrap items-center justify-between p-4 md:p-8 text-[11px]"
      >
        <div className="flex items-center gap-1 text-muted">
          <IconCopyright className="size-3" />
          2026 up2px
        </div>
        <Link
          href="mailto:hello@up2px.dev"
          className="font-inter text-xs text-muted transition-all hover:text-accent-text"
        >
          contact@up2px.com
        </Link>
      </motion.div>

      <div aria-hidden className="relative h-px">
        <Rule />
      </div>
    </footer>
  );
}
