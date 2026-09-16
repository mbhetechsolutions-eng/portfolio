export interface ProjectScreenshot {
  src: string
  alt: string
}

export interface Project {
  id: string
  name: string
  type: string
  description: string
  technologies: string[]
  features: string[]
  screenshots: ProjectScreenshot[]
  coverImage: string
  liveUrl: string
  githubUrl: string
}

/**
 * Update liveUrl and githubUrl when links become available.
 * Leave a field as an empty string to hide its button automatically.
 */
export const projects: Project[] = [
  {
    id: 'mistlik-solutions',
    name: 'Mistlik Solutions',
    type: 'Engineering and construction company website',
    description:
      'A professional corporate website created to present the company’s engineering services, industries, capabilities and project experience. The website includes contact and quotation-request pathways and is designed to communicate professionalism, technical competence and credibility.',
    technologies: [
      'React',
      'Responsive UI',
      'Supabase Storage',
      'Contact forms',
    ],
    features: [
      'Business website',
      'Contact forms',
      'Request-a-quotation functionality',
      'Supabase Storage for document uploads',
      'Responsive user interface',
    ],
    coverImage: '/projects/mistlik/01.webp',
    liveUrl: 'https://www.mistliksolutions.co.za',
    githubUrl: '',
    screenshots: [
      { src: '/projects/mistlik/01.webp', alt: 'Mistlik Solutions homepage hero section' },
      { src: '/projects/mistlik/02.webp', alt: 'Mistlik Solutions services overview' },
      { src: '/projects/mistlik/03.webp', alt: 'Mistlik Solutions industries section' },
      { src: '/projects/mistlik/04.webp', alt: 'Mistlik Solutions project experience' },
      { src: '/projects/mistlik/05.webp', alt: 'Mistlik Solutions capabilities page' },
      { src: '/projects/mistlik/06.webp', alt: 'Mistlik Solutions contact form' },
      { src: '/projects/mistlik/07.webp', alt: 'Mistlik Solutions quotation request form' },
    ],
  },
  {
    id: 'mnb-chartered-accountants',
    name: 'MNB Chartered Accountants',
    type: 'Corporate website and Accounting Practice Management System',
    description:
      'A comprehensive employee-focused business platform developed for an accounting and auditing organisation. The system supports CRM, accounting, auditing, taxation, HR, projects, timesheets, documents, tasks, quotations and invoicing. Only MNB Chartered Accountants employees can log into the system.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Supabase',
      'PostgreSQL',
    ],
    features: [
      'Role-based access control',
      'Row Level Security',
      'Employee authentication',
      'Registration approval workflow',
      'CRM and practice management modules',
    ],
    coverImage: '/projects/mnb/01.webp',
    liveUrl: '',
    githubUrl: '',
    screenshots: [
      { src: '/projects/mnb/01.webp', alt: 'MNB Chartered Accountants landing page' },
      { src: '/projects/mnb/02.webp', alt: 'MNB employee dashboard overview' },
      { src: '/projects/mnb/03.webp', alt: 'MNB CRM module interface' },
      { src: '/projects/mnb/04.webp', alt: 'MNB accounting and auditing section' },
      { src: '/projects/mnb/05.webp', alt: 'MNB HR and timesheets module' },
      { src: '/projects/mnb/06.webp', alt: 'MNB documents and tasks management' },
      { src: '/projects/mnb/07.webp', alt: 'MNB quotations and invoicing workflow' },
    ],
  },
  {
    id: 'pure-h2o',
    name: 'Pure H2O',
    type: 'Water-products e-commerce platform',
    description:
      'A responsive e-commerce website developed for a purified-water business. Customers can browse products, create accounts, manage their shopping cart, save wishlist items, place orders and track their orders.',
    technologies: [
      'React',
      'Responsive e-commerce UI',
      'PayFast',
      'Customer authentication',
    ],
    features: [
      'Product catalogue',
      'Cart and wishlist',
      'Order tracking',
      'Administration functionality',
      'PayFast payment integration',
    ],
    coverImage: '/projects/pure-h2o/01.webp',
    liveUrl: '',
    githubUrl: '',
    screenshots: [
      { src: '/projects/pure-h2o/01.webp', alt: 'Pure H2O storefront homepage' },
      { src: '/projects/pure-h2o/02.webp', alt: 'Pure H2O product catalogue' },
      { src: '/projects/pure-h2o/03.webp', alt: 'Pure H2O shopping cart' },
      { src: '/projects/pure-h2o/04.webp', alt: 'Pure H2O customer account dashboard' },
      { src: '/projects/pure-h2o/05.webp', alt: 'Pure H2O order tracking page' },
      { src: '/projects/pure-h2o/06.webp', alt: 'Pure H2O administration panel' },
    ],
  },
  {
    id: 'lee-pharmacy',
    name: 'Lee Pharmacy',
    type: 'Full-stack pharmacy e-commerce platform',
    description:
      'A full-stack online pharmacy platform that allows customers to browse products, register, log in, manage a shopping cart and complete checkout. The system also supports order management and administrative product controls.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Stripe Checkout',
    ],
    features: [
      'Authentication and Row Level Security',
      'Product catalogue',
      'Shopping cart',
      'Stripe Checkout',
      'Customer accounts',
      'Administration dashboard',
    ],
    coverImage: '/projects/lee-pharmacy/01.webp',
    liveUrl: '',
    githubUrl: '',
    screenshots: [
      { src: '/projects/lee-pharmacy/01.webp', alt: 'Lee Pharmacy homepage' },
      { src: '/projects/lee-pharmacy/02.webp', alt: 'Lee Pharmacy product browsing' },
      { src: '/projects/lee-pharmacy/03.webp', alt: 'Lee Pharmacy checkout flow' },
      { src: '/projects/lee-pharmacy/04.webp', alt: 'Lee Pharmacy admin dashboard' },
    ],
  },
  {
    id: 'shiluva-landscaping',
    name: 'Shiluva Landscaping',
    type: 'Landscaping website and plant e-commerce catalogue',
    description:
      'A professional landscaping company website with a searchable catalogue containing more than 500 plant records. It includes plant categories, images, sizes, prices, enquiry forms and consultation-booking functionality.',
    technologies: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
    ],
    features: [
      'Searchable product catalogue',
      'More than 500 plant records',
      'Shopping cart',
      'Consultation booking',
      'Form integration and data validation',
    ],
    coverImage: '/projects/shiluva/01.webp',
    liveUrl: '',
    githubUrl: '',
    screenshots: [
      { src: '/projects/shiluva/01.webp', alt: 'Shiluva Landscaping homepage' },
      { src: '/projects/shiluva/02.webp', alt: 'Shiluva plant catalogue with search' },
      { src: '/projects/shiluva/03.webp', alt: 'Shiluva consultation booking form' },
    ],
  },
  {
    id: 'afm-fountain-of-life',
    name: 'AFM Fountain of Life',
    type: 'Church website and role-based church platform',
    description:
      'A church platform providing public information, campuses, ministries, academy programmes, events, announcements and protected member functionality. It supports different workflows for members, pastors and administrators.',
    technologies: [
      'React',
      'Vite',
      'Supabase Authentication',
      'Supabase Row Level Security',
    ],
    features: [
      'Member, pastor and administrator roles',
      'Login and registration',
      'Protected content',
      'Events and announcements',
      'Serverless email integration',
    ],
    coverImage: '/projects/afm-fol/01.webp',
    liveUrl: '',
    githubUrl: '',
    screenshots: [
      { src: '/projects/afm-fol/01.webp', alt: 'AFM Fountain of Life homepage' },
      { src: '/projects/afm-fol/02.webp', alt: 'AFM campuses and ministries section' },
      { src: '/projects/afm-fol/03.webp', alt: 'AFM events and announcements' },
      { src: '/projects/afm-fol/04.webp', alt: 'AFM member portal login' },
      { src: '/projects/afm-fol/05.webp', alt: 'AFM administrator dashboard' },
    ],
  },
  {
    id: 'mectom-sdt',
    name: 'MECTOM SDT (Pty) Ltd',
    type: 'Skills development and training company website',
    description:
      'A professional website for a QCTO-accredited skills development and training provider in South Africa. The platform presents accredited programmes in health and safety, machine operations and trade qualifications, supports course discovery and enrollment pathways, and communicates MECTOM’s training services to learners, employers and communities.',
    technologies: [
      'React',
      'Vite',
      'React Router',
      'Responsive web design',
      'Mobile-first development',
    ],
    features: [
      'Corporate training website',
      'Course catalogue and programme information',
      'Enrollment and contact pathways',
      'Gallery and testimonials',
      'SEO-focused content structure',
      'Fully responsive layout',
    ],
    coverImage: '/projects/mectom/01.webp',
    liveUrl: 'https://mectomskillsdevelopment.co.za/',
    githubUrl: '',
    screenshots: [
      { src: '/projects/mectom/01.webp', alt: 'MECTOM SDT homepage hero and training overview' },
      { src: '/projects/mectom/02.webp', alt: 'MECTOM SDT about page and company profile' },
      { src: '/projects/mectom/03.webp', alt: 'MECTOM SDT courses and accredited programmes' },
      { src: '/projects/mectom/04.webp', alt: 'MECTOM SDT training gallery' },
      { src: '/projects/mectom/05.webp', alt: 'MECTOM SDT contact page' },
    ],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
