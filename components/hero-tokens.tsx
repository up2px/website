"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TextMorph } from "torph/react";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconLayout,
  IconBuildingStore,
  IconCategory,
  IconShoppingBag,
} from "@tabler/icons-react";

export interface MorphTokenItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  textColor: string;
  iconColor: string;
  pillTheme: string;
  badgeBg: string;
}

export const deliverableTokens: MorphTokenItem[] = [
  {
    id: "landing-pages",
    label: "landing pages",
    icon: IconLayout,
    textColor: "text-[#FF5E2E]",
    iconColor: "text-[#FF5E2E]",
    pillTheme: "bg-orange-500/[0.06] border-orange-500/20 hover:border-orange-500/35",
    badgeBg: "bg-orange-500/10",
  },
  {
    id: "catalogs",
    label: "Catalogs",
    icon: IconCategory,
    textColor: "text-amber-700",
    iconColor: "text-amber-600",
    pillTheme: "bg-amber-500/[0.06] border-amber-500/20 hover:border-amber-500/35",
    badgeBg: "bg-amber-500/10",
  },
  {
    id: "online-stores",
    label: "Online stores",
    icon: IconBuildingStore,
    textColor: "text-blue-600",
    iconColor: "text-blue-600",
    pillTheme: "bg-blue-500/[0.06] border-blue-500/20 hover:border-blue-500/35",
    badgeBg: "bg-blue-500/10",
  },
  {
    id: "digital-storefronts",
    label: "Digital storefronts",
    icon: IconShoppingBag,
    textColor: "text-purple-600",
    iconColor: "text-purple-600",
    pillTheme: "bg-purple-500/[0.06] border-purple-500/20 hover:border-purple-500/35",
    badgeBg: "bg-purple-500/10",
  },
];

export const channelTokens: MorphTokenItem[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: IconBrandWhatsapp,
    textColor: "text-emerald-700",
    iconColor: "text-emerald-600",
    pillTheme: "bg-emerald-500/[0.08] border-emerald-500/25 hover:border-emerald-500/40",
    badgeBg: "bg-emerald-500/12",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: IconBrandInstagram,
    textColor: "text-rose-600",
    iconColor: "text-rose-600",
    pillTheme: "bg-rose-500/[0.08] border-rose-500/25 hover:border-rose-500/40",
    badgeBg: "bg-rose-500/12",
  },
];

interface TintedPoppingTokenProps {
  tokens: MorphTokenItem[];
  currentIndex: number;
  onCycle: () => void;
  ariaLabel: string;
}

function TintedPoppingToken({
  tokens,
  currentIndex,
  onCycle,
  ariaLabel,
}: TintedPoppingTokenProps) {
  const current = tokens[currentIndex];
  const IconComponent = current.icon;

  return (
    <button
      type="button"
      onClick={onCycle}
      aria-label={`${ariaLabel}: ${current.label}. Click to switch.`}
      className={`group inline-flex items-center align-middle relative rounded-full border pl-8.5 sm:pl-9 pr-3.5 py-0.5 ml-3.5 sm:ml-4 mr-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all cursor-pointer active:scale-97 select-none overflow-visible font-semibold tracking-tight ${current.pillTheme}`}
    >
      {/* Oversized sticker badge popping out on the left (with clearance from preceding text) */}
      <span className="absolute -left-2.5 sm:-left-3 top-1/2 -translate-y-1/2 -rotate-6 transition-transform group-hover:rotate-0 z-10 flex items-center justify-center size-8 sm:size-8.5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] ring-2 ring-white border border-black/10">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={current.id}
            initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.4, rotate: 20 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className={`size-full rounded-full flex items-center justify-center ${current.badgeBg}`}
          >
            <IconComponent className={`size-4 sm:size-4.5 shrink-0 ${current.iconColor}`} />
          </motion.span>
        </AnimatePresence>
      </span>

      {/* Torphed text with its signature color */}
      <span className={`whitespace-nowrap leading-none pt-px font-semibold ${current.textColor}`}>
        <TextMorph duration={220}>{current.label}</TextMorph>
      </span>
    </button>
  );
}

export function HeroTokens() {
  const [deliverableIndex, setDeliverableIndex] = useState(0);
  const [channelIndex, setChannelIndex] = useState(0);

  const cycleDeliverable = useCallback(() => {
    setDeliverableIndex((prev) => (prev + 1) % deliverableTokens.length);
  }, []);

  const cycleChannel = useCallback(() => {
    setChannelIndex((prev) => (prev + 1) % channelTokens.length);
  }, []);

  // Staggered auto-cycle
  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    let turn = 0;
    const interval = setInterval(() => {
      if (document.hidden) return;
      if (turn % 2 === 0) {
        cycleDeliverable();
      } else {
        cycleChannel();
      }
      turn += 1;
    }, 2800);

    return () => clearInterval(interval);
  }, [cycleDeliverable, cycleChannel]);

  return {
    deliverablePill: (
      <TintedPoppingToken
        tokens={deliverableTokens}
        currentIndex={deliverableIndex}
        onCycle={cycleDeliverable}
        ariaLabel="Deliverable"
      />
    ),
    channelPill: (
      <TintedPoppingToken
        tokens={channelTokens}
        currentIndex={channelIndex}
        onCycle={cycleChannel}
        ariaLabel="Inquiry Channel"
      />
    ),
  };
}
