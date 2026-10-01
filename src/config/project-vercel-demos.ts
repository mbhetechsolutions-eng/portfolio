/**
 * Vercel deployment URLs for portfolio projects that do not have a custom production domain.
 * Mistlik and MECTOM use `liveUrl` in projects.ts for their real sites — do not duplicate here.
 *
 * Add URLs from the Vercel dashboard (Project → Domains) or after `vercel login` + `vercel project ls`.
 */
export const projectVercelDemos: Partial<Record<string, string>> = {
  'mnb-chartered-accountants': 'https://frontend-ivory-delta-63.vercel.app',
  'shiluva-landscaping': 'https://shiluva-landscaping.vercel.app',
  // Not on Vercel team lungis-projects-31d4131c (vercel project ls, Sep 2026):
  // 'rnb-project-management-erp', 'lee-pharmacy', 'pure-h2o'
}

export function isVercelHost(url: string): boolean {
  try {
    const { hostname } = new URL(url)
    return hostname.endsWith('.vercel.app')
  } catch {
    return false
  }
}

export function resolveProjectLiveUrl(projectId: string, liveUrl: string): string {
  const trimmed = liveUrl.trim()
  if (trimmed.length > 0) return trimmed
  const demo = projectVercelDemos[projectId]?.trim()
  return demo && demo.length > 0 ? demo : ''
}
