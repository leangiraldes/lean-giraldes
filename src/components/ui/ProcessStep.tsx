'use client'

import { motion } from 'framer-motion'
import type { ProcessStepItem } from '@/data/process'

const ease = [0.16, 1, 0.3, 1] as const

interface ProcessStepProps {
  step: ProcessStepItem
  index: number
  total: number
}

export function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.07, ease }}
      className="group"
    >
      {/* Número — limpo, sem container */}
      <span className="block text-[3.5rem] font-bold tracking-[-0.05em] leading-none text-[#161616] mb-6 group-hover:text-[#1e1e1e] transition-colors duration-300 select-none">
        {step.number}
      </span>

      <h3 className="text-[15px] font-semibold text-[#c0c0c0] mb-2.5 tracking-[-0.01em]">
        {step.title}
      </h3>

      <p className="text-[#484848] text-[14px] leading-[1.7]">
        {step.description}
      </p>
    </motion.div>
  )
}
