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
    default: "up2px - Bespoke Websites & Landing Pages for Businesses",
    template: "%s | up2px",
  },
  description:
    "up2px designs and builds bespoke websites, catalogs, and online stores for businesses. Engineered for speed, refined with tactile interactions, and built to turn visitors into WhatsApp inquiries.",
  applicationName: "up2px",
  authors: [{ name: "up2px", url: siteUrl }],
  creator: "up2px",
  publisher: "up2px",
  keywords: [
    "bespoke website design",
    "custom website development",
    "business website design",
    "website design agency India",
    "website development India",
    "high-performance websites",
    "custom landing page design",
    "ecommerce website development",
    "online catalog development",
    "WhatsApp lead generation",
    "conversion-focused web design",
    "Next.js web development",
    "up2px",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "up2px - Bespoke Websites & Landing Pages for Businesses",
    description:
      "We design and build bespoke websites, catalogs, and online stores. Engineered for speed, enriched with tactile interactions, and built around seamless WhatsApp inquiry flows.",
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
    title: "up2px - Bespoke Websites & Landing Pages for Businesses",
    description:
      "Custom-built websites for businesses. Fast by engineering, thoughtful by design, and built to turn visitors into WhatsApp inquiries.",
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
        "Bespoke websites, landing pages, catalogs, and online stores designed and built for businesses.",
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
        "up2px is a web design and development studio creating bespoke websites, catalogs, and online stores for businesses. Every website is engineered for speed, enhanced with tactile micro-interactions, and designed to turn visitors into direct WhatsApp inquiries.",
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
