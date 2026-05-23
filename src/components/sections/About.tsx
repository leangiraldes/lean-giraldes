'use client'

import { motion } from 'framer-motion'

const tags = [
  'Administração',
  'Branding',
  'Tecnologia',
  'Automação',
  'Estratégia Digital',
  'ADS (2026)',
]

const stats = [
  { value: '3+', label: 'Projetos em andamento' },
  { value: '100%', label: 'Foco no resultado' },
]

export function About() {
  return (
    <section
      id="sobre"
      className="py-32 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ---- Coluna esquerda: card decorativo ---- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl bg-[#0f0f0f] border border-white/[0.05] overflow-hidden flex flex-col items-center justify-center p-10">
              {/* Dot grid de fundo */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(37,99,235,0.04) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Glow canto */}
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-600/[0.07] blur-[90px] pointer-events-none" />

              {/* Monograma */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-7">
                <span className="text-blue-500 text-2xl font-bold tracking-tight">
                  LG
                </span>
              </div>

              {/* Nome e localização */}
              <div className="relative z-10 text-center mb-8">
                <p className="text-[#888] text-sm font-medium">
                  Lean Vitor Lima Giraldes
                </p>
                <p className="text-[#3a3a3a] text-xs mt-1">
                  Presidente Prudente, SP
                </p>
              </div>

              {/* Stats */}
              <div className="relative z-10 grid grid-cols-2 gap-3 w-full">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center"
                  >
                    <div className="text-2xl font-bold text-[#f0f0f0] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-[#444] leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---- Coluna direita: texto ---- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="inline-block text-xs font-semibold text-blue-500 uppercase tracking-[0.15em] mb-5">
              Sobre
            </span>

            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#f0f0f0] tracking-tight leading-tight mb-7">
              Visão de negócio com{' '}
              <span className="text-[#454545]">execução técnica.</span>
            </h2>

            <div className="space-y-5 text-[#5a5a5a] text-[17px] leading-[1.75]">
              <p>
                Sou Lean Giraldes, formado em Administração pela Toledo Prudente
                e futuro estudante de Análise e Desenvolvimento de Sistemas na
                Unoeste.
              </p>
              <p>
                Uno visão de negócio, estética, tecnologia e automação para
                ajudar empresas familiares a se modernizarem sem perder sua
                essência.
              </p>
              <p>
                Meu trabalho é transformar negócios que já têm valor em marcas
                que <em className="text-[#888] not-italic">parecem</em> ter valor.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-9 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[#555] text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
