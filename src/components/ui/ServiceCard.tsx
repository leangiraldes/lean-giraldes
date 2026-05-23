'use client'

import { motion } from 'framer-motion'
import { Layers, Globe, Zap, TrendingUp, ArrowUpRight } from 'lucide-react'
import type { Service } from '@/data/services'

// Mapeamento de ícones — adicione novos aqui se precisar
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative p-8 rounded-2xl bg-[#0f0f0f] border border-white/[0.05] hover:border-white/[0.10] hover:bg-[#111] transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Glow sutil no hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-600/[0.03] to-transparent" />

      {/* Ícone */}
      <div className="relative w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600/15 group-hover:border-blue-500/30 transition-all duration-300">
        <Icon className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
      </div>

      {/* Header com arrow */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-[#e8e8e8] leading-snug pr-4">
          {service.title}
        </h3>
        <ArrowUpRight className="w-4 h-4 text-[#2a2a2a] group-hover:text-[#555] transition-colors duration-300 mt-0.5 shrink-0" />
      </div>

      {/* Descrição */}
      <p className="text-[#666] text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  )
}
