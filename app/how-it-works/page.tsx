import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { StepThrough } from "@/components/how-it-works/StepThrough";

export const metadata: Metadata = {
  title: "How it works — LNDRY",
  description:
    "A desktop booking story that remains calm and readable, explaining the same auditable journey as the mobile app.",
};

const STATUS_STEPS = ["Pickup OTP", "Processing", "Quality check", "Delivery OTP"];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f4f3fb_62%,#eae8ff_100%)] py-20 md:py-24">
        <Container>
          <SectionEyebrow>How it works</SectionEyebrow>
          <h1 className="mt-3 max-w-2xl font-display text-headline text-ink">
            A calm, auditable path from booking to handover
          </h1>
          <p className="mt-5 max-w-xl font-body text-body-lg text-ink-soft">
            The same journey as the app, explained with the extra room a desktop screen gives you
            — no new features, just clearer comparison space.
          </p>
          <div className="mt-8">
            <Button href="/marketplace">Start booking</Button>
          </div>
        </Container>
      </section>

      <StepThrough />

      <section className="bg-ink py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <SectionEyebrow tone="onDark">Status visibility</SectionEyebrow>
            <h2 className="mt-3 font-display text-headline text-white">
              Status visibility after checkout
            </h2>
            <p className="mt-4 font-body text-base text-white/70">
              Pickup OTP, partner processing and quality checks are explained clearly — without
              implying unsupported live rider maps.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATUS_STEPS.map((label, i) => (
              <div
                key={label}
                className={`rounded-lg border p-6 text-center ${
                  i < 2 ? "border-violet bg-violet" : "border-ink-line bg-ink-raised"
                }`}
              >
                <p className={`font-display text-2xl font-bold ${i < 2 ? "text-white" : "text-white/40"}`}>
                  {i === 0 ? "✓" : i + 1}
                </p>
                <p className={`mt-2 font-body text-xs font-semibold ${i < 2 ? "text-white" : "text-white/60"}`}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-app py-20 text-center">
        <Container className="flex flex-col items-center">
          <h2 className="max-w-xl font-display text-headline text-ink">
            Web checkout is the same LNDRY journey, at a larger scale
          </h2>
          <p className="mt-4 max-w-lg font-body text-base text-ink-soft">
            Desktop users see more comparison space, not extra features the platform hasn&rsquo;t
            approved.
          </p>
          <div className="mt-8">
            <Button href="/marketplace">Compare partners</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
