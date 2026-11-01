# Surface brief: landing page (`app/page.tsx`)

Scope: the up2px agency landing page. Visitor mode: **Persuade**. Build path: code-led (recorded in `.impeccable/config.json`).

Audience and action: early-stage startup and SaaS founders sizing up an agency for their marketing site or landing page. Primary action: book a call / start a conversation (`#contact` until a booking link exists).

Proof: none exists yet. Every proof slot ships as a clearly labelled placeholder.

Working process (user-set): broad layout skeleton first, then component by component. Each section is approved before the next one is built.

Section order (approved with the user): Header, Hero, Work, What we build, Process, Proof strip, FAQ, Final CTA, Footer. Engagement/pricing was dropped.

Theme: dark by default (#0A0A0A ground from the logo), with a light-mode toggle stored in localStorage.

## Direction contract

THESIS: The page is built like the logo: a dot-matrix display inside a ruled frame. The site itself is the portfolio. It refuses the whitespace-floating SaaS template of a centred headline over a row of soft cards.

OWN-WORLD: #0A0A0A ground, #F4F4F0 ink, #222 hairline rules, unlit #242424 dots and a rare #FF3B00 signal. One ~1100px frame with full-height rails, full-bleed horizontal rules and + crosshairs at every rail/rule intersection. Gutters outside the rails are a 16px dot-matrix field. Cells split by 1px lines, never by cards or shadows. Doto (ROND axis) for display, Host Grotesk for text, Geist Mono only for real data. Pixel-authored icons.

STORY: The visitor reads "your startup, built to the pixel", sees the craft in the page's own construction, scans work slots, scope and process, and books a call.

FIRST VIEWPORT: Sticky ruled header (wordmark, links, theme toggle, accent Book a call cell). A full-width Doto headline row; below it, the offer cell (7/12) beside a whole-cell primary action (5/12). Then a full-width pixel canvas band whose dots assemble a landing page and resolve into the up2px mark (the signature interaction, built in the Hero step).

FORM: User-pinned direction (Nothing-style dot matrix plus bordered sections after invoicely.gg, aceternity.com and chanhdai.com). It is list position 1, as pinned by the brief. seed: none (direction pinned by user brief; roll not run).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions

- Positioning/differentiator, booking link, contact email, socials.
- Real case studies, logos and testimonials (placeholders until provided).
- Final copy for scope, process and FAQ (draft slots in the skeleton).
