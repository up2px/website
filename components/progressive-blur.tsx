import type { ComponentPropsWithoutRef } from "react";

interface ProgressiveBlurProps extends ComponentPropsWithoutRef<"div"> {
  heightClass?: string;
  maxBlur?: number;
}

export function ProgressiveBlur({
  heightClass = "h-32",
  maxBlur = 6,
  className = "",
  ...props
}: ProgressiveBlurProps) {
  const steps = 8;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto w-full select-none ${heightClass} ${className}`}
      {...props}
    >
      {Array.from({ length: steps }).map((_, i) => {
        const start = ((i - 1) / steps) * 100;
        const peak1 = (i / steps) * 100;
        const peak2 = ((i + 1) / steps) * 100;
        const end = ((i + 2) / steps) * 100;
        const blurRadius = ((i + 1) / steps) * maxBlur;

        const maskGradient = `linear-gradient(to bottom,
          rgba(0, 0, 0, 0) ${start}%,
          rgba(0, 0, 0, 1) ${peak1}%,
          rgba(0, 0, 0, 1) ${peak2}%,
          rgba(0, 0, 0, 0) ${end}%
        )`;

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
              backdropFilter: `blur(${blurRadius}px)`,
              WebkitBackdropFilter: `blur(${blurRadius}px)`,
            }}
          />
        );
      })}
    </div>
  );
}
