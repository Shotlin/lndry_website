import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { CatalogGrid } from "@/components/services/CatalogGrid";

export const metadata: Metadata = {
  title: "Services — LNDRY",
  description:
    "A premium web catalog that makes service scope, partner eligibility and rate basis visible before you start booking.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink py-20 md:py-28">
        <Container className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow tone="onDark">Services</SectionEyebrow>
            <h1 className="mt-3 font-display text-headline text-white">
              Every service, priced and compared before you commit
            </h1>
            <p className="mt-5 max-w-xl font-body text-body-lg text-white/70">
              A premium web catalog that makes service scope, partner eligibility and rate basis
              visible before you start booking.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Pill tone="onDark">11 service families</Pill>
            <Pill tone="onDark">Every icon carries the careline</Pill>
          </div>
        </Container>
      </section>

      <section className="bg-bg-app py-20 md:py-24">
        <Container>
          <h2 className="max-w-2xl font-display text-headline text-ink">
            Choose a service, then compare who can actually handle it
          </h2>
          <div className="mt-10">
            <CatalogGrid />
          </div>
        </Container>
      </section>

      <section className="bg-lavender-soft py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionEyebrow>Spotlight</SectionEyebrow>
            <h2 className="mt-3 font-display text-headline text-ink">
              Dry cleaning, handled the way a specialist would
            </h2>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-ink-soft">
              The catalog can use larger service cutouts, while the product detail remains
              grounded in marketplace facts: service basis, partner capability, pickup slots and
              handover verification.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-elevated">
            <div className="relative mx-auto h-40 w-40">
              <Image
                src="/brand/illustrations/service-dry-cleaning-v1.png"
                alt="Dry cleaned jacket on a hanger"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
            <h3 className="mt-6 font-display text-lg font-semibold text-ink">
              Example service detail
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
              Dry cleaning partners are shown only when eligible for the selected address. Rate
              basis and expected completion are shown before payment.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Pill tone="neutral">₹ per item</Pill>
              <Pill tone="teal">OTP handover</Pill>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-center">
        <Container className="flex flex-col items-center">
          <h2 className="max-w-lg font-display text-headline text-ink">
            Ready to compare eligible partners near you?
          </h2>
          <div className="mt-8">
            <Button href="/marketplace">Compare partners</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
