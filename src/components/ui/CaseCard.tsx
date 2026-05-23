'use client'

import { motion } from 'framer-motion'
import type { Case } from '@/data/cases'

const ease = [0.16, 1, 0.3, 1] as const

const statusColor: Record<string, string> = {
  'Em construção': 'text-[#4a4a4a]',
  'Em andamento': 'text-blue-600/70',
  'Concluído': 'text-emerald-600/70',
}

interface CaseCardProps {
  caseItem: Case
  index: number
}

export function CaseCard({ caseItem, index }: CaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.06, ease }}
      className="group"
    >
      {/* Thumbnail */}
      <div
        className={`relative h-48 rounded-xl overflow-hidden bg-gradient-to-br ${caseItem.gradient} mb-5`}
      >
        {/* Dot grid muito sutil */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {/* Vignette no fundo */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#040404]/60 to-transparent" />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-baseline justify-between gap-4 mb-1.5">
          <h3 className="text-[15px] font-semibold text-[#c0c0c0] tracking-[-0.01em]">
            {caseItem.name}
          </h3>
          <span className={`text-[11px] font-medium shrink-0 ${statusColor[caseItem.status] ?? 'text-[#4a4a4a]'}`}>
            {caseItem.status}
          </span>
        </div>

        <p className="text-[11px] text-[#2e2e2e] uppercase tracking-[0.12em] font-medium mb-2">
          {caseItem.area}
        </p>

        <p className="text-[#444] text-[13px] leading-[1.7]">
          {caseItem.description}
        </p>
      </div>
    </motion.article>
  )
}
