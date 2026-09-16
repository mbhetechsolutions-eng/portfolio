import { useEffect } from 'react'
import { Download, ExternalLink, FileText } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { documentUrl, portfolioDocuments } from '../config/documents'
export default function DocumentsPage() {
  useEffect(() => {
    document.title = 'Documents | Lungi Mbhetse Malungana'
    return () => {
      document.title = 'Lungi Mbhetse Malungana | Software Engineer Portfolio'
    }
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="section-container">
          <header className="max-w-3xl">
            <h1 className="section-heading">
              Academic <span className="gradient-text">Documents</span>
            </h1>
            <p className="section-subheading">
              Certificates and transcripts supporting my software engineering studies and
              qualifications. Open any document in a new tab or download a copy.
            </p>
          </header>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label="Document list">
            {portfolioDocuments.map((doc) => {
              const url = documentUrl(doc.filePath)
              return (
                <li key={doc.id}>
                  <article className="surface-card flex h-full flex-col p-6">
                    <div className="flex items-start gap-4">
                      <div className="icon-well flex-shrink-0">
                        <FileText size={22} aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="label-muted">{doc.category}</p>
                        <h2 className="mt-1 text-lg font-medium leading-snug text-slate-900">
                          {doc.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                      {doc.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-soft"
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                        View PDF
                      </a>
                      <a
                        href={url}
                        download={doc.downloadFilename}
                        className="btn-secondary px-4 py-2"
                      >
                        <Download size={16} aria-hidden="true" />
                        Download
                      </a>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          <p className="mt-10 text-sm text-slate-500">
            For my professional CV, use the{' '}
            <a href="/#home" className="text-slate-700 transition-colors hover:text-slate-900">
              Download CV
            </a>{' '}
            button on the home page, or the{' '}
            <a href="/portfolio" className="text-slate-700 transition-colors hover:text-slate-900">
              complete portfolio page
            </a>{' '}
            for everything in one file.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
