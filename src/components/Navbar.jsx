import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('hero')

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
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center relative">

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                active === l.href.slice(1)
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="absolute right-4 md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 text-slate-200 touch-manipulation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — CSS only, no framer-motion on the container */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/[0.06] bg-[#05050f]/95 backdrop-blur-xl
          transition-[max-height,opacity] duration-300 ease-in-out
          ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="px-4 py-2 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3.5 rounded-xl text-base font-medium touch-manipulation
                transition-colors duration-150
                ${active === l.href.slice(1)
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-slate-300 active:bg-white/10 hover:bg-white/5 hover:text-slate-100'
                }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
