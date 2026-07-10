import projectsData from "@/data/projects.json"
import type { Language } from "@/data/site-content"
import { assetPath } from "@/lib/utils"

export interface Project {
  id: string
  title: string
  image: string
  color?: string
  description: Record<Language, string>
  longDescription: Record<Language, string>
  technologies: string[]
  features: Record<Language, string[]>
  howItWorks?: Record<Language, string[]>
  codeSnippet?: string
  codeLanguage?: string
  codeFilename?: string
  category: "product" | "marketing"
  status: string
  year: string
  context?: string
  role: Record<Language, string>
  links?: { live?: string; github?: string }
  gallery?: string[]
  metrics?: Array<{ label: Record<Language, string>; value: string }>
  order: number
}

export function getProjects(): Project[] {
  return (projectsData as { projects: Project[] }).projects
    .map((project) => ({
      ...project,
      image: project.image ? assetPath(project.image) : project.image,
      gallery: project.gallery?.map(assetPath),
    }))
    .sort((a, b) => a.order - b.order)
}
