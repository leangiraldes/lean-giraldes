'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/philosophy'

export function Philosophy() {
  return (
    <section className="py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">

        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-blue-500 uppercase tracking-[0.15em] mb-5">
            Filosofia
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#f0f0f0] tracking-tight">
            O que guia o trabalho.
          </h2>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative p-9 rounded-2xl bg-[#0f0f0f] border border-white/[0.05] hover:border-white/[0.09] transition-all duration-300 overflow-hidden"
            >
              {/* Número decorativo de fundo */}
              <span className="absolute top-5 right-6 text-[5.5rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none group-hover:text-white/[0.035] transition-colors duration-500">
                {item.id}
              </span>

              {/* Linha de destaque */}
              <div className="w-8 h-px bg-blue-600/40 mb-7 group-hover:w-12 group-hover:bg-blue-500/60 transition-all duration-400" />

              {/* Frase */}
              <p className="relative z-10 text-xl md:text-2xl font-medium text-[#c0c0c0] leading-[1.45] tracking-[-0.01em]">
                {item.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
