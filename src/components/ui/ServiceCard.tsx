'use client'

import { motion } from 'framer-motion'
import { Layers, Globe, Zap, TrendingUp } from 'lucide-react'
import type { Service } from '@/data/services'
import { SPRING } from '@/lib/motion'

const ICON_MAP = {
  Layers,
  Globe,
  Zap,
  TrendingUp,
} as const

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon]

  return (
    /*
     * <li> porque o pai em Services.tsx é um <ul>.
     * Usando motion.li para manter a semântica correta.
     */
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: SPRING }}
      className="group bg-[#040404] p-9 hover:bg-[#070707] transition-colors duration-300 list-none"
    >
      <Icon
        className="w-5 h-5 text-[#2d2d2d] mb-7 group-hover:text-[#555] transition-colors duration-300"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <h3 className="text-[15px] font-semibold text-[#c0c0c0] mb-3 tracking-[-0.01em]">
        {service.title}
      </h3>

      <p className="text-[#484848] text-[14px] leading-[1.7]">
        {service.description}
      </p>
    </motion.li>
  )
}
