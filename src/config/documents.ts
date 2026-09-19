export interface PortfolioDocument {
  id: string
  title: string
  description: string
  /** Path under public/, e.g. /cv/file.pdf */
  filePath: string
  downloadFilename: string
  category: 'Certificate' | 'Transcript'
  /** When false, do not link from the public website (may contain private identifiers). */
  publicAccess: boolean
}

/**
 * Academic documents used for PDF bundle generation and internal reference.
 *
 * TODO (privacy): Before enabling publicAccess, replace files in public/cv/ with redacted copies:
 * - higher certificate.pdf — remove ID number, student number, full address if present
 * - Eduvos Transcript Lungi Malungana 1.pdf — redact student number, ID, address
 * - Eduvos Transcript Lungi Malungana 2.pdf — redact student number, ID, address
 */
export const portfolioDocuments: PortfolioDocument[] = [
  {
    id: 'higher-certificate',
    title: 'Higher Certificate in Computing: Software Development Lifecycles',
    description: 'Completed higher certificate qualification.',
    filePath: '/cv/higher certificate.pdf',
    downloadFilename: 'Lungi_Malungana_Higher_Certificate.pdf',
    category: 'Certificate',
    publicAccess: false,
  },
  {
    id: 'eduvos-transcript-1',
    title: 'Eduvos Transcript, Part 1',
    description: 'Official academic transcript from Eduvos, Pretoria Campus (part 1).',
    filePath: '/cv/Eduvos Transcript Lungi Malungana 1.pdf',
    downloadFilename: 'Lungi_Malungana_Eduvos_Transcript_1.pdf',
    category: 'Transcript',
    publicAccess: false,
  },
  {
    id: 'eduvos-transcript-2',
    title: 'Eduvos Transcript, Part 2',
    description: 'Official academic transcript from Eduvos, Pretoria Campus (part 2).',
    filePath: '/cv/Eduvos Transcript Lungi Malungana 2.pdf',
    downloadFilename: 'Lungi_Malungana_Eduvos_Transcript_2.pdf',
    category: 'Transcript',
    publicAccess: false,
  },
]

export const documentsRecruiterNotice =
  'Verified academic documents are available to recruiters on request.'

export function documentUrl(filePath: string): string {
  return encodeURI(filePath)
}

export function getPublicDocuments(): PortfolioDocument[] {
  return portfolioDocuments.filter((doc) => doc.publicAccess)
}
