"use client";

import { useScrollReveal } from "@/lib/motion/useScrollReveal";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Button } from "../ui/Button";
import { Thread } from "../ui/Thread";

export function CloseCTA() {
  const scope = useScrollReveal<HTMLDivElement>({ selector: ".close-reveal", y: 24 });

  return (
    <section
      id="act-close"
      ref={scope}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#5046c8_0%,#6c63e8_100%)] py-28 text-center"
    >
      <Thread className="pointer-events-none absolute -right-8 top-0 hidden h-full w-48 md:block" opacity={0.18} />
      <Thread className="pointer-events-none absolute -left-8 top-0 hidden h-full w-48 md:block" opacity={0.18} flip />

      <Container className="relative flex flex-col items-center">
        <div className="close-reveal">
          <SectionEyebrow tone="onDark">Act six — Close</SectionEyebrow>
        </div>
        <h2 className="close-reveal mt-3 max-w-2xl font-display text-headline text-white">
          Book your first pickup in under a minute
        </h2>
        <p className="close-reveal mt-4 max-w-lg font-body text-base text-white/80">
          Compare eligible vendors, choose a service, and follow OTP-verified delivery — no
          calling around, no losing the booking thread.
        </p>
        <div className="close-reveal mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/how-it-works" variant="secondary" className="bg-white">
            Book a pickup
          </Button>
          <Button href="/services" variant="ghost" className="text-white hover:text-white/80">
            Explore services
          </Button>
        </div>
      </Container>
    </section>
  );
}
