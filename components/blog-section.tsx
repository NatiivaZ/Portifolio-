"use client"

import { Grid3x3, List } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { blogContent } from "@/data/site-content"

export function BlogSection() {
  const { language } = useLanguage()
  const content = blogContent[language]

  return (
    <section id="blog" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
              <button className="flex items-center px-6 py-2 rounded-full bg-white/20 text-white">
                <Grid3x3 className="w-4 h-4 mr-2" />
                {content.featured}
              </button>
              <button className="flex items-center px-6 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10">
                <List className="w-4 h-4 mr-2" />
                {content.latest} (0)
              </button>
            </div>
          </div>
        </div>

        <div className="text-center py-12 glass rounded-2xl">
          <p className="text-white/60">{content.empty}</p>
        </div>
      </div>
    </section>
  )
}
