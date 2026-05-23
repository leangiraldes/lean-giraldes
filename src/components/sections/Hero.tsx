'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* ---- Fundo: grid de linhas sutis ---- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* ---- Glow azul difuso central ---- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[700px] h-[400px] rounded-full bg-blue-600/[0.06] blur-[130px] pointer-events-none" />

      {/* ---- Glow adicional canto inferior ---- */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-blue-800/[0.04] blur-[100px] pointer-events-none" />

      {/* ---- Conteúdo ---- */}
      <div className="relative z-10 text-center max-w-[900px] mx-auto pt-24 pb-16">

        {/* Badge "Disponível" */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06] mb-10"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
          </span>
          <span className="text-blue-400 text-xs font-medium tracking-wide">
            Disponível para novos projetos
          </span>
        </motion.div>

        {/* Headline principal */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-[clamp(2.8rem,7.5vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.08] text-[#f0f0f0] mb-7"
        >
          Modernizando
          <br />
          <span className="text-[#454545]">empresas familiares.</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-[#5a5a5a] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-11"
        >
          Branding, posicionamento e tecnologia para transformar negócios locais
          em marcas mais fortes, organizadas e confiáveis.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.50, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {/* Primário */}
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/10"
          >
            Começar um projeto
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
              strokeWidth={2.5}
            />
          </a>

          {/* Secundário */}
          <a
            href="#cases"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.08] text-[#777] hover:text-[#d0d0d0] hover:border-white/[0.15] hover:bg-white/[0.02] font-medium text-sm transition-all duration-200"
          >
            Ver trabalhos
          </a>
        </motion.div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#252525] hover:text-[#444] transition-colors duration-300"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  )
}
