export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Integrate & Align",
    description:
      "Share your existing deck, wireframe, or raw idea. We unpack your target audience, conversion goals, and technical requirements.",
  },
  {
    step: "02",
    title: "Prototype & Refine",
    description:
      "You get a high-fidelity prototype. Experience the typography, spacing, tactile micro-interactions, and mobile responsiveness.",
  },
  {
    step: "03",
    title: "Ship & Benchmark",
    description:
      "We turn the approved design into a clean Next.js build with sub-second speeds, hook up your custom domain, and transfer 100% full GitHub repository ownership to you.",
  },
];
