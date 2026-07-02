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

export const metadata: Metadata = {
  title: "LNDRY — A laundry marketplace that feels handled, not handed off",
  description:
    "LNDRY helps customers compare nearby eligible vendors, choose services, schedule a 60-minute pickup slot, pay online, and follow OTP-verified delivery without calling around.",
  icons: {
    icon: "/brand/deployment/favicon-32.png",
    apple: "/brand/deployment/ios-app-icon-1024.png",
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
