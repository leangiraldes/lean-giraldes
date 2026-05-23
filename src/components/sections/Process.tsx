'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/data/process'
import { ProcessStep } from '@/components/ui/ProcessStep'

export function Process() {
  return (
    <section
      id="processo"
      className="py-32 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold text-blue-500 uppercase tracking-[0.15em] mb-5">
            Processo
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#f0f0f0] tracking-tight mb-4">
            Como o trabalho acontece.
          </h2>
          <p className="text-[#555] text-lg max-w-lg mx-auto leading-relaxed">
            Um processo claro, estruturado e orientado a resultados reais.
          </p>
        </motion.div>

        {/* Grid de etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              total={processSteps.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
