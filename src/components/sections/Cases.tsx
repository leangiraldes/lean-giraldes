'use client'

import { motion } from 'framer-motion'
import { cases } from '@/data/cases'
import { CaseCard } from '@/components/ui/CaseCard'

const ease = [0.16, 1, 0.3, 1] as const

export function Cases() {
  return (
    <section
      id="cases"
      className="py-40 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          className="mb-20"
        >
          <span className="inline-block text-[11px] font-semibold text-blue-500 uppercase tracking-[0.18em] mb-6">
            Cases
          </span>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.04em] leading-[1.1]">
            <span className="text-[#e8e8e8]">Trabalhos em</span>
            <br />
            <span className="text-[#2e2e2e]">construção.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
