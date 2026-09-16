import { Link } from 'react-router-dom'
import { Download, FileStack, LayoutList } from 'lucide-react'
import { personalInfo } from '../config/personal'

const pdfUrl = encodeURI(personalInfo.completePortfolioPdfPath)

export default function PortfolioDownload() {
  return (
    <section
      id="download-portfolio"
      className="section-divider bg-slate-50 py-20 lg:py-28"
      aria-labelledby="download-portfolio-heading"
    >
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 id="download-portfolio-heading" className="section-heading">
            Complete <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subheading">
            View everything in one place on the web—CV, projects, skills, education, and
            documents—or download the same content as a single PDF.
          </p>
        </div>

        <article className="surface-card mt-12 max-w-3xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="icon-well flex-shrink-0">
              <FileStack size={24} aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-medium text-slate-900">Portfolio document</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The portfolio page and PDF include the same material: your CV, full project list,
                academic certificates, and transcripts.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/portfolio" className="btn-primary px-6 py-3">
                  <LayoutList size={18} aria-hidden="true" />
                  View portfolio page
                </Link>
                <a href={pdfUrl} download={personalInfo.completePortfolioPdfFilename} className="btn-secondary px-6 py-3">
                  <Download size={18} aria-hidden="true" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
