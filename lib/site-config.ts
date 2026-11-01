// Single source of truth for site copy that is still open.
// Anything set to null renders as an honest placeholder; never invent values here.

export const siteConfig = {
  name: "up2px",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  /** Booking link (Cal.com, Calendly, etc.). Falls back to the contact section. */
  bookingUrl: null as string | null,
  /** Public contact email. */
  email: null as string | null,
  socials: [] as { label: string; href: string }[],
} as const;

export const bookingHref = siteConfig.bookingUrl ?? "#contact";
