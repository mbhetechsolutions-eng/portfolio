import { ArrowUp, Mail, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { personalInfo } from '../config/personal'
import SocialLinks from './SocialLinks'

function scrollToHomeSection() {
  const home = document.getElementById('home')
  if (home) {
    home.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { pathname } = useLocation()
  const onHomePage = pathname === '/'

  return (
    <footer className="section-divider bg-white" aria-label="Site footer">
      <div className="section-container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-medium text-slate-900">{personalInfo.fullName}</p>
            <p className="mt-1 text-sm text-slate-600">{personalInfo.title}</p>
            <SocialLinks className="mt-4" />
          </div>

          <div className="flex flex-col flex-wrap gap-4 text-sm text-slate-600 sm:flex-row sm:gap-8">
            <a
              href={personalInfo.emailHref}
              className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-slate-900"
            >
              <Mail size={16} aria-hidden="true" />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.businessEmailHref}
              className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-slate-900"
            >
              <Mail size={16} aria-hidden="true" />
              {personalInfo.businessEmail}
            </a>
            <a
              href={personalInfo.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-slate-900"
            >
              <Phone size={16} aria-hidden="true" />
              {personalInfo.phone}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
          {onHomePage ? (
            <button
              type="button"
              onClick={scrollToHomeSection}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              <ArrowUp size={16} aria-hidden="true" />
              Back to top
            </button>
          ) : (
            <Link
              to="/#home"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              <ArrowUp size={16} aria-hidden="true" />
              Back to top
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}

