import { projects } from '../config/projects'
import ProjectCard from './ProjectCard'

type ProjectsProps = {
  asPage?: boolean
}

export default function Projects({ asPage = false }: ProjectsProps) {
  const Heading = asPage ? 'h1' : 'h2'

  return (
    <section id="projects" className="section-divider bg-white py-20 lg:py-28" aria-labelledby="projects-heading">
      <div className="section-container">
        <div className="max-w-3xl">
          <Heading id="projects-heading" className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </Heading>
          <p className="section-subheading">
            Production applications delivered for real clients through MbheTech Solutions, from
            corporate websites to full-stack business platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
