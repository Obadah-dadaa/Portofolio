import { motion } from 'framer-motion'
import { ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between gap-4 flex-wrap">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5"
        >
          &copy; 2024 Made with{' '}
          <Heart size={14} className="text-red-500 fill-red-500 animate-pulse-slow" />{' '}
          by{' '}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTop() }}
            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Obadah Dadaa
          </a>
        </motion.p>

        <motion.button
          onClick={scrollTop}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/50 transition-shadow"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  )
}
