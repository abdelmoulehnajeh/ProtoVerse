import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Protoverse",
  description: "Created with Protoverse",
  generator: "Protoverse",
  // ---- FAVICON & APP ICONS ----
  icons: {
    icon: "/ic.ico",          // standard favicon (all browsers)
    shortcut: "/ic.ico",      // IE/Edge shortcut icon
    apple: "/ic.ico",         // Apple touch icon (iOS)
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
