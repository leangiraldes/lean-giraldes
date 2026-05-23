'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SPRING } from '@/lib/motion'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Grade de fundo — quase invisível */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.007) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.007) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 text-center max-w-[820px] mx-auto">

        {/* ── Logo mark ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.05, ease: SPRING }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-[88px] h-[88px]">
            <Image
              src="/images/logo.png"
              alt="Lean Giraldes — logotipo"
              fill
              className="object-cover rounded-full"
              priority
              sizes="88px"
            />
          </div>
        </motion.div>

        {/* ── Headline ──────────────────────────────────────────── */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.22, ease: SPRING }}
          className="text-[clamp(3.2rem,8.5vw,6.8rem)] font-bold tracking-[-0.05em] leading-[1.05] mb-7"
        >
          <span className="text-[#e8e8e8]">Modernizando</span>
          <br />
          <span className="text-[#242424]">empresas familiares.</span>
        </motion.h1>

        {/* ── Subtítulo ─────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.38, ease: SPRING }}
          className="text-[#484848] text-[1.1rem] leading-[1.8] max-w-[500px] mx-auto mb-12"
        >
          Branding, posicionamento e tecnologia para negócios familiares
          que querem parecer tão fortes quanto são.
        </motion.p>

        {/* ── CTAs ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.52, ease: SPRING }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
          >
            Começar um projeto
            <ArrowRight
              className="w-3.5 h-3.5 group-hover:translate-x-px transition-transform duration-200"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>

          <a
            href="#cases"
            className="inline-flex items-center px-6 py-3 rounded-xl text-[#555] hover:text-[#aaa] text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#aaa]"
          >
            Ver trabalhos →
          </a>
        </motion.div>
      </div>

      {/* ── Indicador de scroll ───────────────────────────────── */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 text-[#1e1e1e] hover:text-[#333] transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#333]"
        aria-label="Rolar para a seção Sobre"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 3v10M3 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </section>
  )
}
