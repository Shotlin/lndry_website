import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Thread } from "../ui/Thread";
import { Button } from "../ui/Button";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Partners", href: "/partners" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-violet-deep text-white">
      <Thread className="pointer-events-none absolute -right-6 top-0 hidden h-full w-40 md:block" opacity={0.16} flip />

      <Container className="relative py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/brand/logos/wordmark-horizontal.svg"
              alt="LNDRY"
              width={116}
              height={35}
              className="brightness-0 invert"
            />
            <p className="mt-5 font-body text-sm leading-relaxed text-white/70">
              A multi-vendor laundry marketplace that feels handled, not handed off — compare
              vendors, book a pickup slot, and follow OTP-verified delivery.
            </p>
          </div>

          <nav className="flex gap-16" aria-label="Footer">
            <div className="flex flex-col gap-3">
              <p className="font-body text-label font-semibold uppercase tracking-[0.14em] text-white/50">
                Explore
              </p>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm font-medium text-white/85 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col items-start gap-4">
            <p className="font-body text-label font-semibold uppercase tracking-[0.14em] text-white/50">
              Ready when you are
            </p>
            <Button href="/how-it-works" variant="secondary" className="bg-white">
              Book a pickup
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LNDRY. Quietly premium garment care.</p>
          <p>No live tracking claims. No subscriptions. Just the approved marketplace workflow.</p>
        </div>
      </Container>
    </footer>
  );
}
