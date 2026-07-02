"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { Container } from "../ui/Container";

const STEPS = [
  {
    label: "Service",
    title: "Choose your service",
    desc: "Wash & fold, dry cleaning, steam press and more — filtered to what nearby partners can actually deliver.",
  },
  {
    label: "Garments",
    title: "Add garments with visible pricing",
    desc: "Each line item is priced before you confirm — nothing left to guess at handover.",
  },
  {
    label: "Slot",
    title: "Pick a 60-minute pickup slot",
    desc: "Choose a window that works for you, not a vague same-day promise.",
  },
  {
    label: "Payment",
    title: "Pay online, get instant confirmation",
    desc: "One estimated total, paid upfront, with a clear order confirmation.",
  },
  {
    label: "Status",
    title: "Follow status after checkout",
    desc: "Pickup, processing, quality check and delivery — each stage visible, never guessed.",
  },
  {
    label: "OTP handover",
    title: "Confirm with a secure code",
    desc: "A one-time code verifies pickup and delivery — no unclaimed handovers.",
  },
];

const GARMENTS = [
  { label: "Shirts × 5", price: "₹175" },
  { label: "Trousers × 2", price: "₹110" },
  { label: "Bedsheet × 1", price: "₹90" },
];

export function StepThrough() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const fillRef = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return;

      gsap.set(panelRefs.current.slice(1), { opacity: 0, y: 14 });
      gsap.set(panelRefs.current[0], { opacity: 1, y: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=350%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const idx = Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length));
          if (idx !== activeIndex.current) {
            const prev = activeIndex.current;
            gsap.to(panelRefs.current[prev], { opacity: 0, y: -14, duration: 0.3, ease: motionTokens.easeSignature });
            gsap.to(panelRefs.current[idx], { opacity: 1, y: 0, duration: 0.3, ease: motionTokens.easeSignature });
            dotRefs.current.forEach((d, i) => {
              if (!d) return;
              d.style.backgroundColor = i <= idx ? "var(--color-violet)" : "var(--color-hairline)";
              d.style.color = i <= idx ? "var(--color-surface)" : "var(--color-ink-soft)";
            });
            activeIndex.current = idx;
          }
          if (fillRef.current) fillRef.current.style.width = `${self.progress * 100}%`;
        },
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  if (reducedMotion) {
    return (
      <Container className="py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {STEPS.map((step, i) => (
            <div key={step.label} className="rounded-lg border border-hairline bg-white p-6">
              <p className="font-body text-xs font-semibold uppercase tracking-wide text-violet">
                Step {i + 1} · {step.label}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 font-body text-sm text-ink-soft">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    );
  }

  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col justify-center bg-bg-app py-16">
      <Container>
        <div className="relative mx-auto flex max-w-3xl items-center justify-between">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-hairline" />
          <div ref={fillRef} className="absolute left-0 top-1/2 h-0.5 w-0 -translate-y-1/2 bg-violet transition-[width]" />
          {STEPS.map((step, i) => (
            <span
              key={step.label}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-white font-body text-xs font-bold text-ink-soft"
            >
              {i + 1}
            </span>
          ))}
        </div>

        <div className="relative mx-auto mt-16 h-64 max-w-2xl">
          {STEPS.map((step, i) => (
            <div
              key={step.label}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <p className="font-body text-xs font-semibold uppercase tracking-wide text-violet">
                Step {i + 1} · {step.label}
              </p>
              <h3 className="mt-3 max-w-lg font-display text-headline text-ink">{step.title}</h3>
              <p className="mt-4 max-w-md font-body text-base text-ink-soft">{step.desc}</p>

              {step.label === "Garments" && (
                <div className="mt-6 w-full max-w-sm rounded-lg border border-hairline bg-white p-5 text-left shadow-soft">
                  {GARMENTS.map((g) => (
                    <div key={g.label} className="flex items-center justify-between border-b border-hairline py-2 last:border-0">
                      <span className="font-body text-sm text-ink">{g.label}</span>
                      <span className="font-body text-sm font-semibold text-ink-soft">{g.price}</span>
                    </div>
                  ))}
                  <div className="mt-3 flex items-center justify-between rounded-md bg-lavender-soft px-3 py-2">
                    <span className="font-body text-sm font-semibold text-ink">Estimate</span>
                    <span className="font-display text-lg font-bold text-violet">₹375</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
