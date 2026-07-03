import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CompareTool } from "@/components/marketplace/CompareTool";
import { LNDRYMotionOverlay } from "@/components/overlays/LNDRYMotionOverlay";

const title = "Marketplace — LNDRY";
const description =
  "Compare nearby laundry partners by rate basis, distance, slots and verification before you book.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "LNDRY",
    type: "website",
    images: ["/brand/website-finishing/og/marketplace-og-1200x630.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/website-finishing/og/marketplace-og-1200x630.png"],
  },
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
          <div className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-elevated">
              <Image
                src="/brand/website-story/website-marketplace-hero-vendor-order-v1.png"
                alt="An LNDRY vendor reviewing a new order on a tablet in their store"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
                priority
              />
            </div>
            <LNDRYMotionOverlay
              variant="marketplace-proof"
              className="absolute -bottom-10 -right-6 hidden w-[62%] sm:block"
            />
          </div>
        </Container>
      </section>

      <section className="bg-bg-app py-20 pt-28 md:py-24 md:pt-28">
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
          <LNDRYMotionOverlay variant="verified-badge" className="mx-auto w-full max-w-xs" />
        </Container>
      </section>
    </>
  );
}
