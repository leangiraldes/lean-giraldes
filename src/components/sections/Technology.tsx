'use client'

import { motion } from 'framer-motion'

const technologies = [
  {
    label: 'Inteligência Artificial',
    description: 'Uso de IA para automatizar, criar e analisar com velocidade',
  },
  {
    label: 'Claude Code',
    description: 'Desenvolvimento de soluções com IA avançada de ponta a ponta',
  },
  {
    label: 'Automação',
    description: 'Processos automáticos que economizam tempo e reduzem erros',
  },
  {
    label: 'Sites Modernos',
    description: 'Next.js, React e tecnologias de alta performance',
  },
  {
    label: 'Sistemas Internos',
    description: 'Ferramentas digitais personalizadas para cada operação',
  },
  {
    label: 'Organização Digital',
    description: 'Notion, processos documentados e estrutura escalável',
  },
  {
    label: 'Design Estratégico',
    description: 'Identidade visual com intenção, propósito e consistência',
  },
  {
    label: 'Presença Online',
    description: 'Google, Instagram e WhatsApp integrados e otimizados',
  },
]

export function Technology() {
  return (
    <section className="py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-blue-500 uppercase tracking-[0.15em] mb-5">
            Tecnologia
          </span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#f0f0f0] tracking-tight mb-4">
            Ferramentas modernas.
            <br />
            <span className="text-[#454545]">Resultados reais.</span>
          </h2>
          <p className="text-[#555] text-lg max-w-lg mx-auto leading-relaxed">
            Domínio das ferramentas certas para entregar soluções que funcionam.
          </p>
        </motion.div>

        {/* Grid de ferramentas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group p-5 rounded-xl bg-[#0f0f0f] border border-white/[0.05] hover:border-white/[0.09] hover:bg-[#111] transition-all duration-300"
            >
              {/* Dot indicador */}
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700/60 mb-4 group-hover:bg-blue-500 transition-colors duration-300" />

              <h4 className="font-semibold text-[#d0d0d0] text-sm mb-2 leading-snug">
                {tech.label}
              </h4>
              <p className="text-[#444] text-xs leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
