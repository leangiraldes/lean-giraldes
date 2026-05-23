'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { ServiceCard } from '@/components/ui/ServiceCard'

export function Services() {
  return (
    <section
      id="servicos"
      className="py-32 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold text-blue-500 uppercase tracking-[0.15em] mb-5">
            Serviços
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#f0f0f0] tracking-tight leading-tight mb-4">
            O que posso fazer
            <br />
            <span className="text-[#454545]">pela sua empresa.</span>
          </h2>
          <p className="text-[#555] text-lg max-w-lg leading-relaxed">
            Cada projeto é único. Cada solução é construída para a realidade do
            seu negócio.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
