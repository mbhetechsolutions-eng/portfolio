import { useState } from 'react'

import { ExternalLink, Code2, Images } from 'lucide-react'

import type { Project } from '../config/projects'
import { isVercelHost } from '../config/project-vercel-demos'

import ProjectGallery from './ProjectGallery'

import ProjectCoverImage from './ProjectCoverImage'



interface ProjectCardProps {

  project: Project

}



export default function ProjectCard({ project }: ProjectCardProps) {

  const [galleryOpen, setGalleryOpen] = useState(false)



  const hasLiveUrl = project.liveUrl.trim().length > 0

  const liveLinkLabel = hasLiveUrl && isVercelHost(project.liveUrl) ? 'View demo' : 'Live Site'

  const hasGithubUrl = project.githubUrl.trim().length > 0

  const { cardSummary } = project



  return (

    <>

      <article className="group surface-card flex flex-col overflow-hidden transition-colors hover:border-slate-300">

        <div className="relative aspect-video overflow-hidden bg-slate-100">

          <ProjectCoverImage

            src={project.coverImage}

            alt={`${project.name}, ${project.type}`}

            className="h-full w-full object-cover object-top"

          />

          {project.statusLabel && (

            <span className="absolute left-3 top-3 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-900">

              {project.statusLabel}

            </span>

          )}

        </div>



        <div className="flex flex-1 flex-col p-6">

          <p className="label-muted">{project.type}</p>

          <h3 className="mt-2 text-xl font-medium text-slate-900">{project.name}</h3>



          <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-slate-600">

            <li>

              <span className="font-medium text-slate-700">Purpose: </span>

              {cardSummary.problem}

            </li>

            <li>

              <span className="font-medium text-slate-700">Built: </span>

              {cardSummary.built}

            </li>

            <li>

              <span className="font-medium text-slate-700">Technical: </span>

              {cardSummary.technical}

            </li>

            {cardSummary.result && (

              <li>

                <span className="font-medium text-slate-700">Result: </span>

                {cardSummary.result}

              </li>

            )}

          </ul>



          <div className="mt-4">

            <h4 className="label-muted mb-2">Technologies</h4>

            <div className="flex flex-wrap gap-2">

              {project.technologies.slice(0, 6).map((tech) => (

                <span

                  key={tech}

                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"

                >

                  {tech}

                </span>

              ))}

              {project.technologies.length > 6 && (

                <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-500">

                  +{project.technologies.length - 6} more

                </span>

              )}

            </div>

          </div>



          <div className="mt-6 flex flex-wrap gap-3">

            <button type="button" onClick={() => setGalleryOpen(true)} className="btn-soft min-h-11">

              <Images size={16} aria-hidden="true" />

              View Gallery ({project.screenshots.length})

            </button>



            {hasLiveUrl && (

              <a

                href={project.liveUrl}

                target="_blank"

                rel="noopener noreferrer"

                className="btn-secondary min-h-11 px-4 py-2"

              >

                <ExternalLink size={16} aria-hidden="true" />

                {liveLinkLabel}

              </a>

            )}



            {hasGithubUrl && (

              <a

                href={project.githubUrl}

                target="_blank"

                rel="noopener noreferrer"

                className="btn-secondary min-h-11 px-4 py-2"

              >

                <Code2 size={16} aria-hidden="true" />

                GitHub

              </a>

            )}

          </div>

        </div>

      </article>



      <ProjectGallery
        key={`${project.id}-${galleryOpen}`}
        project={project}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />

    </>

  )

}


