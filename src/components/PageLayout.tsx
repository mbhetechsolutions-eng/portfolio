import type { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

type PageLayoutProps = {
  children: ReactNode
  /** Pass empty string for home (hero handles top spacing). */
  mainClassName?: string
}

export default function PageLayout({ children, mainClassName }: PageLayoutProps) {
  const mainClasses =
    mainClassName === ''
      ? undefined
      : (mainClassName ?? 'min-h-screen bg-white pt-16')

  return (
    <>
      <Navigation />
      <main className={mainClasses}>{children}</main>
      <Footer />
    </>
  )
}
