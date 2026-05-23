'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/config'
import { SPRING } from '@/lib/motion'

export function CTA() {
  return (
    <section
      id="contato"
      aria-labelledby="cta-heading"
      className="py-48 px-6 border-t border-white/[0.04]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: SPRING }}
        >
          <h2
            id="cta-heading"
            className="text-[2.4rem] md:text-[3.5rem] lg:text-[4.2rem] font-bold tracking-[-0.05em] leading-[1.06] mb-12"
          >
            <span className="text-[#e8e8e8]">Sua empresa pode parecer</span>
            <br />
            <span className="text-[#e8e8e8]">tão forte quanto ela</span>
            <br />
            <span className="text-[#242424]">realmente é.</span>
          </h2>

          <div className="flex flex-col items-start gap-4">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404]"
            >
              Falar com Lean
              <ArrowRight
                className="w-3.5 h-3.5 group-hover:translate-x-px transition-transform duration-200"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[13px] text-[#333] hover:text-[#666] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#666]"
            >
              {CONTACT.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
