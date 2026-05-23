'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

// -------------------------------------------------------
// CONTATO — Edite seus links aqui
// -------------------------------------------------------
const WHATSAPP = 'https://wa.me/5518999999999' // ← Troque pelo seu número
const EMAIL = 'mailto:leanvitorlimagiraldes@gmail.com'

export function CTA() {
  return (
    <section
      id="contato"
      className="py-40 px-6 border-t border-white/[0.04] relative overflow-hidden"
    >
      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/[0.055] blur-[120px] rounded-full" />
      </div>

      {/* Dot grid sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-block text-xs font-semibold text-blue-500 uppercase tracking-[0.15em] mb-8">
            Vamos começar?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#f0f0f0] tracking-[-0.03em] leading-[1.1] mb-7">
            Sua empresa pode parecer
            <br />
            tão forte quanto ela{' '}
            <span className="text-[#454545]">realmente é.</span>
          </h2>

          <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Me conta sobre o seu negócio. Vamos entender juntos o que faz
            sentido para você.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* WhatsApp — principal */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-2xl shadow-blue-600/20"
            >
              Falar com Lean
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                strokeWidth={2.5}
              />
            </a>

            {/* E-mail — secundário */}
            <a
              href={EMAIL}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/[0.08] text-[#777] hover:text-[#c0c0c0] hover:border-white/[0.15] hover:bg-white/[0.02] font-medium text-sm transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Enviar e-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
