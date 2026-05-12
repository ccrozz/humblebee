import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Humble Bee | Protein Ice Cream — Clean Protein. Real Ingredients. No Shortcuts.",
  description:
    "High-protein, clean-label ice cream made from grass-fed whey, raw honey, and regeneratively sourced ingredients. 30-40g protein per pint. No gums, no sugar alcohols, no artificial sweeteners.",
  keywords: [
    "protein ice cream",
    "clean label",
    "grass-fed whey",
    "raw honey",
    "regenerative",
    "high protein dessert",
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
      className={`${dmSans.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
