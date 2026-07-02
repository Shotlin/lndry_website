"use client";

import { useRef, type PointerEvent } from "react";
import { useScrollReveal } from "@/lib/motion/useScrollReveal";
import { Container } from "../ui/Container";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Pill } from "../ui/Pill";
import { Card } from "../ui/Card";

export function MarketplaceCompare() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const scope = useScrollReveal<HTMLDivElement>({ selector: ".compare-card", y: 32 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <section id="act-compare" ref={scope} className="relative overflow-hidden bg-ink py-24">
      <div
        ref={spotlightRef}
        onPointerMove={handlePointerMove}
        className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), rgba(136,124,246,0.16), transparent 70%)",
        }}
      />

      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionEyebrow tone="onDark">Act three — Compare</SectionEyebrow>
          <h2 className="mt-3 max-w-lg font-display text-headline text-white">
            Compare real partner choices before booking
          </h2>
          <p className="mt-4 max-w-md font-body text-base text-white/70">
            The website explains the marketplace model with the same proof customers see in the
            app: rate basis, distance, slots, verification and care categories.
          </p>
        </div>

        <div className="relative grid gap-5 sm:grid-cols-2">
          <Card tone="dark" className="compare-card p-6">
            <h3 className="font-display text-xl font-semibold text-white">BrightFold Care</h3>
            <p className="mt-2 font-body text-sm text-white/70">1.2 km · ₹79/kg · Slot 6-7 PM</p>
            <Pill tone="teal" className="mt-4">
              Verified
            </Pill>
          </Card>

          <div className="compare-card mt-0 rounded-lg bg-white p-6 shadow-elevated sm:mt-8">
            <h3 className="font-display text-xl font-semibold text-ink">UrbanPress Studio</h3>
            <p className="mt-2 font-body text-sm text-ink-soft">
              Dry clean, steam press, premium garment care
            </p>
            <Pill tone="teal" className="mt-4">
              Available today
            </Pill>
          </div>
        </div>
      </Container>
    </section>
  );
}
