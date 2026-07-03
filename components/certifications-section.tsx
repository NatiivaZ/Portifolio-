"use client"

import Link from "next/link"
import { ExternalLink, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { certifications, certificationsContent } from "@/data/site-content"

export function CertificationsSection() {
  const { language } = useLanguage()
  const content = certificationsContent[language]

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass glass-hover rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    {cert.year && (
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full shrink-0">
                        {cert.year}
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-sm mb-4">{cert.issuer}</p>
                  <div className="flex flex-wrap gap-4">
                    {cert.url && (
                      <Link
                        href={cert.url}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink size={14} />
                        Ver certificado
                      </Link>
                    )}
                    {"pdf" in cert && cert.pdf && (
                      <Link
                        href={cert.pdf}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink size={14} />
                        Baixar PDF
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
