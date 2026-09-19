export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'C++'],
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'HTML5',
      'CSS3',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Responsive web design',
      'Mobile-first development',
    ],
  },
  {
    title: 'Backend and Databases',
    skills: ['Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'MongoDB', 'Firebase', 'REST APIs'],
  },
  {
    title: 'Security and Integrations',
    skills: [
      'User authentication',
      'Role-based access control',
      'Supabase Row Level Security',
      'Protected routes',
      'Input validation',
      'Stripe',
      'PayFast',
      'Web3Forms',
      'File storage and uploads',
    ],
  },
  {
    title: 'Tools and Deployment',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Visual Studio Code',
      'Cursor',
      'Netlify',
      'Vercel',
      'Render',
      'Afrihost',
    ],
  },
]
