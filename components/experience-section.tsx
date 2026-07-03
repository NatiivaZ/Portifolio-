"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { experienceContent, experiences } from "@/data/site-content"

export function ExperienceSection() {
  const { language } = useLanguage()
  const content = experienceContent[language]

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {content.title}
          </h2>
          <p className="text-lg text-white/75 max-w-3xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="glass rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {exp.title[language]}
                  </h3>
                  <p className="text-xl text-blue-400 mb-3">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-white/75">
                    <Calendar size={18} />
                    <span className="text-sm md:text-base">{exp.period[language]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/75">
                    <MapPin size={18} />
                    <span className="text-sm md:text-base">{exp.location[language]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/75">
                    <Briefcase size={18} />
                    <span className="text-sm md:text-base">{exp.type[language]}</span>
                  </div>
                </div>
              </div>

              <p className="text-white/75 leading-relaxed mb-4">
                {exp.description[language]}
              </p>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">{content.achievements}</h4>
                <ul className="list-disc list-inside space-y-1 text-white/75">
                  {exp.achievements[language].map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills[language].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
