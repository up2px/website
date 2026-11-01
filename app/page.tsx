import { Frame } from "@/components/frame";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { ProcessSection } from "@/components/process-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Wordmark } from "@/components/wordmark";

export default function Home() {
  return (
    <div id="top" className="min-h-screen w-screen px-1">
      <Header />
      <Frame>
        <HeroSection />
        <ProcessSection />
        <WorkSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </Frame>
      <Wordmark />
      <ProgressiveBlur heightClass="h-[7%] md:h-[10%]" className="w-full" />
    </div>
  );
}
