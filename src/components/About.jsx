import { motion } from 'framer-motion'
import { MapPin, Download, Monitor, Server, Paintbrush, Wrench } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const TECH = [
  {
    icon: Monitor,
    title: 'Frontend',
    color: 'from-indigo-500 to-purple-600',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
    border: 'border-indigo-200/60 dark:border-indigo-500/20',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50 dark:bg-cyan-500/10',
    border: 'border-cyan-200/60 dark:border-cyan-500/20',
    tags: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'REST APIs'],
  },
  {
    icon: Paintbrush,
    title: 'Design',
    color: 'from-amber-500 to-red-500',
    bg: 'bg-amber-50 dark:bg-amber-500/10',
    border: 'border-amber-200/60 dark:border-amber-500/20',
    tags: ['Figma', 'UI/UX', 'Responsive', 'Wireframing'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    border: 'border-emerald-200/60 dark:border-emerald-500/20',
    tags: ['Git', 'GitHub', 'VS Code', 'Linux'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 section-bg-alt">
      <div className="max-w-6xl mx-auto px-5">

        {/* Section header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">About Me</h2>
          <p className="text-slate-500 dark:text-slate-400">Who I am &amp; what I work with</p>
        </motion.div>

        {/* Profile card */}
        <motion.div
          {...fadeUp(0.1)}
          whileHover={{ y: -3 }}
          className="card rounded-2xl p-6 sm:p-8 mb-10 transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-100 dark:hover:shadow-indigo-500/10"
        >
          <div className="flex flex-col sm:flex-row gap-7 items-center sm:items-start">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex-shrink-0"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-4 ring-indigo-500/30 shadow-xl">
                <img
                  src="/img/photo_2023-03-26_15-17-53.jpg"
                  alt="Obadah Dadaa"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-950 rounded-full" />
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">Obadah Dadaa</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Full Stack Web Developer</p>
              <p className="flex items-center justify-center sm:justify-start gap-1.5 text-sm text-slate-400 mb-4">
                <MapPin size={14} className="text-indigo-500" /> UAE
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-5 max-w-2xl">
                I&apos;m a web developer who creates websites that strengthen your brand while ensuring ease of use
                for your audience. My approach combines clean code with thoughtful design — handling everything
                from UI design to backend development. I specialize in building products that look professional
                and perform reliably.
              </p>
              <motion.a
                href="/img/Obadah Dadaa 2024.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/45 transition-shadow"
              >
                <Download size={15} /> Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Tech stack header */}
        <motion.div {...fadeUp(0.15)} className="text-center mb-8">
          <h3 className="text-3xl font-black tracking-tight gradient-text mb-2">Tech Stack</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Technologies I work with</p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`card rounded-2xl p-5 transition-all duration-300 hover:shadow-lg ${t.border} hover:border-current`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-sm`}>
                  <t.icon size={18} className="text-white" />
                </div>
                <span className="font-bold text-slate-800 dark:text-slate-200">{t.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08 }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${t.bg} text-slate-700 dark:text-slate-300 cursor-default select-none`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
