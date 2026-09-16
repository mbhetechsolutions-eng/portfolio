import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CompletePortfolioView from '../components/CompletePortfolioView'

export default function PortfolioPage() {
  useEffect(() => {
    document.title = 'Complete Portfolio | Lungi Mbhetse Malungana'
    return () => {
      document.title = 'Lungi Mbhetse Malungana | Software Engineer Portfolio'
    }
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="section-container">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
          <CompletePortfolioView />
        </div>
      </main>
      <Footer />
    </>
  )
}
