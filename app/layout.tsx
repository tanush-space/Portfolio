import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/data";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-archivo" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], display: "swap", variable: "--font-space-mono" });
const instrument = Instrument_Serif({ weight: "400", style: "italic", subsets: ["latin"], display: "swap", variable: "--font-instrument" });

const title = "Tanush Gupta | UI/UX Designer in Jammu, India";
const description =
  "Tanush Gupta is a UI/UX designer and BCA student in Jammu, India. UI/UX Lead at GDGoC MIET, with work across healthcare, startups and education in Figma.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Tanush Gupta" },
  description,
  applicationName: "Tanush Gupta Portfolio",
  authors: [{ name: "Tanush Gupta" }],
  creator: "Tanush Gupta",
  keywords: [
    "Tanush Gupta", "UI/UX designer", "UI designer", "UX designer", "Figma designer",
    "product designer", "design systems", "portfolio", "Jammu", "India", "GDGoC MIET",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Tanush Gupta",
    title,
    description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7d0e9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceMono.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
