'use client'

import { motion } from 'framer-motion'
import type { Case } from '@/data/cases'

const statusStyles = {
  'Em construção': 'border-amber-500/20 bg-amber-500/[0.07] text-amber-500',
  'Em andamento': 'border-blue-500/20 bg-blue-500/[0.07] text-blue-400',
  Concluído: 'border-emerald-500/20 bg-emerald-500/[0.07] text-emerald-500',
}

interface CaseCardProps {
  caseItem: Case
  index: number
}

export function CaseCard({ caseItem, index }: CaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.05] hover:border-white/[0.10] transition-all duration-300"
    >
      {/* Thumbnail placeholder */}
      <div
        className={`relative h-52 bg-gradient-to-br ${caseItem.gradient} overflow-hidden`}
      >
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 to-transparent" />

        {/* Center placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center backdrop-blur-sm">
            <span className="text-[10px] font-medium text-[#3a3a3a] uppercase tracking-wider">
              Em breve
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-semibold text-[#e8e8e8] text-[15px] leading-snug">
            {caseItem.name}
          </h3>
          <span
            className={`inline-flex items-center text-[10px] font-semibold px-2 py-1 rounded-full border whitespace-nowrap shrink-0 ${
              statusStyles[caseItem.status]
            }`}
          >
            {caseItem.status}
          </span>
        </div>

        {/* Área */}
        <p className="text-[11px] text-[#444] uppercase tracking-widest mb-3 font-medium">
          {caseItem.area}
        </p>

        {/* Descrição */}
        <p className="text-[#5a5a5a] text-sm leading-relaxed">
          {caseItem.description}
        </p>
      </div>
    </motion.article>
  )
}
