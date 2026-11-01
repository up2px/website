// One-off generator: turns the brand SVGs into theme-aware React components.
// Background plates and frame strokes are dropped; brand colours map to CSS variables.
const fs = require("fs");

const COLOR_MAP = {
  "#F4F4F0": "var(--logo-on)",
  "#FF3B00": "var(--accent)",
  "#222222": "var(--logo-off)",
  "#242424": "var(--logo-off)",
};

function convert(src, { name, viewBox, title }) {
  const s = fs.readFileSync(src, "utf8");
  const els = [...s.matchAll(/<path\b[^>]*\/>/g)].map((m) => m[0]);
  const kept = [];
  for (const e of els) {
    if (/stroke=/.test(e)) continue;
    const fill = (e.match(/fill="(#[0-9A-Fa-f]+)"/) || [])[1];
    const mapped = COLOR_MAP[fill && fill.toUpperCase()];
    if (!mapped) continue;
    const d = e.match(/ d="([^"]+)"/)[1];
    kept.push(`      <path d="${d}" fill="${mapped}" />`);
  }
  return `// Generated from ${src.replace(/\\/g, "/")} — brand colours mapped to theme tokens.
import type { SVGProps } from "react";

export function ${name}(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}" {...props}>
${kept.join("\n")}
    </svg>
  );
}
`;
}

fs.mkdirSync("components/brand", { recursive: true });
fs.writeFileSync(
  "components/brand/wordmark.tsx",
  convert("public/rect-logo.svg", { name: "Wordmark", viewBox: "60 26 677 148", title: "up2px" })
);
fs.writeFileSync(
  "components/brand/mark.tsx",
  convert("public/square-logo.svg", { name: "Mark", viewBox: "56 56 400 400", title: "up2px" })
);
console.log("ok");
