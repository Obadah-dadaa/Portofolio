const B = import.meta.env.BASE_URL

export const PROJECTS = [
  {
    title: 'ERP System – Al Mutakamela',
    description:
      'Contributing to a company-wide ERP system supporting multiple departments: HR (employee records, attendance tracking, role-based access control), Finance (transaction management, invoicing, reporting, and fee structures), Operations (vehicle inspection records, testing workflows, and service tracking), and IT (system monitoring and access management). Building and maintaining RESTful APIs powering internal ERP modules and the company\'s mobile application. Translating Figma UI/UX designs into responsive frontend interfaces, handling database optimization, and participating in workflow automation and inter-department approval chains.',
    image: `${B}img/web-development.jpg`,
    tags: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'Ajax', 'SQL Server'],
    demo: null,
    github: null,
    featured: true,
  },
  {
    title: 'Car Buying & Selling System',
    description:
      'A dynamic web application for buying and selling cars, incorporating features such as search filters, user authentication, and real-time updates using Ajax. The platform enables users to subscribe and select a package, post or browse car listings, and communicate directly with advertisers through an in-app chat system. Supported by a dedicated mobile application and a comprehensive admin dashboard for full site control and analytics.',
    image: `${B}img/marota4.png`,
    tags: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'Ajax'],
    demo: 'https://marota.nobalaa.com',
    github: null,
    featured: false,
  },
  {
    title: 'School Management System',
    description:
      'Designed and developed a multilingual, authenticated system for managing private school operations. The control panel provides the school principal full administrative control: student enrollment and financial fee management, payment verification, teacher management with attendance tracking and academic records, class schedule and curriculum management by section and grade level, and a parent portal to strengthen communication between families and school administration.',
    image: `${B}img/dar.jpg`,
    tags: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap'],
    demo: null,
    github: null,
    featured: false,
  },
  {
    title: 'Games Gallery',
    description:
      'Developed a responsive website showcasing a curated collection of games, utilizing React.js and React Routes for smooth client-side navigation and an interactive user experience. Built with reusable component architecture and modern JavaScript, delivering a polished, performant browsing experience across all screen sizes.',
    image: `${B}img/portfolio-1.jpg`,
    tags: ['React.js', 'JavaScript', 'Bootstrap', 'CSS3'],
    demo: null,
    github: null,
    featured: false,
  },
]
