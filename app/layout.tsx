import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://birgits-salong.no";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Birgits Salong — Frisør, negler og solarium i Stokmarknes",
  description:
    "Birgits Salong i Markedsgata på Stokmarknes. Klipp, farge, negler og solarium — Birgit har klippet hår på Hadsel siden 1995. Ring 76 15 11 32 for time.",
  keywords: [
    "frisør Stokmarknes",
    "frisør Hadsel",
    "frisør Vesterålen",
    "klipp Stokmarknes",
    "negler Stokmarknes",
    "solarium Stokmarknes",
    "Birgits Salong",
    "Markedsgata Stokmarknes",
  ],
  openGraph: {
    title: "Birgits Salong — Stokmarknes",
    description:
      "Frisør, negler og solarium i Markedsgata på Stokmarknes — siden 1995.",
    type: "website",
    locale: "nb_NO",
    url: BASE_URL,
    siteName: "Birgits Salong",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
