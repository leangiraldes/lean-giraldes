'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/data/process'
import { ProcessStep } from '@/components/ui/ProcessStep'
import { SPRING } from '@/lib/motion'

export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="process-heading"
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
            Processo
          </span>
          <h2
            id="process-heading"
            className="text-[2rem] md:text-[2.6rem] font-bold tracking-[-0.04em] leading-[1.1]"
          >
            <span className="text-[#e8e8e8]">Como o trabalho</span>
            <br />
            <span className="text-[#2e2e2e]">acontece.</span>
          </h2>
        </motion.div>

        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 list-none"
          aria-label="Etapas do processo"
        >
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              total={processSteps.length}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
