import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Asset & OG Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewOgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
