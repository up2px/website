"use client";

import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import { IconSparkles } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Section } from "./frame";
import { galleryColumns, projects } from "./project-data";
import { blurFade } from "@/lib/animations";

interface MouseEnterContextType {
  isMouseEntered: boolean;
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  is3dEnabled: boolean;
}

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(
  undefined,
);

const MEDIA_QUERY = "(min-width: 768px) and (hover: hover)";

const subscribe = (callback: () => void) => {
  const media = window.matchMedia(MEDIA_QUERY);
  media.addEventListener("change", callback);

  return () => media.removeEventListener("change", callback);
};

const getSnapshot = () => window.matchMedia(MEDIA_QUERY).matches;

const getServerSnapshot = () => false;

const CardContainer = ({
  children,
  className = "",
  containerClassName = "",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const is3dEnabled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3.5, 3.5]), {
    stiffness: 140,
    damping: 28,
  });

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3.5, -3.5]), {
    stiffness: 140,
    damping: 28,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3dEnabled || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const mouseXPos = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseEnter = () => {
    if (!is3dEnabled) return;
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!is3dEnabled) return;

    setIsMouseEntered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <MouseEnterContext.Provider
      value={{
        isMouseEntered,
        setIsMouseEntered,
        mouseX: x,
        mouseY: y,
        is3dEnabled,
      }}
    >
      <div
        className={`flex items-center justify-center ${containerClassName}`}
        style={is3dEnabled ? { perspective: "1400px" } : undefined}
      >
        <motion.div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={
            is3dEnabled
              ? {
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }
              : undefined
          }
          className={`relative flex items-center justify-center ${className}`}
        >
          {children}
        </motion.div>
      </div>
    </MouseEnterContext.Provider>
  );
};

const CardBody = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const context = useContext(MouseEnterContext);
  const is3dEnabled = context?.is3dEnabled ?? false;

  return (
    <div
      className={`h-auto w-auto ${is3dEnabled ? "transform-3d" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

const CardItem = ({
  children,
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: unknown;
}) => {
  const context = useContext(MouseEnterContext);
  const isMouseEntered = context?.isMouseEntered ?? false;
  const is3dEnabled = context?.is3dEnabled ?? false;

  return (
    <motion.div
      animate={
        is3dEnabled
          ? {
              x: isMouseEntered ? translateX : 0,
              y: isMouseEntered ? translateY : 0,
              z: isMouseEntered ? translateZ : 0,
              rotateX: isMouseEntered ? rotateX : 0,
              rotateY: isMouseEntered ? rotateY : 0,
              rotateZ: isMouseEntered ? rotateZ : 0,
            }
          : undefined
      }
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 28,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const ScrollingColumn = ({
  items,
  direction = "down",
  duration = 36,
}: {
  items: Array<{ src: string; label: string }>;
  direction: "up" | "down";
  duration: number;
}) => {
  const blockItems = [...items, ...items, ...items];

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        animate={{
          y: direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
        className="flex flex-col"
      >
        <div className="flex flex-col gap-4 pb-4 sm:gap-6 sm:pb-6">
          {blockItems.map((item, idx) => (
            <div
              key={`a-${idx}`}
              className="relative aspect-video w-full overflow-hidden rounded-xl border border-rule/80 bg-ground/80 p-2 shadow-lg"
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-rule/30">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 45vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Block B (Identical clone for 100% seamless infinite loop) */}
        <div className="flex flex-col gap-4 pb-4 sm:gap-6 sm:pb-6">
          {blockItems.map((item, idx) => (
            <div
              key={`b-${idx}`}
              className="relative aspect-video w-full overflow-hidden rounded-xl border border-rule/80 bg-ground/80 p-2 shadow-lg"
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-rule/30">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 45vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeProject = projects[currentIndex];

  return (
    <Section
      id="work"
      className="overflow-hidden pt-8 md:pt-12 pb-8 md:pb-12 border-t border-rule"
    >
      <div
        className="relative w-full gap-6 px-4 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative z-10 mx-auto max-w-2xl flex items-center flex-col text-center gap-4">
          <motion.h2
            {...blurFade(0)}
            className="font-display text-xl md:text-3xl font-bold tracking-tight text-ink"
          >
            THE WORK.
            <br />
            IN EVERY DETAIL.
          </motion.h2>
          <motion.p
            {...blurFade(0.1)}
            className="text-sm text-muted sm:text-base"
          >
            {
              "A look at the landing pages, storefronts, and digital experiences we've designed and developed."
            }
          </motion.p>

          <motion.div {...blurFade(0.15)} className="flex items-center justify-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Jump to ${p.title}`}
                className="group relative flex h-6 items-center px-1 cursor-pointer"
              >
                <motion.div
                  animate={{
                    width: i === currentIndex ? 32 : 8,
                    backgroundColor:
                      i === currentIndex
                        ? "var(--accent)"
                        : "var(--rule-strong)",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="h-1.5 rounded-full"
                  style={{
                    boxShadow:
                      i === currentIndex
                        ? "0 0 12px rgba(255,59,0,0.5)"
                        : "none",
                  }}
                />
              </button>
            ))}
          </motion.div>
        </div>

        <div className="relative mt-8 w-full overflow-hidden md:mt-12 pt-8 select-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[46%] z-10 backdrop-blur-md bg-linear-to-b from-ground via-ground/80 to-transparent"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 25%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 25%, transparent 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] z-10 backdrop-blur-md bg-linear-to-t from-ground via-ground/80 to-transparent"
              style={{
                maskImage:
                  "linear-gradient(to top, black 0%, black 25%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, black 25%, transparent 100%)",
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 z-20 bg-linear-to-b from-ground to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-20 bg-linear-to-t from-ground to-transparent" />

            <div className="grid h-full w-full grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-6 sm:px-8">
              <ScrollingColumn
                items={galleryColumns[0]}
                direction="down"
                duration={38}
              />
              <ScrollingColumn
                items={galleryColumns[1]}
                direction="up"
                duration={32}
              />
              <ScrollingColumn
                items={galleryColumns[2]}
                direction="down"
                duration={42}
              />
              <ScrollingColumn
                items={galleryColumns[3]}
                direction="up"
                duration={35}
              />
            </div>
          </div>

          <motion.div {...blurFade(0.2)} className="relative z-30 mx-auto max-w-frame flex justify-center">
            <CardContainer containerClassName="py-2 sm:py-8 w-full max-w-4xl">
              <CardBody className="relative w-full rounded-md border border-rule p-2 sm:p-6 shadow-xl bg-ground/95 transition-colors duration-300 hover:border-rule-strong backface-hidden">
                <CardItem
                  translateZ={18}
                  className="relative h-full w-full aspect-video overflow-hidden rounded-md border border-rule bg-ground mb-2 sm:mb-6"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 850px"
                        priority
                        className="object-cover object-top transition-transform duration-700 md:group-hover/card:scale-105"
                      />

                      {/* Non-live placeholder overlay */}
                      {!activeProject.isExternal && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-ground/85 p-6 text-center backdrop-blur-xs">
                          <div className="flex size-10 items-center justify-center rounded-full border border-rule bg-ground text-accent">
                            <IconSparkles className="size-5" />
                          </div>
                          <h4 className="mt-3 font-display text-lg text-ink">
                            {activeProject.title}
                          </h4>
                          <p className="mt-1 max-w-xs font-inter text-xs text-muted">
                            Coming soon.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </CardItem>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <CardItem translateZ={12}>
                      <h3 className="font-display text-lg font-bold text-ink sm:text-xl md:text-2xl">
                        {activeProject.title}
                      </h3>
                    </CardItem>
                    <CardItem translateZ={6}>
                      <p className="mt-2 text-xs text-muted leading-relaxed sm:text-sm max-w-2xl">
                        {activeProject.description}
                      </p>
                    </CardItem>
                  </motion.div>
                </AnimatePresence>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
