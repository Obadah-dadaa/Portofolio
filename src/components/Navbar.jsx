import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',       href: '#hero'       },
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['hero', 'about', 'experience', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05050f]/90 backdrop-blur-xl shadow-md shadow-black/40 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-center relative">

        {/* Desktop nav — centred */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                active === l.href.slice(1)
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile hamburger — absolute right */}
        <motion.button
          onClick={() => setOpen(o => !o)}
          whileTap={{ scale: 0.9 }}
          className="absolute right-5 md:hidden p-2 rounded-xl bg-white/10 text-slate-300"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/[0.06] bg-[#05050f]/95 backdrop-blur-xl"
          >
            <nav className="px-5 py-3 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active === l.href.slice(1)
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
