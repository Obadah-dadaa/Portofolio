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
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React.js', 'jQuery'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    tags: ['PHP', 'Laravel', 'MySQL', 'Ajax', 'REST APIs', 'SQL Server'],
  },
  {
    icon: Paintbrush,
    title: 'Design',
    color: 'from-amber-500 to-red-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    tags: ['Figma', 'UI/UX', 'Responsive', 'UML', 'draw.io'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    tags: ['Git', 'GitHub', 'GitLab', 'VS Code', 'JetBrains IDE'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">

        <motion.div {...fadeUp()} className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">About Me</h2>
          <p className="text-slate-500">Who I am &amp; what I work with</p>
        </motion.div>

        {/* Profile card */}
        <motion.div
          {...fadeUp(0.1)}
          whileHover={{ y: -3 }}
          className="card rounded-2xl p-5 sm:p-8 mb-10 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10"
        >
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-1">Obadah Dadaa</h3>
              <p className="text-indigo-400 font-semibold mb-2">Fullstack Developer &amp; Software Developer</p>
              <p className="flex items-center gap-1.5 text-sm text-slate-400 mb-5">
                <MapPin size={14} className="text-indigo-500" /> Dubai, UAE
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5 max-w-3xl">
                Experienced Software Developer with expertise in creating responsive designs, implementing strong
                UI development, and utilizing object-oriented programming principles. Passionate about finding
                creative solutions to technical challenges and delivering professional, clean code. Core strengths
                include technical proficiency, problem-solving &amp; analytical skills, and effective collaboration
                and teamwork.
              </p>
              <motion.a
                href={`${import.meta.env.BASE_URL}img/Obadah Dadaa Software Developer.pdf`}
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/45 transition-shadow touch-manipulation"
              >
                <Download size={15} /> Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div {...fadeUp(0.15)} className="text-center mb-8">
          <h3 className="text-3xl font-black tracking-tight gradient-text mb-2">Tech Stack</h3>
          <p className="text-slate-500 text-sm">Technologies I work with</p>
        </motion.div>

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
                <span className="font-bold text-slate-200">{t.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08 }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${t.bg} text-slate-300 cursor-default select-none`}
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
