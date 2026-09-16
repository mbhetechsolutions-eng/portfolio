import { useState } from 'react'
import { ExternalLink, Code2, Images } from 'lucide-react'
import type { Project } from '../config/projects'
import ProjectGallery from './ProjectGallery'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false)

  const hasLiveUrl = project.liveUrl.trim().length > 0
  const hasGithubUrl = project.githubUrl.trim().length > 0

  return (
    <>
      <article className="group surface-card flex flex-col overflow-hidden transition-colors hover:border-slate-300">
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          <img
            src={project.coverImage}
            alt={`${project.name}, ${project.type}`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="label-muted">{project.type}</p>
          <h3 className="mt-2 text-xl font-medium text-slate-900">{project.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>

          <div className="mt-4">
            <h4 className="label-muted mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="label-muted mb-2">Key Features</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs text-slate-600">
                  <span className="mt-0.5 text-slate-400">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={() => setGalleryOpen(true)} className="btn-soft">
              <Images size={16} aria-hidden="true" />
              View Gallery ({project.screenshots.length})
            </button>

            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Site
              </a>
            )}

            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2"
              >
                <Code2 size={16} aria-hidden="true" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>

      <ProjectGallery
        project={project}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </>
  )
}
