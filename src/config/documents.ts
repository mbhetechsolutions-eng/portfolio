export interface PortfolioDocument {
  id: string
  title: string
  description: string
  /** Path under public/, e.g. /cv/file.pdf */
  filePath: string
  downloadFilename: string
  category: 'Certificate' | 'Transcript'
}

/**
 * Academic documents shown on the Documents page.
 * Place PDF files in public/cv/ and update paths here if filenames change.
 */
export const portfolioDocuments: PortfolioDocument[] = [
  {
    id: 'higher-certificate',
    title: 'Higher Certificate in Software Development Life Cycles',
    description: 'Completed higher certificate qualification in software development life cycles.',
    filePath: '/cv/higher certificate.pdf',
    downloadFilename: 'Lungi_Malungana_Higher_Certificate.pdf',
    category: 'Certificate',
  },
  {
    id: 'eduvos-transcript-1',
    title: 'Eduvos Transcript, Part 1',
    description: 'Official academic transcript from Eduvos, Pretoria Campus (part 1).',
    filePath: '/cv/Eduvos Transcript Lungi Malungana 1.pdf',
    downloadFilename: 'Lungi_Malungana_Eduvos_Transcript_1.pdf',
    category: 'Transcript',
  },
  {
    id: 'eduvos-transcript-2',
    title: 'Eduvos Transcript, Part 2',
    description: 'Official academic transcript from Eduvos, Pretoria Campus (part 2).',
    filePath: '/cv/Eduvos Transcript Lungi Malungana 2.pdf',
    downloadFilename: 'Lungi_Malungana_Eduvos_Transcript_2.pdf',
    category: 'Transcript',
  },
]

export function documentUrl(filePath: string): string {
  return encodeURI(filePath)
}
