"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { Project } from "@/lib/projects"

interface ProjectDetailModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: ProjectDetailModalProps) {
  const { language } = useLanguage()
  if (!project) return null

  const headerStyle = project.color
    ? { background: `linear-gradient(135deg, ${project.color}88, ${project.color}44)` }
    : undefined

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            {project.context ? `${project.context} — ${project.title}` : project.title}
          </DialogDescription>
          {project.context && (
            <p className="text-sm text-blue-400" aria-hidden="true">{project.context}</p>
          )}
        </DialogHeader>

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-xl"
          />
        ) : (
          <div
            className="w-full h-32 rounded-xl flex items-center justify-center"
            style={headerStyle}
          >
            <span className="text-4xl font-bold text-white/30">
              {project.technologies[0]?.charAt(0) || "P"}
            </span>
          </div>
        )}

        <p className="text-white/75 leading-relaxed">
          {project.longDescription[language]}
        </p>

        {project.howItWorks?.[language]?.length ? (
          <div>
            <h4 className="text-white font-semibold mb-2">Como funciona</h4>
            <ol className="list-decimal list-inside text-white/75 space-y-1">
              {project.howItWorks[language].map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        ) : null}

        {project.technologies.length > 0 && (
          <div>
            <h4 className="text-white font-semibold mb-2">Tecnologias</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.features[language]?.length > 0 && (
          <div>
            <h4 className="text-white font-semibold mb-2">Destaques</h4>
            <ul className="list-disc list-inside text-white/75 space-y-1">
              {project.features[language].map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.codeSnippet && (
          <div>
            <h4 className="text-white font-semibold mb-2">
              Trecho de código
              {project.codeFilename && (
                <span className="text-white/50 font-normal text-sm ml-2">
                  {project.codeFilename}
                </span>
              )}
            </h4>
            <pre className="bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto text-sm text-green-300 font-mono">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}

        {(project.links?.github || project.links?.live) && (
          <div className="flex flex-wrap gap-4 pt-2">
            {project.links?.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <Github size={16} />
                Ver no GitHub
              </Link>
            )}
            {project.links?.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <ExternalLink size={16} />
                Ver projeto ao vivo
              </Link>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
