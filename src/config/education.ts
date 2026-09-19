export interface Qualification {
  title: string
  institution: string
  details: string[]
  highlights?: string[]
  modules?: string[]
}

export const education: Qualification[] = [
  {
    title: 'Bachelor of Science in Information Technology: Software Engineering',
    institution: 'Eduvos Pretoria Campus',
    details: [
      'NQF Level 7',
      'Study period: 2025–2027',
      'Current status: Second year in 2026',
      'Expected completion: November 2027',
      '2026 completed-module average: 79.4%',
    ],
    highlights: [
      'Programming in Python: 92%',
      'Software Process, Architecture Design and Quality Assurance: 87%',
      'Computer Network and Security: 87%',
      'Procedural Programming: 86%',
      'Software and Security Engineering: 84%',
      'Cloud Based Technologies: 81%',
      'Database Systems: 74%',
    ],
  },
  {
    title: 'Higher Certificate in Computing: Software Development Lifecycles',
    institution: 'Eduvos',
    details: ['NQF Level 5', '120 credits', 'Completed: 2024'],
    modules: [
      'Software Development Lifecycles',
      'Programming Fundamentals',
      'Database Design and Development',
      'Security',
      'Networking',
      'Managing a Successful Computing Project',
    ],
  },
]
