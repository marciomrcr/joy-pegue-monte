import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joy Pegue & Monte",
  description: "Seu sonho nossa decoração",
  keywords:
    "hair style, make up, maquiagem, cabelo, beleza, estúdio, São Paulo, premium, produtos exclusivos",
  authors: [{ name: "Joy Pegue & Monte" }],
  openGraph: {
    title: "Joy Pegue & Monte ",
    description: "Seu sonho nossa decoração",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joy Pegue & Monte",
    description: "Seu sonho nossa decoração",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
