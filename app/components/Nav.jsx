'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
]

const ThemeIcon = ({ dark }) =>
  dark ? (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ) : (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl border-b border-line' : ''
        }`}
        style={scrolled ? { backgroundColor: 'var(--nav-bg)' } : undefined}
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#" className="text-heading font-semibold text-sm tracking-tight">
            A. ELAKROUTI
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className="text-faded hover:text-heading text-xs transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <button onClick={toggle}
              className="text-faded hover:text-heading transition-colors duration-300"
              aria-label="Changer de thème">
              <ThemeIcon dark={dark} />
            </button>
            <a href="#contact"
              className="bg-brand hover:bg-brand-hover text-white text-xs font-medium px-4 py-1.5 rounded-full transition-colors duration-300">
              Demander un devis
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1">
            <button onClick={toggle}
              className="w-9 h-9 flex items-center justify-center text-faded hover:text-heading transition-colors"
              aria-label="Changer de thème">
              <ThemeIcon dark={dark} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="block w-5 h-[1.5px] bg-heading origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-heading origin-center"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="block w-5 h-[1.5px] bg-heading origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'var(--overlay-bg)' }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel sliding from top */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-14 left-0 right-0 z-40 border-b border-line"
              style={{ backgroundColor: 'var(--overlay-bg)' }}
            >
              <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.05, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-heading text-xl font-medium py-3 border-b border-line last:border-0 flex items-center justify-between group"
                  >
                    {link.label}
                    <svg className="w-4 h-4 text-faded group-hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-4 bg-brand hover:bg-brand-hover text-white font-medium text-sm px-6 py-3 rounded-full text-center transition-colors duration-300"
                >
                  Demander un devis
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
