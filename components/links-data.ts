import {
  IconBrandLinkedin,
  IconBrandX,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/up2px",
    icon: IconBrandLinkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/up2px",
    icon: IconBrandX,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/up2px",
    icon: IconBrandInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@up2px",
    icon: IconBrandYoutube,
  },
  {
    label: "hello@up2px.com",
    href: "mailto:hello@up2px.com",
    icon: IconMail,
  },
];
