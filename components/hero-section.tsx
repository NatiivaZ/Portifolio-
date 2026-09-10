"use client"

import Link from "next/link"
import { ChevronDown, Github, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { heroContent, siteConfig } from "@/data/site-content"
import { Card } from "@/components/ui/card"
import { assetPath } from "@/lib/utils"

const emojis = ["📊", "🐍", "⚙️", "🔗"]

export function HeroSection() {
  const { language } = useLanguage()
  const content = heroContent[language]

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${assetPath(siteConfig.backgroundImage)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center mb-4 sm:mb-8">
          <div className="glass rounded-full p-1 mr-3 sm:mr-4">
            <img
              src={assetPath(siteConfig.profileImage)}
              alt={siteConfig.name}
              width={40}
              height={40}
              className="rounded-full sm:w-[60px] sm:h-[60px]"
            />
          </div>
          <p className="text-sm sm:text-lg text-white/75">
            {content.welcome}{" "}
            <strong>{content.welcomeHighlight}</strong> 👋
          </p>
        </div>

        <div className="mb-4">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs sm:text-sm text-green-400 border border-green-500/30">
            {content.badge}
          </span>
        </div>

        <div className="relative mb-6 sm:mb-12">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-2 mb-4">
            {content.title}
            <br />
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 block mt-4">
              {content.subtitle}
            </span>
          </h1>

          <div className="absolute -top-8 sm:-top-12 -left-4 sm:-left-8 md:-left-12 animate-float-1">
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-all"
            >
              <Linkedin className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#0077b5]" />
            </Link>
          </div>

          <div className="absolute top-[60%] -translate-y-1/2 -left-16 sm:-left-20 md:-left-28 lg:-left-32 animate-float-2">
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-all"
            >
              <Instagram className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#E4405F]" />
            </Link>
          </div>

          <div className="absolute -top-8 sm:-top-12 -right-4 sm:-right-8 animate-float-3">
            <Link
              href={siteConfig.social.github}
              target="_blank"
              className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-12 px-2">
          {content.highlights.map((text, i) => (
            <Card key={i} className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="text-lg sm:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all">
                  {emojis[i]}
                </div>
                <p className="font-semibold text-white text-xs sm:text-base">{text}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={scrollToPortfolio}
            className="glass glass-hover border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all"
          >
            Ver projetos
          </button>
          <button
            onClick={scrollToContact}
            className="text-white/70 hover:text-white px-6 py-3 transition-colors"
          >
            Ou entre em contato
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group"
          >
            <div className="glass glass-hover rounded-full p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
              <ChevronDown className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
