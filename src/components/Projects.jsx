import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Marota Cars',
    description:
      'A comprehensive car buying/selling marketplace with subscription packages, in-app real-time chat, admin dashboard with analytics, and a dedicated mobile application.',
    image: '/img/marota4.png',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    category: 'webdev',
    demo: 'https://marota.nobalaa.com',
    github: null,
    featured: true,
  },
  {
    title: 'Quiz App',
    description:
      'An automated quiz testing application for schools and universities with randomized questions, scoring logic, and instant results.',
    image: '/img/Screenshot 2023-05-05 165415.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'webdesign',
    demo: 'https://obadah-dadaa.github.io/quizapp/',
    github: 'https://github.com/Obadah-dadaa/quizapp',
  },
  {
    title: 'Education Site',
    description:
      'University platform facilitating seamless communication between students, faculty members, and professors to monitor academic progress.',
    image: '/img/Screenshot 2023-05-05 162859.png',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    category: 'webdesign',
    demo: 'https://obadah-dadaa.github.io/University_Desgin/',
    github: 'https://github.com/Obadah-dadaa/University_Desgin',
  },
  {
    title: 'School Management System',
    description:
      'Full school automation: student registration & financial fees, teacher management, attendance tracking, class schedules, and parent-school communication portal.',
    image: '/img/dar.jpg',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    category: 'webdev',
    demo: null,
    github: null,
    featured: false,
  },
]

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Web Design', value: 'webdesign' },
  { label: 'Web Dev', value: 'webdev' },
]

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: i * 0.07 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="card rounded-2xl overflow-hidden group hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-100/70 dark:hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-4"
            >
              <p className="text-white text-sm text-center leading-relaxed">{project.description}</p>
              <div className="flex gap-2 mt-1">
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-lg"
                  >
                    <Eye size={13} /> Live Demo
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/15 border border-white/20 text-white text-xs font-semibold"
                  >
                    <Github size={13} /> Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold shadow-md">
            Featured
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">{project.title}</h3>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                <ExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                <Github size={15} />
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/8 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/8"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = PROJECTS.filter(p => filter === 'all' || p.category === filter)

  return (
    <section id="projects" className="py-24 section-bg-alt">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">Some things I&apos;ve built</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2.5 mb-10 flex-wrap"
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f.value}
              onClick={() => setFilter(f.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-250 ${
                filter === f.value
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                  : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-500/40'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProjectCard key={p.title} project={p} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="text-center text-slate-400 py-12">No projects in this category.</p>
        )}
      </div>
    </section>
  )
}
