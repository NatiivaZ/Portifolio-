import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { LanguageProvider } from "@/contexts/language-context"
import { siteConfig } from "@/data/site-content"
import "./globals.css"

export const metadata: Metadata = {
  title: siteConfig.title,
  description: "Portfólio de Ruan Natividade — Back-end, Dados, SQL e Automação",
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
