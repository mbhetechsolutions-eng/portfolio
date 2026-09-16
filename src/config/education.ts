export interface Qualification {
  title: string
  institution: string
  details: string[]
  highlights?: string[]
}

export const education: Qualification[] = [
  {
    title: 'Bachelor of Science in Information Technology: Software Engineering',
    institution: 'Eduvos, Pretoria Campus',
    details: [
      'NQF Level 7',
      'Expected completion: 2027',
      'Current academic average: 79.4%',
    ],
    highlights: [
      'Programming in Python: 92%',
      'Software Process, Architecture Design and Quality Assurance: 87%',
      'Software and Security Engineering: 84%',
      'Database Systems: 74%',
    ],
  },
  {
    title: 'Higher Certificate in Software Development Life Cycles',
    institution: 'Completed',
    details: ['Status: Completed'],
  },
]
