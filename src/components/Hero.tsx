import { ArrowDown, Download, FolderOpen, Mail } from 'lucide-react'
import { BackgroundLines } from '@/components/ui/background-lines'
import { personalInfo } from '@/config/personal'

export default function Hero() {
  return (
    <section id="home" className="section-divider relative pt-16" aria-labelledby="hero-heading">
      <BackgroundLines
        className="flex min-h-[calc(100vh-4rem)] w-full flex-col justify-center"
        svgOptions={{ duration: 14 }}
      >
        <div className="section-container px-4 py-20 lg:py-28">
          {personalInfo.openToOpportunities && (
            <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-sm text-slate-600 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              Open to opportunities
            </div>
          )}

          <h1
            id="hero-heading"
            className="max-w-4xl bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl"
          >
            {personalInfo.fullName}
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-neutral-700 sm:text-xl">
            {personalInfo.title}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            {personalInfo.heroIntro}
          </p>

          <div className="mt-10 flex flex-col flex-wrap gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary px-6 py-3 text-base">
              <FolderOpen size={18} aria-hidden="true" />
              View My Projects
            </a>
            <a
              href={personalInfo.cvPath}
              download={personalInfo.cvFilename}
              className="btn-secondary px-6 py-3 text-base"
            >
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
            <a href="#contact" className="btn-secondary px-6 py-3 text-base">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <a
            href="#about"
            className="mt-16 inline-flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-700"
            aria-label="Scroll to about section"
          >
            <span className="text-xs tracking-wide">Scroll</span>
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </BackgroundLines>
    </section>
  )
}
