"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { portfolioContent } from "@/data/site-content"
import { getProjects, type Project } from "@/lib/projects"
import { ProjectDetailModal } from "@/components/project-detail-modal"
import { cn } from "@/lib/utils"

export function PortfolioSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]
  const projects = getProjects()
  const [tab, setTab] = useState<"product" | "marketing">("product")
  const [selected, setSelected] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = projects.filter((p) => p.category === tab)

  const openProject = (project: Project) => {
    setSelected(project)
    setModalOpen(true)
  }

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-2">
            {content.subtitle}
          </p>
          <p className="text-sm text-white/50 mb-8">
            {projects.length} projetos · Python, SQL, Selenium, Streamlit
          </p>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setTab("product")}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all duration-300",
                tab === "product"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
            >
              {content.tabProjects}
            </button>
            <button
              onClick={() => setTab("marketing")}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all duration-300",
                tab === "marketing"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
            >
              {content.tabBI}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <button
              key={project.id}
              onClick={() => openProject(project)}
              className="glass glass-hover rounded-2xl overflow-hidden text-left group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div
                className="relative h-40 overflow-hidden flex items-center justify-center"
                style={{
                  background: project.color
                    ? `linear-gradient(135deg, ${project.color}, ${project.color}99)`
                    : "linear-gradient(135deg, #2563EB, #1E40AF)",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-center px-4">
                    <div className="text-3xl font-bold text-white/20 mb-2">
                      {project.technologies[0]}
                    </div>
                    {project.context && (
                      <span className="text-xs text-white/70 bg-black/20 px-2 py-1 rounded-full">
                        {project.context}
                      </span>
                    )}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-white/70 line-clamp-2 mb-3">
                  {project.description[language]}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-white/10 text-white/60 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-white/60">{content.viewDetails} →</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selected}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
