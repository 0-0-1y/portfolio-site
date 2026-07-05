import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yu He - Product Design Portfolio",
  description:
    "A product design portfolio focused on research clarity, systems thinking, materials, ergonomics, and final design expression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
