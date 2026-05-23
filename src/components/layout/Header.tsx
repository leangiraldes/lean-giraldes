'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

// -------------------------------------------------------
// NAV LINKS — Edite labels e hrefs aqui
// -------------------------------------------------------
const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases', href: '#cases' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* ---- Header principal ---- */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/88 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[66px] flex items-center justify-between">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group"
            onClick={closeMenu}
          >
            <div className="w-7 h-7 rounded-[7px] bg-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors duration-200">
              <span className="text-white text-[11px] font-bold tracking-tight">
                LG
              </span>
            </div>
            <span className="font-semibold text-[#d0d0d0] text-[14px] tracking-tight group-hover:text-[#f0f0f0] transition-colors duration-200">
              Lean Giraldes
            </span>
          </a>

          {/* Nav — Desktop */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] text-[#666] hover:text-[#d0d0d0] transition-colors duration-200 rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — Desktop */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/[0.08] text-[13px] text-[#666] hover:text-[#d0d0d0] hover:border-white/[0.16] hover:bg-white/[0.02] transition-all duration-200"
          >
            Falar comigo
            <ArrowRight className="w-3 h-3" />
          </a>

          {/* Hamburger — Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.07] text-[#666] hover:text-[#d0d0d0] hover:border-white/[0.14] transition-all duration-200"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </motion.header>

      {/* ---- Menu Mobile ---- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={closeMenu}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed top-[66px] left-0 right-0 z-50 bg-[#0a0a0a]/96 backdrop-blur-2xl border-b border-white/[0.06] md:hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="px-4 py-3.5 text-sm text-[#777] hover:text-[#d0d0d0] rounded-xl hover:bg-white/[0.03] transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="mt-3 pt-4 border-t border-white/[0.05]">
                  <a
                    href="#contato"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-200"
                  >
                    Falar comigo
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
