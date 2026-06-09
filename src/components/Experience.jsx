import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, ChevronDown } from 'lucide-react'

const JOBS = [
  {
    title: 'Software Developer',
    company: 'Al Mutakamela Vehicle Testing (RTA Licensed)',
    date: 'Aug 2025 – Present',
    location: 'UAE',
    type: 'Full-time',
    description:
      'Part of the development team building the company\'s internal ERP system, contributing to backend development and integration across departments including HR, Finance, Operations, and IT. Building and maintaining RESTful APIs for internal ERP modules and the company\'s mobile application (currently under development). Translating UI/UX Figma designs into working frontend components and collaborating with an offshore technical lead on feature implementation and testing.',
    highlights: [
      'Contributing to a company-wide ERP system spanning HR, Finance, Operations, and IT departments',
      'Building and maintaining RESTful APIs for internal ERP modules and a mobile application',
      'Translating Figma UI/UX designs into accurate, responsive frontend components',
      'Handling database adjustments, query optimization, and relational data structuring',
      'Collaborating with an offshore technical lead on feature implementation, testing, and deployment',
    ],
    tags: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'Ajax', 'SQL Server', 'Figma'],
    color: 'from-indigo-500 to-purple-600',
    dot: 'bg-indigo-500',
  },
  {
    title: 'IT Manager',
    company: 'Milia Cosmetics Company',
    date: 'Jul 2023 – Jul 2024',
    location: 'UAE',
    type: 'Full-time',
    description:
      'Collaborated with the technical support team to troubleshoot and resolve website issues, ensuring a smooth user experience and customer satisfaction. Provided technical expertise and support to internal stakeholders, including assisting with website deployment, database management, and integration of third-party APIs.',
    highlights: [
      'Troubleshot and resolved website issues in collaboration with the technical support team',
      'Assisted with website deployment, updates, and ongoing maintenance',
      'Managed database operations and oversaw integration of third-party APIs',
      'Provided technical guidance and support to internal stakeholders across departments',
    ],
    tags: ['Website Management', 'Database Management', 'Third-party APIs', 'Technical Support'],
    color: 'from-emerald-500 to-teal-600',
    dot: 'bg-emerald-500',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Al-Nobalaa Company',
    date: 'May 2021 – Feb 2023',
    location: 'Damascus, Syria',
    type: 'Full-time',
    description:
      'Designed and implemented custom web solutions using cutting-edge technologies including JavaScript, PHP, HTML5, CSS3, and jQuery. Collaborated with the development team to create and optimize database structures, improving data efficiency and performance. Conducted thorough testing and debugging to ensure the functionality and stability of websites, adhering to project timelines and quality standards.',
    highlights: [
      'Designed and implemented custom web solutions using JavaScript, PHP, HTML5, CSS3, and jQuery',
      'Collaborated with the team to create and optimize database structures for performance',
      'Conducted thorough testing and debugging aligned with project timelines and quality standards',
      'Developed the Marota Cars platform — a full car marketplace with subscriptions, in-app chat, and admin dashboard',
    ],
    tags: ['PHP', 'Laravel', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'MySQL'],
    color: 'from-cyan-500 to-blue-600',
    dot: 'bg-cyan-500',
  },
  {
    title: 'Back-end Developer',
    company: 'Creative Group Company',
    date: 'Apr 2020 – Mar 2021',
    location: 'Damascus, Syria',
    type: 'Full-time',
    description:
      'Developed and maintained back-end systems using PHP, Laravel, and MySQL, ensuring smooth data processing and seamless integration with front-end components. Implemented RESTful APIs to facilitate communication between different modules and external services, enhancing the overall functionality of web applications.',
    highlights: [
      'Developed and maintained back-end systems using PHP, Laravel, and MySQL',
      'Implemented RESTful APIs connecting modules and external services',
      'Ensured seamless integration of front-end and back-end for cohesive, high-performing solutions',
    ],
    tags: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
    color: 'from-amber-500 to-orange-500',
    dot: 'bg-amber-500',
  },
]

function JobCard({ job, i }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        className={`absolute left-0 top-6 w-4 h-4 rounded-full ${job.dot} ring-4 ring-[#05050f] z-10 shadow-md`}
      />

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="card rounded-2xl p-5 sm:p-6 cursor-pointer select-none hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
        onClick={() => setExpanded(e => !e)}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className={`hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br ${job.color} items-center justify-center flex-shrink-0 shadow-sm`}>
              <Briefcase size={16} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-base sm:text-lg leading-snug">{job.title}</h3>
              <p className={`text-sm font-semibold mt-0.5 bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>
                {job.company}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{job.location}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/[0.06] px-3 py-1 rounded-full font-medium whitespace-nowrap">
              <Calendar size={11} /> {job.date}
            </span>
            <span className="text-xs text-slate-500">{job.type}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-400 leading-relaxed">{job.description}</p>

        {/* Expand toggle */}
        <button className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-purple-400 transition-colors">
          {expanded ? 'Hide details' : 'Show details'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={14} />
          </motion.span>
        </button>

        {/* Expandable highlights */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-3 space-y-1.5 pl-4">
                {job.highlights.map((h, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="text-sm text-slate-400 flex items-start gap-2"
                  >
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${job.color} flex-shrink-0`} />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {job.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.08 }}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.06] text-slate-400 border border-white/[0.06]"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">Experience</h2>
          <p className="text-slate-500">My professional journey</p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="absolute left-[7px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 via-cyan-500 to-transparent"
          />
          <div className="space-y-6">
            {JOBS.map((job, i) => (
              <JobCard key={i} job={job} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
