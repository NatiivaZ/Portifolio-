import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { LanguageProvider } from "@/contexts/language-context"
import { siteConfig } from "@/data/site-content"
import { assetPath } from "@/lib/utils"
import "./globals.css"

export const metadata: Metadata = {
  title: siteConfig.title,
  description: "Portfólio de Ruan Natividade — Dados, Automação e Desenvolvimento Full-Stack",
  icons: {
    icon: [
      { url: assetPath("/icon.svg"), type: "image/svg+xml" },
      { url: assetPath("/favicon.png"), type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${GeistSans.variable} antialiased`}>
      <body className={GeistSans.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
