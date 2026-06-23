import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koon Kitchen — Thai Fusion Excellence",
  description:
    "Experience the art of Thai fusion cuisine at Koon Kitchen. We blend traditional Thai flavors with modern culinary techniques to create an unforgettable dining experience.",
  metadataBase: new URL("https://koonkitchen.com"),
  openGraph: {
    title: "Koon Kitchen",
    description: "Thai Fusion Excellence",
    siteName: "Koon Kitchen",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koon Kitchen",
    description: "Thai Fusion Excellence",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`dark ${playfairDisplay.variable} ${inter.variable}`}
    >
      <body className="bg-background text-on-background font-body antialiased overflow-x-hidden">
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
