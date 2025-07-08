import type { Metadata } from "next";
import { Outfit, Krona_One } from "next/font/google";
import "./globals.css";

const kronaOne = Krona_One({
  variable: "--font-krona-one",
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio Website",
  description: "Created portfolio website with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kronaOne.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
