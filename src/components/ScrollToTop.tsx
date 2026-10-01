import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the top when the route pathname changes (not when navigating to a hash on home). */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
