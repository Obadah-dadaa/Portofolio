import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown } from 'lucide-react'
import { PROJECTS } from '../data/projects'

function ProjectCard({ project, i }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.08 }}
      whileHover={{ y: -4 }}
      className="card rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col"
    >
      {/* Image — clean, no overlay */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-white/5 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold shadow-md">
            Featured
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Title + links */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-bold text-slate-100 text-base leading-snug">{project.title}</h3>
          <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-indigo-400 transition-colors p-1 touch-manipulation"
                title="Live Demo"
              >
                <ExternalLink size={15} />
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-indigo-400 transition-colors p-1 touch-manipulation"
                title="View Code"
              >
                <Github size={15} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description — collapsible */}
        <div className="mb-4">
          <p className={`text-sm text-slate-400 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
            {project.description}
          </p>
          <button
            onClick={() => setExpanded(e => !e)}
            className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-purple-400 transition-colors touch-manipulation"
          >
            {expanded ? 'Show less' : 'Read more'}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={13} />
            </motion.span>
          </button>
        </div>

        {/* Tags — pushed to bottom */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/[0.06] text-slate-400 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Demo button — only when there's a link */}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 sm:py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow touch-manipulation"
          >
            <ExternalLink size={13} /> View Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">Projects</h2>
          <p className="text-slate-500">Some things I&apos;ve built</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
