'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/philosophy'

const ease = [0.16, 1, 0.3, 1] as const

export function Philosophy() {
  return (
    <section className="py-40 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
          className="mb-20"
        >
          <span className="inline-block text-[11px] font-semibold text-blue-500 uppercase tracking-[0.18em] mb-6">
            Filosofia
          </span>
          <h2 className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.04em] leading-[1.1] text-[#e8e8e8]">
            O que guia o trabalho.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.06, ease }}
              className="group bg-[#040404] p-10 hover:bg-[#070707] transition-colors duration-300"
            >
              {/* Número sutil — identificador, não decoração */}
              <span className="block text-[11px] font-medium text-[#222] mb-6 tracking-widest">
                {item.id}
              </span>

              {/* A frase — protagonista */}
              <p className="text-[1.3rem] md:text-[1.5rem] font-medium text-[#888] leading-[1.5] tracking-[-0.02em] group-hover:text-[#aaa] transition-colors duration-400">
                {item.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
