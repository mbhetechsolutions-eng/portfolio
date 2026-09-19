import { useEffect } from 'react'
import { Mail } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { documentsRecruiterNotice, getPublicDocuments } from '../config/documents'
import { personalInfo } from '../config/personal'

export default function DocumentsPage() {
  useEffect(() => {
    document.title = 'Documents | Lungi Mbhetse Malungana'
    return () => {
      document.title = 'Lungi Mbhetse Malungana | Software Engineer Portfolio'
    }
  }, [])

  const publicDocuments = getPublicDocuments()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="section-container">
          <header className="max-w-3xl">
            <h1 className="section-heading">
              Academic <span className="gradient-text">Documents</span>
            </h1>
            <p className="section-subheading">{documentsRecruiterNotice}</p>
          </header>

          <article className="surface-card mt-12 max-w-3xl p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-slate-600">
              Certificates and transcripts may contain personal identifiers. For privacy, they are not
              published on this website. Recruiters and hiring managers may request verified copies by
              email.
            </p>
            <a href={personalInfo.emailHref} className="btn-primary mt-6 inline-flex min-h-11">
              <Mail size={18} aria-hidden="true" />
              Request documents by email
            </a>
          </article>

          {publicDocuments.length > 0 && (
            <p className="mt-8 text-sm text-slate-500">
              {publicDocuments.length} redacted document(s) available for public download.
            </p>
          )}

          <p className="mt-10 text-sm text-slate-500">
            For my CV, use the{' '}
            <a href="/#home" className="text-slate-700 transition-colors hover:text-slate-900">
              Download CV
            </a>{' '}
            button on the home page or visit the{' '}
            <a href="/portfolio" className="text-slate-700 transition-colors hover:text-slate-900">
              complete portfolio page
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
