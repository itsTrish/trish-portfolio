import type { Metadata } from "next";
import { ibmPlexSans, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trishia Babiera — Programmer Analyst",
  description:
    "Results-oriented Programmer with 5+ years of experience developing, testing, and maintaining web and windows applications across banking, enterprise, and manufacturing.",
  openGraph: {
    title: "Trishia Babiera — Programmer Analyst",
    description:
      "Programmer Analyst specializing in C#/.NET, ASP.NET, and database-driven systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
