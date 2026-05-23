'use client'

import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'

const CAPABILITIES = [
  {
    category: 'Estratégia & Marca',
    items: [
      'Branding e identidade visual',
      'Posicionamento de mercado',
      'Design estratégico',
      'Presença digital',
    ],
  },
  {
    category: 'Tecnologia & Execução',
    items: [
      'Sites modernos com Next.js',
      'Automação com IA',
      'Sistemas internos',
      'Claude Code',
    ],
  },
  {
    category: 'Organização & Processo',
    items: [
      'Documentação e Notion',
      'Fluxos e operação',
      'Google e redes sociais',
      'Análise e diagnóstico',
    ],
  },
] as const

export function Technology() {
  return (
    <section
      aria-labelledby="technology-heading"
      className="py-40 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: SPRING }}
          className="mb-20"
        >
          <span className="inline-block text-[11px] font-semibold text-blue-500 uppercase tracking-[0.18em] mb-6">
            Capacidades
          </span>
          <h2
            id="technology-heading"
            className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.04em] leading-[1.1]"
          >
            <span className="text-[#e8e8e8]">Ferramentas certas.</span>
            <br />
            <span className="text-[#2e2e2e]">Resultados reais.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
          {CAPABILITIES.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: groupIndex * 0.08, ease: SPRING }}
            >
              <p className="text-[11px] font-semibold text-[#2a2a2a] uppercase tracking-[0.15em] mb-5">
                {group.category}
              </p>

              <ul className="list-none">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1e1e1e] shrink-0" aria-hidden="true" />
                    <span className="text-[14px] text-[#555]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
