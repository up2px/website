interface ProjectData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  link: string;
  isExternal: boolean;
  image: string;
  badge: string;
  metrics: string;
}

export const projects: ProjectData[] = [
  {
    id: "ahpvitals",
    title: "AHP Vitals",
    category: "D2C E-COMMERCE",
    tagline: "Ultra-Fast Sports Nutrition Storefront",
    description:
      "Direct-to-consumer store with sub-second page transitions, dynamic catalog filters, and instant checkout.",
    link: "https://ahpvitals.in",
    isExternal: true,
    image: "https://assets.up2px.com/ahp-preview.png",
    badge: "Live in Production",
    metrics: "99/100 Mobile • Next.js 16",
  },
  {
    id: "kamakhyatiles",
    title: "Kamakhya Tiles",
    category: "LOCAL BUSINESS",
    tagline: "Tiles",
    description:
      "One-tap WhatsApp inquiry booking for a tile and marble dealer in Himachal Pradesh.",
    link: "#contact",
    isExternal: false,
    image: "https://assets.up2px.com/ahp-preview.png",
    badge: "Deploying Q4",
    metrics: "Direct WhatsApp • 5-Day Sprint",
  },
  {
    id: "lumina",
    title: "Lumina Labs",
    category: "SAAS & TOOLS",
    tagline: "Developer Tool Landing Page",
    description:
      "High-converting waitlist page engineered with tactile interactive terminal components and zero bloat.",
    link: "#contact",
    isExternal: false,
    image: "https://assets.up2px.com/ahp-preview.png",
    badge: "Intake Scheduled",
    metrics: "Sub-100ms Latency • Lead Hook",
  },
];

export const galleryColumns = [
  [
    { src: "https://assets.up2px.com/ahp-preview.png", label: "AHP Vitals Storefront" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Studio Build" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Product Catalog" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Modern Layout" },
  ],
  [
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Component System" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Mobile Responsive" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Interactive Grid" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Fast Handoff" },
  ],
  [
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Checkout Pipeline" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Design System" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Clean Typography" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Dynamic Storefront" },
  ],
  [
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Tactile Elements" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Sub-Second UX" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Full Next.js Build" },
    { src: "https://assets.up2px.com/ahp-preview.png", label: "Verified Production" },
  ],
];
