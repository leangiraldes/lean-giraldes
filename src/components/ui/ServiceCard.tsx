'use client'

import { motion } from 'framer-motion'
import { Layers, Globe, Zap, TrendingUp } from 'lucide-react'
import type { Service } from '@/data/services'

const ease = [0.16, 1, 0.3, 1] as const

const iconMap = {
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
  const Icon = iconMap[service.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.06, ease }}
      className="group p-9 border-b border-r border-white/[0.055] last:border-r-0 hover:bg-white/[0.015] transition-colors duration-300"
    >
      {/* Ícone — sem container, apenas o próprio ícone */}
      <Icon
        className="w-5 h-5 text-[#2d2d2d] mb-7 group-hover:text-[#555] transition-colors duration-300"
        strokeWidth={1.5}
      />

      <h3 className="text-[15px] font-semibold text-[#c0c0c0] mb-3 tracking-[-0.01em]">
        {service.title}
      </h3>

      <p className="text-[#484848] text-[14px] leading-[1.7]">
        {service.description}
      </p>
    </motion.div>
  )
}
