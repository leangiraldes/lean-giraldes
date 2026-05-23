'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  label?: string
  title: string | React.ReactNode
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold text-blue-500 uppercase tracking-[0.15em] mb-5">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#f0f0f0] tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[#666] text-lg leading-relaxed ${
            centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
