import { ArrowUp, Mail, Phone } from 'lucide-react'
import { personalInfo } from '../config/personal'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-divider bg-white" aria-label="Site footer">
      <div className="section-container py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-medium text-slate-900">{personalInfo.fullName}</p>
            <p className="mt-1 text-sm text-slate-600">{personalInfo.title}</p>
          </div>

          <div className="flex flex-col flex-wrap gap-4 text-sm text-slate-600 sm:flex-row sm:gap-8">
            <a
              href={personalInfo.emailHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-slate-900"
            >
              <Mail size={16} aria-hidden="true" />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.businessEmailHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-slate-900"
            >
              <Mail size={16} aria-hidden="true" />
              {personalInfo.businessEmail}
            </a>
            <a
              href={personalInfo.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-slate-900"
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
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
