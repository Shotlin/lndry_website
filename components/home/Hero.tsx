"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/motion/gsap";
import { motionTokens } from "@/lib/motion/tokens";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { Container } from "../ui/Container";
import { Pill } from "../ui/Pill";
import { Button } from "../ui/Button";
import { PhoneFrame } from "../ui/PhoneFrame";
import { Thread } from "../ui/Thread";

const AmbientRibbon = dynamic(() => import("../three/AmbientRibbon").then((m) => m.AmbientRibbon), {
  ssr: false,
});

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!scope.current) return;

      if (reducedMotion) {
        gsap.set([".hero-eyebrow", ".hero-headline", ".hero-sub", ".hero-actions", ".hero-area", ".hero-visual"], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      const split = new SplitText(".hero-headline", { type: "lines", linesClass: "overflow-hidden" });

      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.5, ease: motionTokens.easeSignature })
        .from(
          split.lines,
          { opacity: 0, yPercent: 110, duration: 0.8, ease: motionTokens.easeSignature, stagger: 0.09 },
          "-=0.25"
        )
        .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6, ease: motionTokens.easeSignature }, "-=0.45")
        .from(
          ".hero-actions > *",
          { opacity: 0, y: 16, duration: 0.5, ease: motionTokens.easeSignature, stagger: 0.08 },
          "-=0.35"
        )
        .from(".hero-area", { opacity: 0, y: 16, duration: 0.5, ease: motionTokens.easeSignature }, "-=0.3")
        .from(
          ".hero-visual",
          { opacity: 0, scale: 0.94, duration: 0.9, ease: motionTokens.easeSignature },
          "-=0.7"
        )
        .from(".hero-scroll-cue", { opacity: 0, duration: 0.5 }, "-=0.2");

      // gentle scroll-tied parallax on the hero visual
      gsap.to(".hero-visual", {
        yPercent: -8,
        scale: 1.03,
        ease: motionTokens.easeScrub,
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        split.revert();
      };
    },
    { scope, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={scope}
      id="act-discover"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f4f3fb_62%,#eae8ff_100%)]"
    >
      <Thread className="pointer-events-none absolute -left-10 top-0 h-[640px] w-48" opacity={0.1} />

      <Container className="relative flex flex-col gap-14 pb-24 pt-16 md:pt-24 lg:flex-row lg:items-center lg:gap-10">
        <div className="relative z-10 max-w-xl">
          <div className="hero-eyebrow">
            <Pill tone="neutral">Multi-vendor garment care</Pill>
          </div>

          <h1 className="hero-headline mt-6 font-display text-hero text-ink">
            A laundry marketplace that feels handled, not handed off.
          </h1>

          <p className="hero-sub mt-6 font-body text-body-lg text-ink-soft">
            LNDRY helps customers compare nearby eligible vendors, choose services, schedule a
            60-minute pickup slot, pay online, and follow OTP-verified delivery without calling
            around.
          </p>

          <div className="hero-actions mt-8 flex flex-wrap items-center gap-4">
            <Button href="/how-it-works">Book a pickup</Button>
            <Button href="/marketplace" variant="secondary">
              Compare partners
            </Button>
          </div>

          <div className="hero-area mt-8 flex max-w-md items-center justify-between gap-4 rounded-lg border border-hairline bg-white p-5 shadow-soft">
            <div>
              <p className="font-body text-xs font-semibold text-muted">Start with your area</p>
              <p className="mt-1 font-display text-lg font-semibold text-ink">Kolkata 700091</p>
            </div>
            <Pill tone="teal">Check vendors</Pill>
          </div>
        </div>

        <div className="hero-visual relative z-0 mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:flex-1">
          <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-lavender-soft/70 blur-[2px]" />
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <AmbientRibbon reducedMotion={reducedMotion} />
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md">
            <Image
              src="/brand/illustrations/journey-home-relief-v2.png"
              alt="LNDRY garment bag, folded clothes and a wooden hanger"
              fill
              sizes="(min-width: 1024px) 480px, 380px"
              className="object-contain drop-shadow-[0_24px_40px_rgba(67,55,145,0.16)]"
              priority
            />
          </div>

          <div className="relative -mt-16 flex justify-center gap-4 sm:-mt-24 sm:gap-6">
            <div className="w-32 rotate-[-4deg] sm:w-40">
              <PhoneFrame
                src="/brand/mockups/location-serviceability-v1.png"
                alt="Set your pickup location screen"
                label="Customer booking"
                priority
              />
            </div>
            <div className="mt-8 w-28 rotate-[4deg] sm:mt-12 sm:w-36">
              <PhoneFrame
                src="/brand/mockups/review-order-v1.png"
                alt="Review order screen"
                label="Order review"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="hero-scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-soft md:flex">
        <span className="font-body text-xs font-medium">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
