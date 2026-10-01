export interface ProjectScreenshot {
  src: string
  alt: string
}

export interface ProjectCardSummary {
  problem: string
  built: string
  technical: string
  result?: string
}

import { resolveProjectLiveUrl } from './project-vercel-demos'

export interface Project {
  id: string
  name: string
  type: string
  description: string
  cardSummary: ProjectCardSummary
  technologies: string[]
  features: string[]
  implementedModules?: string[]
  screenshots: ProjectScreenshot[]
  coverImage: string
  liveUrl: string
  githubUrl: string
  statusLabel?: string
}

/** Placeholder until RNB screenshots are added to public/projects/rnb/01.webp–05.webp */
export const RNB_PLACEHOLDER_IMAGE = '/projects/rnb/placeholder.svg'

const rnbScreenshotAlts = [
  'RNB platform overview dashboard (screenshot pending)',
  'RNB client CRM module (screenshot pending)',
  'RNB projects workflow (screenshot pending)',
  'RNB tasks and milestones view (screenshot pending)',
  'RNB My Work dashboard (screenshot pending)',
] as const

/**
 * Update liveUrl and githubUrl when links become available.
 * Leave a field as an empty string to hide its button automatically.
 */
export const projects: Project[] = [
  {
    id: 'rnb-project-management-erp',
    name: 'RNB Project Management and ERP Platform',
    type: 'Multi-tenant project management and ERP-style business platform',
    description:
      'A multi-tenant project management and ERP-style platform developed to help organisations manage clients, projects, teams, tasks, milestones, approvals and daily operational workflows from one secure workspace. The system uses organisation-scoped data, role-based permissions and secure database policies to ensure that users only access information belonging to their organisation.',
    cardSummary: {
      problem:
        'Organisations need one secure workspace for clients, projects, tasks and operational approvals.',
      built:
        'A multi-tenant ERP-style platform with CRM, project workflows, tasks, milestones and dashboards.',
      technical: 'Organisation-scoped data with Supabase Row Level Security and role-based permissions.',
      result: 'Multi-tenant organisation workspaces with isolated data per organisation.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Supabase Authentication',
      'Row Level Security',
    ],
    features: [
      'Multi-tenant organisation workspaces',
      'Organisation-scoped data access',
      'Client CRM',
      'Project creation and management',
      'Project staffing',
      'Tasks and milestones',
      'My Work dashboard',
      'Role-based permissions',
      'Approval workflows',
      'Project health monitoring',
      'Responsive dashboards',
      'Row Level Security',
    ],
    implementedModules: [
      'Authentication and protected routes',
      'Organisation configuration',
      'Overview dashboard',
      'Client CRM',
      'Projects workflow',
      'Tasks',
      'Milestones',
      'My Work',
      'Notifications and approvals summaries',
    ],
    coverImage: RNB_PLACEHOLDER_IMAGE,
    liveUrl: '',
    githubUrl: '',
    statusLabel: 'In Active Development',
    screenshots: rnbScreenshotAlts.map((alt, index) => ({
      src: `/projects/rnb/0${index + 1}.webp`,
      alt,
    })),
  },
  {
    id: 'mnb-chartered-accountants',
    name: 'MNB Chartered Accountants Practice Management System',
    type: 'Corporate website and accounting practice management system',
    description:
      'A comprehensive employee-focused business platform developed for an accounting and auditing organisation. The system supports CRM, accounting, auditing, taxation, HR, projects, timesheets, documents, tasks, quotations and invoicing. Only MNB Chartered Accountants employees can log into the system.',
    cardSummary: {
      problem: 'An accounting firm needed one secure system for practice operations and employee workflows.',
      built: 'A full practice management platform with CRM, HR, documents, billing and employee portals.',
      technical: 'Role-based access control with 13 employee roles and Supabase Row Level Security.',
      result: '13 employee roles governing access across practice management modules.',
    },
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
    id: 'mistlik-solutions',
    name: 'Mistlik Solutions',
    type: 'Engineering and construction company website',
    description:
      'A professional corporate website created to present the company’s engineering services, industries, capabilities and project experience. The website includes contact and quotation-request pathways and is designed to communicate professionalism, technical competence and credibility.',
    cardSummary: {
      problem: 'An engineering firm needed a credible web presence with lead-generation pathways.',
      built: 'A corporate React site with services, industries, capabilities and quotation requests.',
      technical: 'Supabase Storage for document uploads and responsive layout across devices.',
      result: 'Ten main public routes covering services, industries and contact flows.',
    },
    technologies: ['React', 'Responsive UI', 'Supabase Storage', 'Contact forms'],
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
    id: 'shiluva-landscaping',
    name: 'Shiluva Landscaping',
    type: 'Landscaping website and plant e-commerce catalogue',
    description:
      'A professional landscaping company website with a searchable catalogue containing more than 500 plant records. It includes plant categories, images, sizes, prices, enquiry forms and consultation-booking functionality.',
    cardSummary: {
      problem: 'A landscaping business needed a searchable plant catalogue and enquiry flows online.',
      built: 'A TypeScript React site with catalogue search, cart and consultation booking.',
      technical: 'Structured catalogue data with validation on enquiry and booking forms.',
      result: 'More than 500 plant records in a searchable catalogue.',
    },
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
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
    id: 'lee-pharmacy',
    name: 'Lee Pharmacy',
    type: 'Full-stack pharmacy e-commerce platform',
    description:
      'A full-stack online pharmacy platform that allows customers to browse products, register, log in, manage a shopping cart and complete checkout. The system also supports order management and administrative product controls.',
    cardSummary: {
      problem: 'A pharmacy needed secure online sales with checkout and admin controls.',
      built: 'Full-stack e-commerce with accounts, cart, Stripe Checkout and admin dashboard.',
      technical: 'Supabase authentication, PostgreSQL and Row Level Security for customer data.',
    },
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Stripe Checkout'],
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
    id: 'pure-h2o',
    name: 'Pure H2O',
    type: 'Water-products e-commerce platform',
    description:
      'A responsive e-commerce website developed for a purified-water business. Customers can browse products, create accounts, manage their shopping cart, save wishlist items, place orders and track their orders.',
    cardSummary: {
      problem: 'A water retailer needed online ordering with accounts and payment integration.',
      built: 'Responsive e-commerce with catalogue, cart, wishlist and order tracking.',
      technical: 'PayFast payment integration with customer authentication.',
    },
    technologies: ['React', 'Responsive e-commerce UI', 'PayFast', 'Customer authentication'],
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
    id: 'afm-fountain-of-life',
    name: 'AFM Fountain Of Life',
    type: 'Church website and multi-campus ministry platform',
    description:
      'A Christ-centred church website for AFM Fountain Of Life, presenting vision and mission, leadership, faith and values, multiple campuses, sermon media, and events so visitors can explore the church and plan a visit.',
    cardSummary: {
      problem: 'A multi-campus church needed one welcoming site for ministry story, locations, and engagement.',
      built: 'A responsive church site with campus hubs, sermon highlights, events, and leadership profiles.',
      technical: 'React and Vite with a mobile-first layout, deployed on Vercel.',
    },
    technologies: ['React', 'Vite', 'Responsive web design', 'Mobile-first development'],
    features: [
      'Homepage with vision and mission',
      'Visionaries and leadership section',
      'Multi-campus directory and visit planning',
      'Sermon and media highlights',
      'Events and announcements',
      'Fully responsive layout',
    ],
    coverImage: '/projects/afm-fol/01.webp',
    liveUrl: 'https://afm-fountain-of-life.vercel.app/',
    githubUrl: '',
    screenshots: [
      { src: '/projects/afm-fol/01.webp', alt: 'AFM Fountain Of Life homepage welcome section' },
      { src: '/projects/afm-fol/02.webp', alt: 'AFM about, visionaries and faith and values' },
      { src: '/projects/afm-fol/03.webp', alt: 'AFM campuses and plan your visit' },
      { src: '/projects/afm-fol/04.webp', alt: 'AFM latest sermon and media section' },
      { src: '/projects/afm-fol/05.webp', alt: 'AFM events and community updates' },
    ],
  },
  {
    id: 'ndzhuti-skills-development',
    name: 'Ndzhuti Skills Development and Projects',
    type: 'Skills development and training company website',
    description:
      'A professional website for Ndzhuti Skills Development and Projects, presenting training programmes and services, guiding visitors through programme information, and providing clear contact and enrollment pathways for learners and partners.',
    cardSummary: {
      problem: 'A skills development provider needed a credible web presence with programme and enrollment pathways.',
      built: 'A responsive marketing site with services overview, programme highlights, and contact flows.',
      technical: 'React and Vite with a mobile-first layout deployed on Vercel.',
    },
    technologies: ['React', 'Vite', 'Responsive web design', 'Mobile-first development'],
    features: [
      'Corporate skills development website',
      'Programme and services presentation',
      'Contact and enrollment call-to-actions',
      'Fully responsive layout',
    ],
    coverImage: '/projects/ndzhuti/01.webp',
    liveUrl: 'https://ndzhuti-skills-development-and-proj.vercel.app/',
    githubUrl: '',
    screenshots: [
      {
        src: '/projects/ndzhuti/01.webp',
        alt: 'Ndzhuti Skills Development and Projects homepage hero with programmes and enroll call-to-action',
      },
    ],
  },
  {
    id: 'mectom-sdt',
    name: 'MECTOM SDT (Pty) Ltd',
    type: 'Skills development and training company website',
    description:
      'A professional website for a QCTO-accredited skills development and training provider in South Africa. The platform presents accredited programmes in health and safety, machine operations and trade qualifications, supports course discovery and enrollment pathways, and communicates MECTOM’s training services to learners, employers and communities.',
    cardSummary: {
      problem: 'A training provider needed to present accredited programmes and enrollment online.',
      built: 'Corporate training site with course catalogue, gallery and contact pathways.',
      technical: 'React Router with mobile-first responsive layout and SEO-focused structure.',
    },
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
].map((project) => ({
  ...project,
  liveUrl: resolveProjectLiveUrl(project.id, project.liveUrl),
}))

export const FEATURED_PROJECT_IDS = [
  'rnb-project-management-erp',
  'mnb-chartered-accountants',
  'mistlik-solutions',
  'shiluva-landscaping',
] as const

export function getFeaturedProjects(): Project[] {
  return FEATURED_PROJECT_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is Project => p !== undefined,
  )
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

