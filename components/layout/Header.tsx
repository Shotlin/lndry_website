"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Partners", href: "/partners" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState<string | null>(null);
  const pathname = usePathname();

  // Close the mobile menu on route change — adjusted during render (React's
  // recommended pattern for state derived from a prop change) rather than an effect.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 [transition-timing-function:var(--ease-signature)] ${
        scrolled ? "border-hairline bg-white/85 backdrop-blur-xl shadow-soft" : "border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="LNDRY home">
          <Image src="/brand/logos/wordmark-horizontal.svg" alt="LNDRY" width={116} height={35} priority />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-sm font-semibold transition-colors hover:text-violet ${
                pathname === item.href ? "text-violet" : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/how-it-works" size="md">
            Book pickup
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-sm text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {menuOpen && (
        <div className="border-t border-hairline bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex h-12 items-center font-body text-base font-semibold text-ink-soft hover:text-violet"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/how-it-works" className="mt-2 w-full">
              Book pickup
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
