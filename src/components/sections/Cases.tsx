'use client'

import { motion } from 'framer-motion'
import { cases } from '@/data/cases'
import { CaseCard } from '@/components/ui/CaseCard'
import { SPRING } from '@/lib/motion'

export function Cases() {
  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
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
            Cases
          </span>
          <h2
            id="cases-heading"
            className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.04em] leading-[1.1]"
          >
            <span className="text-[#e8e8e8]">Trabalhos em</span>
            <br />
            <span className="text-[#2e2e2e]">construção.</span>
          </h2>
        </motion.div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 list-none"
          aria-label="Lista de cases"
        >
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
