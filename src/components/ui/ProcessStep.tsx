'use client'

import { motion } from 'framer-motion'
import type { ProcessStepItem } from '@/data/process'

interface ProcessStepProps {
  step: ProcessStepItem
  index: number
  total: number
}

export function ProcessStep({ step, index, total }: ProcessStepProps) {
  const isLast = index === total - 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative p-7 rounded-2xl bg-[#0f0f0f] border border-white/[0.05] hover:border-white/[0.09] transition-all duration-300 group"
    >
      {/* Connector line (desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/[0.06] z-10" />
      )}

      {/* Large background number */}
      <span className="block text-[4.5rem] font-bold leading-none text-white/[0.03] mb-4 select-none group-hover:text-white/[0.05] transition-colors duration-300">
        {step.number}
      </span>

      {/* Step indicator dot */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600/50 group-hover:bg-blue-500 transition-colors duration-300" />
        <span className="text-xs font-semibold text-[#333] uppercase tracking-widest">
          Etapa {step.number}
        </span>
      </div>

      <h3 className="text-base font-semibold text-[#e0e0e0] mb-3">
        {step.title}
      </h3>
      <p className="text-[#555] text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  )
}
