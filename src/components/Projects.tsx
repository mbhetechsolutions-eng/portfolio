import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '../config/projects'
import ProjectCard from './ProjectCard'

type ProjectsProps = {
  asPage?: boolean
}

export default function Projects({ asPage = false }: ProjectsProps) {
  const Heading = asPage ? 'h1' : 'h2'
  const featured = getFeaturedProjects()

  return (
    <section id="projects" className="section-divider bg-white py-20 lg:py-28" aria-labelledby="projects-heading">
      <div className="section-container">
        <div className="max-w-3xl">
          <Heading id="projects-heading" className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </Heading>
          <p className="section-subheading">
            Selected production work delivered through MbheTech Solutions, from multi-tenant platforms
            to client websites.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {!asPage && (
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn-secondary inline-flex min-h-11 px-6 py-3">
              View All Projects
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
