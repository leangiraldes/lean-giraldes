// -------------------------------------------------------
// SERVIÇOS — Edite títulos, descrições e ícones aqui
// Ícones disponíveis: Layers | Globe | Zap | TrendingUp
// -------------------------------------------------------

export interface Service {
  id: string
  title: string
  description: string
  icon: 'Layers' | 'Globe' | 'Zap' | 'TrendingUp'
}

export const services: Service[] = [
  {
    id: 'rebranding',
    title: 'Rebranding',
    description:
      'Reposicionamento visual e estratégico para empresas que precisam parecer mais profissionais e atuais.',
    icon: 'Layers',
  },
  {
    id: 'presenca-digital',
    title: 'Presença Digital',
    description:
      'Organização de Instagram, site, identidade visual, Google Meu Negócio e comunicação para fortalecer a percepção da marca.',
    icon: 'Globe',
  },
  {
    id: 'automacao',
    title: 'Automação e Tecnologia',
    description:
      'Criação de soluções simples e inteligentes para automatizar tarefas, organizar processos e melhorar a rotina da empresa.',
    icon: 'Zap',
  },
  {
    id: 'modernizacao',
    title: 'Modernização Empresarial',
    description:
      'Diagnóstico geral da empresa, melhoria da comunicação, processos, imagem e experiência do cliente.',
    icon: 'TrendingUp',
  },
]
