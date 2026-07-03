"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { aboutContent, dailyActivities, siteConfig } from "@/data/site-content"
import { Button } from "@/components/ui/button"
import { assetPath } from "@/lib/utils"

export function AboutSection() {
  const { language } = useLanguage()
  const content = aboutContent[language]
  const activities = dailyActivities[language]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center lg:justify-start lg:sticky lg:top-24">
            <div className="relative group">
              <div className="absolute -inset-4 glass rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={assetPath(siteConfig.profileImage)}
                alt={siteConfig.name}
                width={400}
                height={400}
                className="relative rounded-full border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 max-w-[300px] lg:max-w-[400px]"
              />
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {content.title} – {siteConfig.name}
            </h2>

            <div className="space-y-4 text-white/75 leading-relaxed">
              {content.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-3">{content.dailyTitle}</h3>
              <ul className="space-y-2 text-white/75 text-sm leading-relaxed">
                {activities.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-400 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-start mt-8">
              <Button
                onClick={scrollToContact}
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {content.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
