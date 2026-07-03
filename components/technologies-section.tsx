"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { technologies, technologiesContent } from "@/data/site-content"
import { assetPath } from "@/lib/utils"

export function TechnologiesSection() {
  const { language } = useLanguage()
  const content = technologiesContent[language]
  const [offset, setOffset] = useState(0)
  const items = [...technologies, ...technologies]

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev - 1
        return next <= -technologies.length * 200 ? 0 : next
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="technologies" className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🚀 {content.title}
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="relative overflow-hidden py-4">
          <div
            className="flex transition-none"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {items.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center group"
              >
                <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105 rounded-3xl">
                  <div
                    className="px-6 py-5 min-w-[140px] md:min-w-[160px] flex flex-col items-center justify-center gap-3 shadow-lg group-hover:shadow-2xl rounded-3xl"
                    style={{ backgroundColor: tech.color }}
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                      <img
                        src={assetPath(tech.icon)}
                        alt={tech.name}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>
                    <div
                      className="text-xs md:text-sm font-semibold text-center whitespace-nowrap"
                      style={{ color: tech.textColor }}
                    >
                      {tech.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
