'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#040404]/80 backdrop-blur-xl border-b border-white/[0.05]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">

          {/* Logo — limpo, sem animação extra */}
          <a href="#inicio" onClick={close} className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-[6px] bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
              <span className="text-white text-[10px] font-bold">LG</span>
            </div>
            <span className="text-[13px] font-medium text-[#888] group-hover:text-[#bbb] transition-colors duration-200">
              Lean Giraldes
            </span>
          </a>

          {/* Nav desktop — sem hover background, só mudança de cor */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#3a3a3a] hover:text-[#888] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop — link simples */}
          <a
            href="#contato"
            className="hidden md:block text-[13px] text-[#3a3a3a] hover:text-[#888] transition-colors duration-200"
          >
            Falar comigo →
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#444] hover:text-[#888] transition-colors duration-200"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[60px] left-0 right-0 z-50 bg-[#040404]/95 backdrop-blur-xl border-b border-white/[0.05] md:hidden"
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="py-3 text-[14px] text-[#555] hover:text-[#aaa] transition-colors duration-200 border-b border-white/[0.04] last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
