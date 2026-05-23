'use client'

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export function About() {
  return (
    <section
      id="sobre"
      className="py-40 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">

          {/* Coluna esquerda — identidade visual limpa */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="aspect-square rounded-2xl bg-[#0b0b0b] border border-white/[0.05] flex flex-col items-center justify-center gap-4">
              {/* Monograma */}
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold tracking-tight">LG</span>
              </div>
              <div className="text-center">
                <p className="text-[#555] text-sm font-medium">Lean Giraldes</p>
                <p className="text-[#2a2a2a] text-xs mt-1">Presidente Prudente, SP</p>
              </div>
            </div>
          </motion.div>

          {/* Coluna direita — texto */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="lg:pt-4"
          >
            <span className="inline-block text-[11px] font-semibold text-blue-500 uppercase tracking-[0.18em] mb-6">
              Sobre
            </span>

            <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.04em] leading-[1.1] mb-8">
              <span className="text-[#e8e8e8]">Visão de negócio.</span>
              <br />
              <span className="text-[#2e2e2e]">Execução técnica.</span>
            </h2>

            <div className="space-y-5 text-[#555] text-[16px] leading-[1.85]">
              <p>
                Formado em Administração pela Toledo Prudente e futuro estudante
                de Análise e Desenvolvimento de Sistemas na Unoeste.
              </p>
              <p>
                Uno visão de negócio, estética, tecnologia e automação para
                ajudar empresas familiares a se modernizarem sem perder
                sua essência.
              </p>
              <p>
                Meu trabalho é transformar negócios que já têm valor em marcas
                que <span className="text-[#888]">parecem</span> ter valor.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
