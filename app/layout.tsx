import type { Metadata } from "next";
import { Doto, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  axes: ["ROND"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://up2px.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "up2px - Websites & Landing Pages for Early-Stage Startups",
    template: "%s | up2px",
  },
  description:
    "up2px designs and builds bespoke marketing sites, catalogs, and online stores for businesses with sub-second speeds, tactile micro-interactions, and direct WhatsApp lead flows.",
  applicationName: "up2px",
  authors: [{ name: "up2px", url: siteUrl }],
  creator: "up2px",
  publisher: "up2px",
  keywords: [
    "startup website design",
    "landing page development",
    "Next.js agency india",
    "high conversion landing page",
    "SaaS landing page",
    "bespoke web development",
    "WhatsApp checkout store",
    "fast websites",
    "up2px",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "up2px — Websites & Landing Pages for Early-Stage Startups",
    description:
      "Bespoke landing pages, catalogs, and online stores for startups. Sub-second load speeds, tactile micro-interactions, and direct WhatsApp lead capture.",
    siteName: "up2px",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "up2px — Up to the pixel. Down to your scale.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "up2px — Websites & Landing Pages for Early-Stage Startups",
    description:
      "Bespoke landing pages, catalogs, and online stores for startups with sub-second load speeds and direct WhatsApp flows.",
    creator: "@up2px",
    site: "@up2px",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/square-logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "up2px",
      description:
        "Websites and landing pages for early-stage startups and SaaS businesses.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "up2px",
      url: siteUrl,
      logo: `${siteUrl}/rect-logo.svg`,
      image: `${siteUrl}/og-image.png`,
      description:
        "up2px designs and builds bespoke marketing sites, catalogs, and online stores for early-stage startup and SaaS founders.",
      sameAs: [
        "https://x.com/up2px",
        "https://linkedin.com/company/up2px",
        "https://instagram.com/up2px",
        "https://youtube.com/@up2px",
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR, USD",
      paymentAccepted: "Credit Card, UPI, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${doto.variable} ${inter.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
