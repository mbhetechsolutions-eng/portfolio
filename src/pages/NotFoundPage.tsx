import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <p className="text-7xl font-semibold text-slate-300">404</p>
      <h1 className="mt-4 text-2xl font-medium text-slate-900 sm:text-3xl">Page Not Found</h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <Home size={16} aria-hidden="true" />
        Back to Home
      </Link>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="mt-4 inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Go back
      </button>
    </div>
  )
}
