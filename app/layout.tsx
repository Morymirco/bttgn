import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MaintenanceProvider } from "./contexts/MaintenanceContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BTTGN - En cours de développement",
  description: "BTTGN - Notre plateforme est en construction. Revenez bientôt pour découvrir quelque chose d'extraordinaire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MaintenanceProvider>
          {children}
        </MaintenanceProvider>
      </body>
    </html>
  );
}
