import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Designify Portfolio",
  description: "Portfolio homepage for a full stack designer and creative brand partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-black">{children}</body>
    </html>
  );
}
