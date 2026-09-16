import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { Project } from '../config/projects'

interface ProjectGalleryProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export default function ProjectGallery({ project, isOpen, onClose }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const goTo = useCallback(
    (index: number) => {
      const total = project.screenshots.length
      setCurrentIndex(((index % total) + total) % total)
    },
    [project.screenshots.length],
  )

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
      closeButtonRef.current?.focus()
    }
  }, [isOpen, project.id])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          goPrev()
          break
        case 'ArrowRight':
          goNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, goNext, goPrev])

  if (!isOpen) return null

  const current = project.screenshots[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
      ref={dialogRef}
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close gallery"
      />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <header className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <div>
            <h2 id="gallery-title" className="text-lg font-semibold text-slate-900">
              {project.name}
            </h2>
            <p className="text-sm text-slate-400">
              Screenshot {currentIndex + 1} of {project.screenshots.length}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>
        </header>

        <div className="relative flex min-h-[200px] flex-1 items-center justify-center bg-slate-100 sm:min-h-[400px]">
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            loading="lazy"
            className="max-w-full max-h-[50vh] sm:max-h-[60vh] object-contain"
          />

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 rounded-full bg-white/90 p-2 text-slate-800 shadow-sm transition-colors hover:bg-white sm:left-4 sm:p-3"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 rounded-full bg-white/90 p-2 text-slate-800 shadow-sm transition-colors hover:bg-white sm:right-4 sm:p-3"
            aria-label="Next screenshot"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <nav className="border-t border-slate-200 px-4 py-4 sm:px-6" aria-label="Screenshot thumbnails">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {project.screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-accent-500 ring-1 ring-accent-500/25'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`View screenshot ${index + 1}: ${screenshot.alt}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              >
                <img
                  src={screenshot.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
