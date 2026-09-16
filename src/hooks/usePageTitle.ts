import { useEffect } from 'react'

const defaultTitle = 'Lungi Mbhetse Malungana | Software Engineer Portfolio'

export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | Lungi Mbhetse Malungana` : defaultTitle
    return () => {
      document.title = defaultTitle
    }
  }, [pageTitle])
}
