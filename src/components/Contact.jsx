import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Instagram, Download, Sparkles } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const CARDS = [
  {
    icon: Mail,
    title: 'Email',
    value: 'Obadah.dada1999@gmail.com',
    href: 'mailto:Obadah.dada1999@gmail.com',
    label: 'Send Email',
    gradient: 'from-indigo-500 to-purple-600',
    bg: 'bg-indigo-500/10',
    hover: 'hover:border-indigo-500/40 hover:shadow-indigo-500/10',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+971 56 864 0530',
    href: 'tel:+971568640530',
    label: 'Call Now',
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-500/10',
    hover: 'hover:border-emerald-500/40 hover:shadow-emerald-500/10',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Dubai, UAE',
    href: null,
    label: 'Available Remotely',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-500/10',
    hover: 'hover:border-amber-500/40 hover:shadow-amber-500/10',
  },
]

const SOCIALS = [
  { icon: Linkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/obadahdadaa',                          color: 'hover:bg-[#0077b5] hover:border-[#0077b5]' },
  { icon: Github,    label: 'GitHub',    href: 'https://github.com/Obadah-dadaa',                                  color: 'hover:bg-[#333] hover:border-[#555]'        },
  { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/Obadah.D3D3?mibextid=ZbWKwL',             color: 'hover:bg-[#1877f2] hover:border-[#1877f2]'  },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/obadah_dadaa?igshid=ZDdkNTZiNTM=',           color: 'hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-transparent' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">Get In Touch</h2>
          <p className="text-slate-500">Let&apos;s work together</p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -5 }}
              className={`card rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg ${c.hover}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                <c.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-slate-100 mb-1">{c.title}</h3>
              <p className="text-sm text-slate-400 mb-3 break-all">{c.value}</p>
              {c.href ? (
                <a
                  href={c.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-purple-400 transition-colors"
                >
                  {c.label} →
                </a>
              ) : (
                <span className="text-sm font-semibold text-slate-500">{c.label}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Available card */}
        <motion.div
          {...fadeUp(0.3)}
          whileHover={{ y: -4 }}
          className="card rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-5 border-emerald-500/20 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 flex-shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-30" />
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
                <Sparkles size={20} className="text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-lg">Open to Work</h3>
              <p className="text-sm text-slate-400">Available for new opportunities &amp; freelance projects</p>
            </div>
          </div>
          <motion.a
            href={`${import.meta.env.BASE_URL}img/Obadah Dadaa Software Developer.pdf`}
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold shadow-md shadow-emerald-500/25 whitespace-nowrap"
          >
            <Download size={15} /> Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.07 }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 text-sm font-semibold hover:text-white transition-all duration-250 hover:shadow-lg ${s.color}`}
            >
              <s.icon size={18} />
              {s.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
