import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Facebook, ChevronDown, ArrowRight } from 'lucide-react'
import { PROJECTS } from '../data/projects'

const TITLES = ['Fullstack Developer', 'Software Developer']

const SOCIALS = [
  { icon: Github,   href: 'https://github.com/obadah-dadaa',                        label: 'GitHub'   },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/obadahdadaa',                 label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:Obadah.dada1999@gmail.com',                        label: 'Email'    },
  { icon: Facebook, href: 'https://www.facebook.com/Obadah.D3D3?mibextid=ZbWKwL',   label: 'Facebook' },
]

const STATS = [
  { number: '5+',                    label: 'Years Exp.'  },
  { number: String(PROJECTS.length), label: 'Projects'    },
  { number: '5+',                    label: 'Clients'     },
]

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTitleIdx(i => (i + 1) % TITLES.length), 3000)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-10"
    >
      {/* atmospheric colour blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-blob        absolute -top-52   -left-52  w-[600px] h-[600px] rounded-full bg-indigo-700/20 blur-[120px]" />
        <div className="animate-blob-delay  absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[100px]" />
        <div className="animate-blob-delay2 absolute top-1/2 left-1/3  w-[320px] h-[320px] rounded-full bg-cyan-600/10  blur-[90px]"  />
      </div>

      {/* subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,.6) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(99,102,241,.6) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full">

        {/* available badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          Available for Work
        </motion.div>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 gradient-text"
        >
          Obadah Dadaa
        </motion.h1>

        {/* rotating title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl font-semibold text-slate-400 mb-6 h-9 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIdx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="gradient-text-cyan font-bold"
            >
              {TITLES[titleIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-slate-400 max-w-[600px] mx-auto leading-relaxed mb-8"
        >
          Experienced Software Developer with expertise in responsive design, strong UI development,
          and object-oriented programming principles — based in{' '}
          <span className="font-semibold text-slate-200">Dubai, UAE</span>.
          Passionate about delivering professional, clean code and creative solutions to technical challenges.
        </motion.p>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-6 sm:gap-12 md:gap-14 mb-10"
        >
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <span className="block text-2xl sm:text-3xl md:text-4xl font-black gradient-text leading-none">{s.number}</span>
              <span className="block text-xs text-slate-500 uppercase tracking-widest mt-1">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mb-10 px-2 sm:px-0"
        >
          <motion.button
            onClick={() => scrollTo('projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/55 transition-shadow duration-300 touch-manipulation"
          >
            View Projects <ArrowRight size={16} />
          </motion.button>
          <motion.button
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 sm:py-3 rounded-xl border border-white/15 text-slate-200 font-semibold text-sm hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-200 touch-manipulation"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-3"
        >
          {SOCIALS.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:border-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all duration-200 touch-manipulation"
            >
              <s.icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 transition-colors touch-manipulation"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
