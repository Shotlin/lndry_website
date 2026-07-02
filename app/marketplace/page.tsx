import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CompareTool } from "@/components/marketplace/CompareTool";

export const metadata: Metadata = {
  title: "Marketplace — LNDRY",
  description:
    "Compare nearby laundry partners by rate basis, distance, slots and verification before you book.",
};

export default function MarketplacePage() {
  return (
    <>
      <section className="bg-surface-cool py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionEyebrow>Marketplace</SectionEyebrow>
            <h1 className="mt-3 font-display text-headline text-ink">
              Compare nearby laundry partners, side by side
            </h1>
            <p className="mt-5 max-w-lg font-body text-body-lg text-ink-soft">
              The premium feel comes from confidence: compare partners without calling, guessing,
              or losing the booking context.
            </p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-elevated">
            <Image
              src="/brand/banners/compare-partners-v1.png"
              alt="Compare nearby laundry partners banner"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="bg-bg-app py-20 md:py-24">
        <Container>
          <CompareTool />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-headline text-ink">No unsupported map promise</h2>
            <p className="mt-4 max-w-md font-body text-base text-ink-soft">
              This page shows area and eligibility, not continuous live rider tracking. The trust
              story stays operationally true to the approved workflow.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
