const B = import.meta.env.BASE_URL;

export const PROJECTS = [
  {
    title: "Internal ERP System – Al Mutakamela",
    description:
      "Contributing to a company-wide ERP system supporting multiple departments: HR (employee records, attendance tracking, role-based access control), Finance (transaction management, invoicing, reporting, and fee structures), Operations (vehicle inspection records, testing workflows, and service tracking), and IT (system monitoring and access management). Building and maintaining RESTful APIs powering internal ERP modules and the company's mobile application. Translating Figma UI/UX designs into responsive frontend interfaces, handling database optimization, and participating in workflow automation and inter-department approval chains.",
    image: `${B}img/web-development.jpg`,
    tags: ["PHP", "Laravel", "JavaScript", "Bootstrap", "Ajax", "SQL Server"],
    demo: null,
    github: null,
    featured: true,
  },
  {
    title: "Car Buying & Selling System - Marota Cars",
    description:
      "A dynamic web application for buying and selling cars, incorporating features such as search filters, user authentication, and real-time updates using Ajax. The platform enables users to subscribe and select a package, post or browse car listings, and communicate directly with advertisers through an in-app chat system. Supported by a dedicated mobile application and a comprehensive admin dashboard for full site control and analytics.",
    image: `${B}img/marota4.png`,
    tags: ["PHP", "Laravel", "JavaScript", "Bootstrap", "Ajax"],
    demo: null,
    github: null,
    featured: false,
  },
  {
    title: "School Management System",
    description:
      "Designed and developed a multilingual, authenticated school management system with role-based access for administrators, teachers, and parents. The admin panel gives school leadership full control over student enrollment, financial fees, payment verification, teacher management, class schedules, sections, and curriculum planning. Teachers can manage and monitor their lessons, class sessions, assigned sections, attendance, and academic records, while parents can track their children's full school activity, including grades, exams, attendance, absences, behavior, and overall progress through a dedicated parent portal.",
    image: `${B}img/Schoolmanagemntsystem.png`,
    tags: ["Html", "Css", "PHP", "Laravel", "JavaScript", "Bootstrap"],
    demo: null,
    github: "https://github.com/Obadah-dadaa/SchoolManagement",
    featured: false,
  },
  {
    title: "Relaxation Time Spa",
    description:
      "Designed and developed a full business website for a Dubai-based mobile spa service offering at-home and on-location treatments. Features a complete service catalog with 11+ massage types (Swedish, deep tissue, sports, pregnancy massage, and more), manicure, pedicure, and skincare services. Includes tiered pricing packages (Basic, Couples, VIP), a client testimonials section, a booking inquiry form, and an image carousel — delivering a professional client-facing experience with responsive design and smooth navigation.",
    image: `${B}img/spa-hero.jpg`,
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    demo: "https://obadah-dadaa.github.io/Relaxation-Time-Spa/",
    github: "https://github.com/Obadah-dadaa/Relaxation-Time-Spa",
    featured: false,
  },
];
