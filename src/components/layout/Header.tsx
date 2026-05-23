'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { label: 'Início',   href: '#inicio'   },
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases',    href: '#cases'    },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato',  href: '#contato'  },
] as const

const MOBILE_MENU_ID = 'mobile-nav-menu'

export function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const hamburgerRef              = useRef<HTMLButtonElement>(null)
  const firstLinkRef              = useRef<HTMLAnchorElement>(null)

  // Detecta scroll para ativar fundo do header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Trava scroll do body enquanto menu mobile estiver aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Foca no primeiro link ao abrir; devolve foco ao botão ao fechar
  useEffect(() => {
    if (menuOpen) {
      // Aguarda animação antes de focar
      const t = setTimeout(() => firstLinkRef.current?.focus(), 100)
      return () => clearTimeout(t)
    } else {
      hamburgerRef.current?.focus()
    }
  }, [menuOpen])

  const openMenu  = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((v) => !v)

  // Fecha menu ao pressionar Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#040404]/85 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">

          <Logo onClick={closeMenu} />

          {/* Navegação principal — desktop */}
          <nav aria-label="Navegação principal">
            <ul className="hidden md:flex items-center gap-6 list-none">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[13px] text-[#3a3a3a] hover:text-[#888] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#888]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA desktop */}
          <a
            href="#contato"
            className="hidden md:block text-[13px] text-[#3a3a3a] hover:text-[#888] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#888]"
          >
            Falar comigo →
          </a>

          {/* Botão do menu mobile */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="md:hidden text-[#444] hover:text-[#888] transition-colors duration-200 p-1 focus-visible:outline-none focus-visible:text-[#888]"
          >
            {menuOpen
              ? <X className="w-4 h-4" aria-hidden="true" />
              : <Menu className="w-4 h-4" aria-hidden="true" />
            }
          </button>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id={MOBILE_MENU_ID}
            key="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            aria-label="Navegação principal (mobile)"
            className="fixed top-[60px] left-0 right-0 z-50 bg-[#040404]/96 backdrop-blur-xl border-b border-white/[0.05] md:hidden"
          >
            <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col list-none">
              {NAV_LINKS.map(({ label, href }, index) => (
                <li key={href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={href}
                    onClick={closeMenu}
                    className="block py-3 text-[14px] text-[#555] hover:text-[#aaa] transition-colors duration-200 border-b border-white/[0.04] last:border-0 focus-visible:outline-none focus-visible:text-[#aaa]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
