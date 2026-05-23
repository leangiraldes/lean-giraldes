// -------------------------------------------------------
// CASES — Edite nome, área, status e descrição aqui
// Gradientes disponíveis (tailwind): from-rose-950/30 | from-blue-950/30 | from-amber-950/30
// Status: 'Em construção' | 'Em andamento' | 'Concluído'
// -------------------------------------------------------

export type CaseStatus = 'Em construção' | 'Em andamento' | 'Concluído'

export interface Case {
  id: string
  name: string
  area: string
  status: CaseStatus
  description: string
  gradient: string
}

export const cases: Case[] = [
  {
    id: 'casa-branca',
    name: 'Casa Branca Confeitaria',
    area: 'Confeitaria e marca local',
    status: 'Em construção',
    description:
      'Rebranding completo e estratégia de presença digital para confeitaria artesanal.',
    gradient: 'from-rose-950/40 to-neutral-900/80',
  },
  {
    id: 'ale-lima',
    name: 'Ale Lima Imóveis',
    area: 'Mercado imobiliário',
    status: 'Em construção',
    description:
      'Modernização da identidade e posicionamento digital para corretora de imóveis.',
    gradient: 'from-blue-950/40 to-neutral-900/80',
  },
  {
    id: 'v-giraldes',
    name: 'V. Giraldes Terraplenagem',
    area: 'Serviços e operação',
    status: 'Em construção',
    description:
      'Identidade visual profissional e comunicação estruturada para empresa de terraplenagem.',
    gradient: 'from-amber-950/40 to-neutral-900/80',
  },
]
