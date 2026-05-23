'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

interface SectionTitleProps {
  label?: string
  title: string | ReactNode
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({
  label,
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease }}
      className={`mb-20 ${centered ? 'text-center' : ''} ${className}`}
    >
      {label && (
        <span className="inline-block text-[11px] font-semibold text-blue-500 uppercase tracking-[0.18em] mb-6">
          {label}
        </span>
      )}
      <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.04em] leading-[1.1] text-[#e8e8e8]">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[#555] text-[16px] leading-[1.75] mt-5 ${centered ? 'max-w-xl mx-auto' : 'max-w-lg'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
