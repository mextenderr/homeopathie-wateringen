import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { ContactBanner } from "@/components/ContactBanner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homeopathisch Arts & Coach | Ilonka de Vos",
  description:
    "Welkom bij Ilonka, homeopathisch arts en coach. Klassieke homeopathie gecombineerd met een medische achtergrond voor persoonlijk en deskundig advies.",
  keywords: [
    "homeopathie",
    "homeopathisch arts",
    "coach",
    "Wateringen",
    "Westland",
    "klassieke homeopathie",
    "AVIG",
    "VHAN",
    "BIG geregistreerd",
    "alternatieve geneeskunde",
    "integrale geneeskunde",
  ],
  metadataBase: new URL("https://homeopathie-wateringen.nl"),
  openGraph: {
    title: "Homeopathisch Arts & Coach | Ilonka de Vos",
    description:
      "Klassieke homeopathie gecombineerd met een medische achtergrond voor persoonlijk en deskundig advies.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactBanner />
      </body>
    </html>
  );
}
