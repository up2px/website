import Link from "next/link";
import { bookingHref } from "@/lib/site-config";
import { navLinks } from "./links-data";
import { ArrowRight } from "./pixel-icons";
import { RectangleLogo } from "./brand/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 w-full bg-ground/50 backdrop-blur-md pt-1">
      <div className="relative mx-auto flex h-full max-w-frame w-full items-center gap-2 border-x border-rule px-3 sm:gap-4">
        {/* Top full-width rule line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-px left-1/2 h-px w-screen -translate-x-1/2 bg-rule"
        />
        {/* Bottom full-width rule line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-1/2 h-px w-screen -translate-x-1/2 bg-rule"
        />

        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="up2px home"
          className="flex shrink-0 items-center select-none"
        >
          <RectangleLogo
            className="h-8 w-auto md:h-10 md:w-40"
            variant="light"
          />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Nav Links */}
        <nav aria-label="Primary" className="hidden items-center gap-4 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-wide text-muted uppercase transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 4. Actions Group (Divider, Toggle, CTA) */}
        <div className="flex items-center gap-2">
          {/* Primary Action Button */}
          <Link
            href={bookingHref}
            className="h-8 group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md active:scale-98 bg-linear-to-b from-[#FF5E2E] to-accent px-4 py-2 text-base font-semibold tracking-wide text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-inset ring-white/30 transition-all ring-offset-2 ring-offset-accent duration-200 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/50"
          >
            <span>Book a call</span>
            <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
