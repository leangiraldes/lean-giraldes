'use client'

import { motion } from 'framer-motion'
import { cases } from '@/data/cases'
import { CaseCard } from '@/components/ui/CaseCard'

export function Cases() {
  return (
    <section
      id="cases"
      className="py-32 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold text-blue-500 uppercase tracking-[0.15em] mb-5">
            Cases
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#f0f0f0] tracking-tight leading-tight mb-4">
            Trabalhos em construção.
          </h2>
          <p className="text-[#555] text-lg max-w-lg leading-relaxed">
            Projetos reais, em desenvolvimento. Cada marca sendo transformada.
          </p>
        </motion.div>

        {/* Grid de cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>

        {/* Nota de rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-[#2a2a2a] text-sm mt-12"
        >
          Mais casos serão adicionados em breve.
        </motion.p>
      </div>
    </section>
  )
}
