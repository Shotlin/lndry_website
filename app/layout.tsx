import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/motion/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "LNDRY — A laundry marketplace that feels handled, not handed off";
const description =
  "LNDRY helps customers compare nearby eligible vendors, choose services, schedule a 60-minute pickup slot, pay online, and follow OTP-verified delivery without calling around.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lndry.app"),
  title: {
    default: title,
    template: "%s",
  },
  description,
  icons: {
    icon: "/brand/deployment/favicon-32.png",
    apple: "/brand/deployment/ios-app-icon-1024.png",
  },
  openGraph: {
    title,
    description,
    siteName: "LNDRY",
    type: "website",
    locale: "en_IN",
    images: ["/brand/website-finishing/og/home-og-1200x630.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/website-finishing/og/home-og-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
