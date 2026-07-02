import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { AudienceNav } from "@/components/partners/AudienceNav";

export const metadata: Metadata = {
  title: "Partners & operations — LNDRY",
  description:
    "How LNDRY's operating model works for vendors, riders and admin: application, fulfilment, handover and review.",
};

const ONBOARDING_STEPS = ["Application review", "Service editor", "Order assignment", "Processing audit"];
const OTP_STEPS = ["Pickup OTP", "Partner return", "Delivery OTP", "Completed"];

export default function PartnersPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#5046c8_0%,#6c63e8_100%)] py-20 md:py-24">
        <Container>
          <SectionEyebrow tone="onDark">Partners &amp; operations</SectionEyebrow>
          <h1 className="mt-3 max-w-2xl font-display text-headline text-white">
            Vendors, riders and admin — one designed system
          </h1>
          <p className="mt-5 max-w-xl font-body text-body-lg text-white/80">
            How LNDRY&rsquo;s operating model works: application, fulfilment, handover and review
            — explained for vendors, clients and internal stakeholders.
          </p>
          <div className="mt-8">
            <Button href="#audience-vendors" variant="secondary" className="bg-white">
              View workflow
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-bg-app py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[200px_1fr]">
          <AudienceNav />

          <div className="flex flex-col gap-24">
            <div id="audience-vendors" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionEyebrow>Vendors</SectionEyebrow>
                <h2 className="mt-3 font-display text-headline text-ink">
                  Vendor onboarding is framed as quality control
                </h2>
                <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-ink-soft">
                  Application review, documents, service radius, capacity and order assignment are
                  presented as a trust system, not a generic business sign-up.
                </p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  {ONBOARDING_STEPS.map((label, i) => (
                    <Pill key={label} tone={i === 0 ? "teal" : "neutral"}>
                      {label}
                    </Pill>
                  ))}
                </div>
              </div>
              <PhoneFrame
                src="/brand/vendor-mockups/new-order-v1.png"
                alt="Vendor new order request screen"
                label="Vendor fulfilment"
                className="mx-auto w-56"
              />
            </div>

            <div id="audience-riders" className="rounded-xl bg-ink p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <SectionEyebrow tone="onDark">Riders</SectionEyebrow>
                  <h2 className="mt-3 font-display text-headline text-white">
                    Delivery handovers stay explicit
                  </h2>
                  <p className="mt-4 max-w-lg font-body text-base text-white/70">
                    Pickup and delivery OTP are visible in the operations story because they are
                    central to customer confidence — the page never promises continuous live
                    tracking.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {OTP_STEPS.map((label, i) => (
                      <div key={label} className="rounded-lg border border-ink-line bg-ink-raised p-4 text-center">
                        <p className="font-display text-xl font-bold text-teal">{i + 1}</p>
                        <p className="mt-1 font-body text-xs text-white/70">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <PhoneFrame
                  src="/brand/rider-mockups/assignments-v1.png"
                  alt="Delivery employee assignments screen"
                  label="Delivery handover"
                  className="mx-auto w-56"
                />
              </div>
            </div>

            <div id="audience-admin" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionEyebrow>Admin</SectionEyebrow>
                <h2 className="mt-3 font-display text-headline text-ink">
                  Admin proof for the client deck
                </h2>
                <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-ink-soft">
                  The operations view makes the backend feel designed and credible while staying
                  visually connected to the consumer site.
                </p>
              </div>
              <BrowserFrame
                src="/brand/admin-mockups/dashboard-v1.png"
                alt="Admin operations overview dashboard"
                label="Admin review"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-center">
        <Container className="flex flex-col items-center">
          <h2 className="max-w-xl font-display text-headline text-ink">
            Client-facing, investor-facing, and partner-facing
          </h2>
          <p className="mt-4 max-w-lg font-body text-base text-ink-soft">
            No claims outside the approved workflow — just one credible, connected system.
          </p>
          <div className="mt-8">
            <Button href="/how-it-works">See how it works</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
