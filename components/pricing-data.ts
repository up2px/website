export interface FeatureItem {
  prefix?: string;
  highlight?: string;
  suffix?: string;
  badge?: string;
}

export interface PricingPlanData {
  title: string;
  description: string;
  price: string;
  period: string;
  ctaText: string;
  badge?: string;
  includesTitle: string;
  features: FeatureItem[];
}

export const singlePagePlan: PricingPlanData = {
  title: "Single Static Page",
  description: "A high-converting landing page, designed and built end-to-end.",
  price: "9,999",
  period: "/ one-time",
  ctaText: "Start your landing page",
  includesTitle: "Single page includes:",
  features: [
    { highlight: "Single", suffix: "high-converting landing page" },
    {
      prefix: "Custom design +",
      highlight: "React / Next / Tailwind",
      suffix: "build",
    },
    {
      prefix: "Direct",
      highlight: "WhatsApp lead capture",
      suffix: "integration",
    },
    { highlight: "2 revision", suffix: "rounds" },
    { prefix: "Delivered in", highlight: "3–5 days" },
    { suffix: "SEO, hosting & deployment handled" },
    { highlight: "100% full", suffix: "GitHub code ownership" },
  ],
};

export const multiplePagesPlan: PricingPlanData = {
  title: "Multiple Pages",
  description:
    "A complete multi-page storefront that makes you look like a category leader.",
  price: "29,999",
  period: "/ one-time",
  ctaText: "Start your store",
  badge: "Most popular",
  includesTitle: "Everything in Single Page, plus:",
  features: [
    { prefix: "Multiple pages", badge: "3–5 pages" },
    { highlight: "Dynamic product catalog", suffix: "with instant filters" },
    {
      prefix: "Direct",
      highlight: "WhatsApp order flow",
      suffix: "& payment gateway",
    },
    {
      highlight: "CMS integration",
      suffix: "for easy product & price updates",
    },
    { highlight: "3 revision", suffix: "rounds" },
    { prefix: "Delivered in", highlight: "7–10 days" },
    { highlight: "30-day support", suffix: "on a private channel" },
  ],
};
