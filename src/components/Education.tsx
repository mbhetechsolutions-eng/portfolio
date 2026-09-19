import { Link } from 'react-router-dom'
import { Award, FileText } from 'lucide-react'
import { education } from '../config/education'

type EducationProps = {
  asPage?: boolean
}

export default function Education({ asPage = false }: EducationProps) {
  const Heading = asPage ? 'h1' : 'h2'

  return (
    <section id="education" className="section-divider bg-white py-20 lg:py-28" aria-labelledby="education-heading">
      <div className="section-container">
        <div className="max-w-3xl">
          <Heading id="education-heading" className="section-heading">
            <span className="gradient-text">Education</span>
          </Heading>
          <p className="section-subheading">
            Academic foundation in software engineering with strong results in core technical modules.
          </p>
        </div>

        <div className="mt-12 max-w-3xl space-y-6">
          {education.map((qualification) => (
            <article key={qualification.title} className="surface-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="icon-well flex-shrink-0">
                  <Award size={22} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-medium leading-snug text-slate-900 sm:text-xl">
                    {qualification.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{qualification.institution}</p>

                  <ul className="mt-4 space-y-1">
                    {qualification.details.map((detail) => (
                      <li key={detail} className="text-sm text-slate-500">
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {qualification.highlights && (
                    <div className="mt-6">
                      <h4 className="label-muted mb-3">Academic highlights</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {qualification.highlights.map((result) => (
                          <li
                            key={result}
                            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600"
                          >
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {qualification.modules && (
                    <div className="mt-6">
                      <h4 className="label-muted mb-3">Relevant modules</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {qualification.modules.map((module) => (
                          <li
                            key={module}
                            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600"
                          >
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link to="/documents" className="btn-secondary mt-10 inline-flex min-h-11">
          <FileText size={18} aria-hidden="true" />
          Academic documents
        </Link>
      </div>
    </section>
  )
}
