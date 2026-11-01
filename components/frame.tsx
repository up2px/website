import type { ComponentPropsWithoutRef, ReactNode } from "react";

function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/**
 * The page frame: one centred column whose left and right borders are the
 * rails that run the full height of the page.
 */
export function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full max-w-frame border-x border-rule bg-ground mx-auto"
    >
      {children}
    </div>
  );
}

/** + marker sitting exactly on a rail/rule intersection. */
export function Cross({ side }: { side: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className={cx(
        "pointer-events-none absolute -top-[5px] z-10 size-[11px]",
        side === "left" ? "-left-[6px]" : "-right-[6px]",
        "before:absolute before:top-[5px] before:left-0 before:h-px before:w-full before:bg-faint",
        "after:absolute after:top-0 after:left-[5px] after:h-full after:w-px after:bg-faint",
      )}
    />
  );
}

/** Horizontal rule that runs edge to edge across the viewport, with crosses on the rails. */
export function Rule() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-rule"
      />
    </>
  );
}

type SectionProps = ComponentPropsWithoutRef<"section"> & { crosses?: boolean };

/** A ruled section: full-bleed rule on top, crosses where it meets the rails. */
export function Section({ className, children, ...rest }: SectionProps) {
  return (
    <section className={cx("relative", className)} {...rest}>
      {children}
    </section>
  );
}

/** Separator band of unlit dots, the dot-matrix answer to a hatched divider. */
export function DotBand({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cx("relative h-10 dot-field", className)}>
      <Rule />
    </div>
  );
}

/** Section title row: display title on the left, a short note on the right. */
export function SectionHead({
  id,
  title,
  note,
  aside,
}: {
  id: string;
  title: string;
  note?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="grid gap-px bg-rule md:grid-cols-12">
      <h2
        id={id}
        className="bg-ground px-5 py-8 font-display text-4xl leading-none text-ink md:col-span-5 md:px-8 md:py-10 md:text-5xl"
      >
        {title}
      </h2>
      <div className="flex flex-col justify-end gap-4 bg-ground px-5 py-6 md:col-span-7 md:px-8 md:py-10">
        {note && (
          <p className="max-w-[52ch] text-pretty text-base text-muted md:text-lg">
            {note}
          </p>
        )}
        {aside}
      </div>
    </div>
  );
}

/**
 * Skeleton-only placeholder. Marks a region that a later step will build out.
 * Remove once every section has its real component.
 */
export function Slot({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cx("relative flex min-h-24 flex-col bg-ground", className)}>
      <span className="absolute top-3 left-3 z-10 bg-ground px-1.5 py-0.5 font-mono text-[11px] tracking-wide text-faint uppercase">
        {label}
      </span>
      {children}
    </div>
  );
}
