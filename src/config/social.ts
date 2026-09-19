export interface SocialLink {
  id: 'github' | 'linkedin'
  label: string
  href: string
}

/** TODO: Add your LinkedIn profile URL when ready. Leave empty to hide the button. */
const LINKEDIN_URL = ''

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub profile for mbhetechsolutions-eng',
    href: 'https://github.com/mbhetechsolutions-eng',
  },
  ...(LINKEDIN_URL
    ? [{ id: 'linkedin' as const, label: 'LinkedIn profile', href: LINKEDIN_URL }]
    : []),
]

export function getSocialLink(id: SocialLink['id']): SocialLink | undefined {
  return socialLinks.find((link) => link.id === id)
}
