'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SPRING } from '@/lib/motion'

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="py-40 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: SPRING }}
          className="mb-20"
        >
          <span className="inline-block text-[11px] font-semibold text-blue-500 uppercase tracking-[0.18em] mb-6">
            Serviços
          </span>
          <h2
            id="services-heading"
            className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.04em] leading-[1.1]"
          >
            <span className="text-[#e8e8e8]">O que posso fazer</span>
            <br />
            <span className="text-[#2e2e2e]">pela sua empresa.</span>
          </h2>
        </motion.div>

        {/*
         * gap-px com bg na grid — mesma técnica da seção Filosofia.
         * Elimina o problema de bordas duplicadas nas arestas do grid.
         */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.055] list-none"
          aria-label="Lista de serviços"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
