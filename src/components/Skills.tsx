import { skillGroups } from '../config/skills'

type SkillsProps = {
  asPage?: boolean
}

export default function Skills({ asPage = false }: SkillsProps) {
  const Heading = asPage ? 'h1' : 'h2'

  return (
    <section id="skills" className="section-divider bg-slate-50 py-20 lg:py-28" aria-labelledby="skills-heading">
      <div className="section-container">
        <div className="max-w-3xl">
          <Heading id="skills-heading" className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </Heading>
          <p className="section-subheading">
            Technologies and tools I use to design, build, secure and deploy production web
            applications.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card p-6">
              <h3 className="mb-4 text-base font-medium text-slate-900">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
