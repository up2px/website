"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { RectangleLogo, SquareLogo } from "@/components/brand/logo";
import {
  IconArrowLeft,
  IconBrandWhatsapp,
  IconCheck,
  IconCopy,
  IconDownload,
  IconSparkles,
} from "@tabler/icons-react";

export default function PreviewOgPage() {
  const [scale, setScale] = useState<number>(0.75);
  const [copiedInstruction, setCopiedInstruction] = useState(false);
  const [downloadingFavicon, setDownloadingFavicon] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      const containerWidth = window.innerWidth - 64;
      if (containerWidth < 1250) {
        setScale(Math.max(0.35, Math.min(1, containerWidth / 1250)));
      } else {
        setScale(0.85);
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const copyScreenshotInstructions = () => {
    navigator.clipboard.writeText("Capture node screenshot");
    setCopiedInstruction(true);
    setTimeout(() => setCopiedInstruction(false), 2500);
  };

  const downloadFaviconPng = (size: number, filename: string) => {
    setDownloadingFavicon(true);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }
          setDownloadingFavicon(false);
        }, "image/png");
      }
    };
    img.src = "/square-logo.svg";
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#0A0A0A] selection:bg-[#FF3B00] selection:text-white font-inter pb-24">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 border-b border-[#E5E5DF] bg-white/90 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#56564F] hover:text-[#0A0A0A] transition-colors"
            >
              <IconArrowLeft className="size-4" />
              <span>Back to site</span>
            </Link>
            <div className="h-4 w-px bg-[#E5E5DF]" />
            <h1 className="text-sm font-semibold tracking-wide text-[#0A0A0A]">
              up2px Asset Studio (Light Mode)
            </h1>
          </div>

          {/* Scale controls */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#56564F]">Zoom:</span>
            {[0.5, 0.75, 0.85, 1].map((s) => (
              <button
                key={s}
                onClick={() => setScale(s)}
                className={`px-2 py-1 text-xs rounded transition-all cursor-pointer ${
                  scale === s
                    ? "bg-[#0A0A0A] text-white font-semibold"
                    : "bg-[#F0F0EC] text-[#56564F] hover:bg-[#E5E5DF]"
                }`}
              >
                {Math.round(s * 100)}%
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 pt-8 space-y-12">
        {/* Step Guide / Toolbar */}
        <section className="rounded-xl border border-[#E5E5DF] bg-white p-6 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#FF3B00]/10 border border-[#FF3B00]/20 text-xs font-semibold text-[#FF3B00] mb-2">
                <IconSparkles className="size-3.5" />
                Pixel-Perfect 1200 × 630 OpenGraph Image
              </div>
              <h2 className="text-lg font-bold text-[#0A0A0A]">
                How to capture the 1200×630 screenshot in 5 seconds
              </h2>
              <p className="text-xs text-[#56564F] mt-1 max-w-2xl leading-relaxed">
                Right-click the card below → choose <b>Inspect</b> → press{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-[#F0F0EC] border border-[#E5E5DF] text-[#0A0A0A] font-mono text-[11px]">
                  Ctrl + Shift + P
                </kbd>{" "}
                → type{" "}
                <code className="text-[#FF3B00] font-mono">
                  Capture node screenshot
                </code>
                . Chrome/Edge will export an exact 1200×630 PNG.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={copyScreenshotInstructions}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A0A0A] hover:bg-[#242424] text-xs font-semibold text-white transition-all cursor-pointer shadow-xs"
              >
                {copiedInstruction ? (
                  <>
                    <IconCheck className="size-4 text-emerald-400" />
                    <span className="text-emerald-400">Command copied!</span>
                  </>
                ) : (
                  <>
                    <IconCopy className="size-4 text-white/80" />
                    <span>Copy &quot;Capture node screenshot&quot;</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* The 1200x630 Card Canvas Frame */}
        <section className="flex flex-col items-center">
          <div className="mb-3 flex items-center justify-between w-full max-w-[1200px] text-xs text-[#56564F] font-mono">
            <span>#og-card [1200px × 630px]</span>
            <span>Target: public/og-image.png</span>
          </div>

          <div
            className="overflow-visible origin-top transition-transform duration-200 ring-1 ring-[#E5E5DF]"
            style={{
              transform: `scale(${scale})`,
              marginBottom: `-${630 * (1 - scale)}px`,
            }}
          >
            {/* The Actual OG Card Node */}
            <div
              id="og-card"
              ref={cardRef}
              style={{ width: "1200px", height: "630px" }}
              className="relative overflow-hidden flex flex-col justify-between p-16 select-none bg-white text-[#0A0A0A]"
            >
              {/* Background Ambient Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none z-5 absolute -top-24 -right-24 size-140 rounded-full bg-[#FF3B00]/8 blur-[120px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none z-5 absolute -bottom-32 -left-32 size-120 rounded-full bg-[#FF3B00]/5 blur-[120px]"
              />

              {/* Decorative Dot Grid Pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, #DCDCD4 1.25px, transparent 1.25px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Frame Border Rules */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-8 h-full top-0 w-[1136px] border-x border-[#D7D7D0]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 h-[566px] top-8 w-full border-y border-[#D7D7D0]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-8 h-[566px] w-[1136px] top-8 bg-white border border-[#D7D7D0]"
              />

              {/* TOP ROW: Logo & Live Status */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RectangleLogo className="h-16 w-auto" variant="light" />
                </div>
              </div>

              {/* MIDDLE ROW: Main Value Proposition */}
              <div className="relative z-10 max-w-4xl space-y-6 my-auto">
                <h1 className="font-display text-[64px] leading-[0.92] tracking-tight font-extrabold text-[#0A0A0A]">
                  <span>UP TO THE PIXEL.</span>
                  <br />
                  <span className="text-[#56564F]">DOWN TO YOUR SCALE.</span>
                </h1>

                <p className="text-2xl leading-relaxed max-w-3xl font-inter font-normal text-[#56564F]">
                  We design and build bespoke landing pages, catalogs, and
                  online stores for startups with sub-second speeds, tactile
                  micro-interactions, and a direct lead capture flow.
                </p>
              </div>

              {/* BOTTOM ROW: Feature Pills & Domain */}
              <div className="relative z-10 flex items-center justify-end pt-6">
                <div className="flex items-center justify-center gap-2 font-display text-2xl font-bold tracking-tight text-[#0A0A0A]">
                  <span>up2px.com</span>
                  <SquareLogo className="h-10"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Favicon & App Icon Suite (Fixed Container Sizes) */}
        <section className="rounded-xl border border-[#E5E5DF] bg-white p-6 space-y-6 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-700 mb-2">
              <IconSparkles className="size-3.5" />
              Favicon &amp; App Icon Suite
            </div>
            <h3 className="text-lg font-bold text-[#0A0A0A]">
              Favicon Previews &amp; 1-Click PNG Exporter
            </h3>
            <p className="text-xs text-[#56564F] mt-1 max-w-2xl leading-relaxed">
              Your primary vector logo is configured at{" "}
              <code className="text-[#FF3B00] font-mono">/square-logo.svg</code>
              . Below are the accurately scaled previews and downloadable PNG
              fallbacks for Apple devices and legacy browsers:
            </p>
          </div>

          {/* Realistic Previews: Light Browser Tab, Dark Browser Tab, Google Result */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Light Browser Tab Mockup */}
            <div className="rounded-xl border border-[#E5E5DF] bg-[#F4F4F0] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-[#56564F] uppercase tracking-wider">
                  Light Tab Bar
                </p>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/5 text-[#56564F] font-mono">
                  Light Mode
                </span>
              </div>
              <div className="rounded-lg border border-[#D7D7D0] bg-white p-2.5 flex items-center gap-3 shadow-xs">
                <div className="size-5 shrink-0 flex items-center justify-center overflow-hidden rounded">
                  <SquareLogo className="size-5" variant="dark" />
                </div>
                <div className="flex-1 truncate">
                  <p className="text-xs font-medium text-[#0A0A0A] truncate">
                    up2px — Websites &amp; Landing Pages
                  </p>
                </div>
                <span className="text-xs text-[#8F8F88] font-mono px-1">✕</span>
              </div>
              <p className="text-[11px] text-[#56564F] leading-tight">
                High-contrast dark badge against white/light tab strip.
              </p>
            </div>

            {/* Dark Browser Tab Mockup */}
            <div className="rounded-xl border border-[#E5E5DF] bg-[#1E1F24] p-4 space-y-3 text-white">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                  Dark Tab Bar
                </p>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 font-mono">
                  Dark Mode
                </span>
              </div>
              <div className="rounded-lg border border-white/15 bg-[#2B2D33] p-2.5 flex items-center gap-3 shadow-xs">
                <div className="size-5 shrink-0 flex items-center justify-center overflow-hidden rounded">
                  <SquareLogo className="size-5" variant="dark" />
                </div>
                <div className="flex-1 truncate">
                  <p className="text-xs font-medium text-white truncate">
                    up2px — Websites &amp; Landing Pages
                  </p>
                </div>
                <span className="text-xs text-white/40 font-mono px-1">✕</span>
              </div>
              <p className="text-[11px] text-white/60 leading-tight">
                White pixel blocks and orange accent dot pop on dark tabs.
              </p>
            </div>

            {/* Google Search Result Mockup */}
            <div className="rounded-xl border border-[#E5E5DF] bg-[#F4F4F0] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-[#56564F] uppercase tracking-wider">
                  Google Search
                </p>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/5 text-[#56564F] font-mono">
                  SERP
                </span>
              </div>
              <div className="rounded-lg border border-[#D7D7D0] bg-white p-3 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="size-6 shrink-0 flex items-center justify-center overflow-hidden rounded-full bg-[#0A0A0A] p-0.5">
                    <SquareLogo className="size-4" variant="dark" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0A0A0A] leading-tight">
                      up2px
                    </p>
                    <p className="text-[11px] text-[#56564F] leading-tight">
                      https://up2px.com
                    </p>
                  </div>
                </div>
                <p className="text-xs font-medium text-[#1A0DAB] hover:underline cursor-pointer leading-tight truncate">
                  up2px — Websites &amp; Landing Pages
                </p>
              </div>
              <p className="text-[11px] text-[#56564F] leading-tight">
                Scales crisp in mobile &amp; desktop Google snippets.
              </p>
            </div>
          </div>

          {/* Downloadable Icon Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E5E5DF]">
            {/* 32x32 Favicon */}
            <div className="rounded-lg border border-[#E5E5DF] bg-[#FBFBFA] p-5 flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-xl bg-white flex items-center justify-center border border-[#D7D7D0] shadow-xs">
                <div className="size-8 flex items-center justify-center">
                  <SquareLogo className="size-8" variant="light" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0A0A0A]">
                  Standard Favicon (32×32)
                </p>
                <p className="text-[11px] text-[#56564F]">
                  Browser tabs &amp; desktop bookmarks
                </p>
              </div>
              <button
                disabled={downloadingFavicon}
                onClick={() => downloadFaviconPng(32, "favicon-32x32.png")}
                className="mt-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A0A0A] hover:bg-[#242424] text-xs text-white font-medium transition-all cursor-pointer shadow-xs"
              >
                <IconDownload className="size-3.5" />
                <span>Download 32×32 PNG</span>
              </button>
            </div>

            {/* 180x180 Apple Touch Icon */}
            <div className="rounded-lg border border-[#E5E5DF] bg-[#FBFBFA] p-5 flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-2xl bg-white flex items-center justify-center border border-[#D7D7D0] shadow-xs">
                <div className="size-10 flex items-center justify-center">
                  <SquareLogo className="size-10" variant="light" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0A0A0A]">
                  Apple Touch Icon (180×180)
                </p>
                <p className="text-[11px] text-[#56564F]">
                  iOS &amp; iPadOS Home Screen bookmark
                </p>
              </div>
              <button
                disabled={downloadingFavicon}
                onClick={() => downloadFaviconPng(180, "apple-touch-icon.png")}
                className="mt-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A0A0A] hover:bg-[#242424] text-xs text-white font-medium transition-all cursor-pointer shadow-xs"
              >
                <IconDownload className="size-3.5" />
                <span>Download 180×180 PNG</span>
              </button>
            </div>

            {/* 512x512 PWA Icon */}
            <div className="rounded-lg border border-[#E5E5DF] bg-[#FBFBFA] p-5 flex flex-col items-center text-center gap-4">
              <div className="size-16 rounded-2xl bg-white flex items-center justify-center border border-[#D7D7D0] shadow-xs">
                <div className="size-11 flex items-center justify-center">
                  <SquareLogo className="size-11" variant="light" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0A0A0A]">
                  High-Res Icon (512×512)
                </p>
                <p className="text-[11px] text-[#56564F]">
                  Web app manifest &amp; splash icon
                </p>
              </div>
              <button
                disabled={downloadingFavicon}
                onClick={() => downloadFaviconPng(512, "icon-512x512.png")}
                className="mt-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A0A0A] hover:bg-[#242424] text-xs text-white font-medium transition-all cursor-pointer shadow-xs"
              >
                <IconDownload className="size-3.5" />
                <span>Download 512×512 PNG</span>
              </button>
            </div>
          </div>
        </section>

        {/* Step-by-step Destination Guide */}
        <section className="rounded-xl border border-[#E5E5DF] bg-white p-6 text-xs text-[#56564F] space-y-3 shadow-xs">
          <p className="font-semibold text-[#0A0A0A] text-sm">
            Where to place your files:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Save your 1200×630 screenshot as{" "}
              <code className="text-[#FF3B00] font-mono">
                public/og-image.png
              </code>
              .
            </li>
            <li>
              Save the 180×180 icon as{" "}
              <code className="text-[#FF3B00] font-mono">
                public/apple-touch-icon.png
              </code>
              .
            </li>
            <li>
              The primary SVG favicon is already live from{" "}
              <code className="text-[#FF3B00] font-mono">
                public/square-logo.svg
              </code>
              .
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
