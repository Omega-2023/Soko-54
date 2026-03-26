import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soko 54 — Unifying Africa's Capital Markets",
  description:
    "One platform for African stocks. From Lagos to Johannesburg — simple onboarding, transparent pricing, and retail-first investing aligned with AfCFTA.",
  keywords: [
    "African stocks",
    "Soko 54",
    "AfCFTA",
    "NGX",
    "JSE",
    "retail investing",
    "diaspora investing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
