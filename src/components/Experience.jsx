import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, ChevronDown } from 'lucide-react'

const JOBS = [
  {
    title: 'Full Stack Web Developer',
    company: 'Al Mutakamela / Freelance',
    date: '2022 – Present',
    type: 'Full-time',
    description:
      'Designing and developing professional websites for various clients. Building full-stack applications with modern technologies — from UI design to backend development and deployment.',
    highlights: [
      'Developed 10+ client projects from concept to deployment',
      'Built RESTful APIs and integrated third-party services',
      'Delivered responsive, cross-browser-compatible interfaces',
    ],
    tags: ['PHP', 'Laravel', 'React', 'MySQL', 'JavaScript', 'Bootstrap'],
    color: 'from-indigo-500 to-purple-600',
    dot: 'bg-indigo-500',
  },
  {
    title: 'Web Developer',
    company: 'Marota Platform',
    date: '2021 – 2022',
    type: 'Full-time',
    description:
      'Developed and maintained the Marota Cars platform — a comprehensive car buying/selling marketplace with subscription packages, in-app chat, admin dashboard, and a dedicated mobile application.',
    highlights: [
      'Built subscription & payment workflow',
      'Implemented real-time in-app chat feature',
      'Created full admin dashboard with analytics',
    ],
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery'],
    color: 'from-cyan-500 to-blue-600',
    dot: 'bg-cyan-500',
  },
  {
    title: 'Junior Web Developer',
    company: 'School Management Project',
    date: '2020 – 2021',
    type: 'Contract',
    description:
      'Built an internal school management system for managing students, fees, teachers, attendance and schedules — enabling full control for the admin and improving parent-school relations.',
    highlights: [
      'Student registration & financial fee management',
      'Teacher & class schedule management module',
      'Attendance tracking and reporting system',
    ],
    tags: ['HTML', 'CSS', 'PHP', 'MySQL', 'Bootstrap'],
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
      transition={{ duration: 0.55, delay: i * 0.12 }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        className={`absolute left-0 top-6 w-4 h-4 rounded-full ${job.dot} ring-4 ring-white dark:ring-slate-950 z-10 shadow-md`}
      />

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="card rounded-2xl p-5 sm:p-6 cursor-pointer select-none hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-500/10 transition-all duration-300"
        onClick={() => setExpanded(e => !e)}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className={`hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br ${job.color} items-center justify-center flex-shrink-0 shadow-sm`}>
              <Briefcase size={16} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base sm:text-lg leading-snug">
                {job.title}
              </h3>
              <p className={`text-sm font-semibold mt-0.5 bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>
                {job.company}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/8 px-3 py-1 rounded-full font-medium whitespace-nowrap">
              <Calendar size={11} /> {job.date}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">{job.type}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {job.description}
        </p>

        {/* Expand toggle */}
        <button
          className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
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
                    transition={{ delay: idx * 0.07 }}
                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
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
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/8 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/8"
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
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">Experience</h2>
          <p className="text-slate-500 dark:text-slate-400">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="absolute left-[7px] sm:left-[7px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
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
