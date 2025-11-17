"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Tous les composants enfants auront accès à useLanguage */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
