import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import PortfolioDownload from '../components/PortfolioDownload'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <PortfolioDownload />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
