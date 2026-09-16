import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { personalInfo } from '../config/personal'

const sectionLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
]

const routeLinks = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/documents', label: 'Documents' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isStandalonePage = location.pathname === '/documents' || location.pathname === '/portfolio'
  const headerScrolled = isScrolled || isStandalonePage || isOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const handleNavClick = () => setIsOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] border-b transition-all duration-300 ${
          headerScrolled
            ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur-md'
            : 'border-transparent bg-white'
        }`}
      >
        <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-600"
          >
            LM<span className="text-accent-500">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {routeLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href={personalInfo.emailHref} className="btn-primary hidden px-4 py-2 md:inline-flex">
            Get in Touch
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-x-0 top-16 bottom-0 z-[100] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="flex flex-col gap-1 p-4 pb-8">
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-4 py-3.5 text-lg font-medium text-slate-800 transition-colors hover:bg-slate-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {routeLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={handleNavClick}
                  className={`block rounded-lg px-4 py-3.5 text-lg font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 border-t border-slate-200 px-4 pt-4">
              <a
                href={personalInfo.emailHref}
                onClick={handleNavClick}
                className="btn-primary block py-3.5 text-center"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
