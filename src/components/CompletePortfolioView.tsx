import { Download, ExternalLink, FileText, Mail, MapPin, Phone } from 'lucide-react'
import { documentUrl, portfolioDocuments } from '../config/documents'
import { education } from '../config/education'
import { personalInfo } from '../config/personal'
import { projects } from '../config/projects'
import { skillGroups } from '../config/skills'
import ProjectCard from './ProjectCard'

const completePdfUrl = encodeURI(personalInfo.completePortfolioPdfPath)

const toc = [
  { id: 'portfolio-cv', label: 'CV' },
  { id: 'portfolio-about', label: 'About' },
  { id: 'portfolio-education', label: 'Education' },
  { id: 'portfolio-skills', label: 'Skills' },
  { id: 'portfolio-projects', label: 'Projects' },
  { id: 'portfolio-documents', label: 'Documents' },
  { id: 'portfolio-contact', label: 'Contact' },
] as const

export default function CompletePortfolioView() {
  return (
    <article className="mx-auto max-w-4xl">
      <header className="border-b border-slate-200 pb-10">
        <p className="label-muted">Complete portfolio</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {personalInfo.fullName}
        </h1>
        <p className="mt-3 text-lg text-slate-600">{personalInfo.title}</p>
        <p className="mt-2 text-sm text-slate-500">{personalInfo.location}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={completePdfUrl}
            download={personalInfo.completePortfolioPdfFilename}
            className="btn-primary px-5 py-2.5"
          >
            <Download size={18} aria-hidden="true" />
            Download full PDF
          </a>
          <a href={completePdfUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary px-5 py-2.5">
            <ExternalLink size={18} aria-hidden="true" />
            Open PDF
          </a>
        </div>

        <nav className="mt-8" aria-label="Portfolio contents">
          <p className="label-muted mb-3">On this page</p>
          <ul className="flex flex-wrap gap-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="portfolio-cv" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="section-heading text-2xl">CV</h2>
        <p className="section-subheading mt-2">
          Professional CV ({personalInfo.cvFilename}). Download or view below.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={personalInfo.cvPath} download={personalInfo.cvFilename} className="btn-secondary px-4 py-2">
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
          <a
            href={personalInfo.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-soft"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Open CV in new tab
          </a>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <iframe
            title={`CV — ${personalInfo.fullName}`}
            src={personalInfo.cvPath}
            className="h-[min(80vh,900px)] w-full bg-white"
          />
        </div>
      </section>

      <section id="portfolio-about" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="section-heading text-2xl">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,12rem)_1fr] lg:items-start">
          <figure>
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.profileImageAlt}
              width={400}
              height={500}
              className="aspect-[4/5] w-full max-w-[12rem] rounded-xl border border-slate-200 object-cover object-top"
            />
          </figure>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio-education" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="section-heading text-2xl">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="mt-8 space-y-6">
          {education.map((qualification) => (
            <div key={qualification.title} className="surface-card p-6">
              <h3 className="text-lg font-medium text-slate-900">{qualification.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{qualification.institution}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600">
                {qualification.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {qualification.highlights && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {qualification.highlights.map((result) => (
                    <li
                      key={result}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio-skills" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="section-heading text-2xl">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="surface-card p-5">
              <h3 className="font-medium text-slate-900">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio-projects" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="section-heading text-2xl">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subheading mt-2">
          All {projects.length} production projects from this portfolio, with screenshots and details.
        </p>
        <div className="mt-10 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="portfolio-documents" className="scroll-mt-24 border-b border-slate-200 py-12">
        <h2 className="section-heading text-2xl">
          Academic <span className="gradient-text">Documents</span>
        </h2>
        <ul className="mt-8 space-y-4">
          {portfolioDocuments.map((doc) => {
            const url = documentUrl(doc.filePath)
            return (
              <li key={doc.id} className="surface-card p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <div className="icon-well flex-shrink-0">
                      <FileText size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="label-muted">{doc.category}</p>
                      <h3 className="mt-1 font-medium text-slate-900">{doc.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{doc.description}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn-soft">
                      View
                    </a>
                    <a href={url} download={doc.downloadFilename} className="btn-secondary px-4 py-2">
                      Download
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section id="portfolio-contact" className="scroll-mt-24 py-12">
        <h2 className="section-heading text-2xl">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <ul className="mt-8 space-y-4 text-sm text-slate-600">
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-slate-400" aria-hidden="true" />
            <a href={personalInfo.emailHref} className="hover:text-slate-900">
              {personalInfo.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-slate-400" aria-hidden="true" />
            <a href={personalInfo.businessEmailHref} className="hover:text-slate-900">
              {personalInfo.businessEmail}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-slate-400" aria-hidden="true" />
            <a href={personalInfo.phoneHref} className="hover:text-slate-900">
              {personalInfo.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={18} className="text-slate-400" aria-hidden="true" />
            {personalInfo.location}
          </li>
        </ul>
        <a href="/#contact" className="btn-primary mt-8 inline-flex">
          Send a message
        </a>
      </section>
    </article>
  )
}
