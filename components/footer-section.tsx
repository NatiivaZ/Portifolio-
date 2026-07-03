"use client"

import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { footerContent, siteConfig } from "@/data/site-content"
import { Button } from "@/components/ui/button"

export function FooterSection() {
  const { language } = useLanguage()
  const content = footerContent[language]
  const year = new Date().getFullYear()

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
  }

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{content.portfolio}</h3>
            <div className="space-y-3">
              {content.links.portfolio.map((link) => (
                <div
                  key={link}
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/75 hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{content.about}</h3>
            <div className="space-y-3">
              {content.links.about.map((link) => (
                <div
                  key={link}
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/75 hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{content.connect}</h3>
            <p className="text-white/75 mb-4">{content.projectQuestion}</p>
            <button
              onClick={copyEmail}
              className="text-white/75 hover:text-white mb-6 transition-colors cursor-pointer"
            >
              {siteConfig.email}
              <span className="text-white/40 text-sm block">(clique para copiar)</span>
            </button>

            <div className="mb-6">
              <Button
                onClick={() => window.open(`mailto:${siteConfig.email}`, "_blank")}
                className="glass glass-hover border border-white/20 text-white font-semibold px-6 py-3 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {content.cta}
              </Button>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <Button
                size="icon"
                onClick={() => window.open(`mailto:${siteConfig.email}`, "_blank")}
                className="glass glass-hover rounded-full border-white/20"
              >
                <Mail className="w-5 h-5 text-white" />
              </Button>
              <Button
                size="icon"
                asChild
                className="glass glass-hover rounded-full border-white/20"
              >
                <Link href={siteConfig.social.linkedin} target="_blank">
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
              </Button>
              <Button
                size="icon"
                asChild
                className="glass glass-hover rounded-full border-white/20"
              >
                <Link href={siteConfig.social.instagram} target="_blank">
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
              </Button>
              <Button
                size="icon"
                asChild
                className="glass glass-hover rounded-full border-white/20"
              >
                <Link href={siteConfig.social.github} target="_blank">
                  <Github className="w-5 h-5 text-white" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm">
            {content.madeBy} {siteConfig.name} © {year}
          </div>
        </div>
      </div>
    </footer>
  )
}
