'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] dark:opacity-[0.08] opacity-[0.06]"
        style={{ background: 'var(--accent)' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] dark:opacity-[0.05] opacity-[0.04]"
        style={{ background: '#8b5cf6' }}
        animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand text-sm font-medium tracking-wide uppercase mb-6"
        >
          Développeur Web Freelance · Orléans
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mb-8"
        >
          <span className="gradient-text">Je conçois des sites</span>
          <br />
          <span className="text-heading">que vos clients retiennent.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-faded text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Je travaille votre image en ligne avec le même soin que vous
          apportez à votre métier. Design sur mesure, animations fluides,
          fonctionnalités concrètes — chaque détail est pensé pour convertir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-brand hover:bg-brand-hover text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm"
          >
            Demander un devis
          </a>
          <a
            href="#realisations"
            className="text-brand hover:text-brand-hover font-medium text-sm transition-colors duration-300"
          >
            Voir mes réalisations →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — animated line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-faded text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-line relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-brand"
            animate={{ height: ['0%', '100%'], y: ['0%', '100%'] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 0.3,
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
