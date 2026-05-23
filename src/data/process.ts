// -------------------------------------------------------
// PROCESSO — Edite os passos aqui
// -------------------------------------------------------

export interface ProcessStepItem {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Entendimento da empresa, posicionamento atual, pontos fracos e oportunidades.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description:
      'Definição da direção visual, comunicação, presença digital e prioridades.',
  },
  {
    number: '03',
    title: 'Construção',
    description:
      'Criação da identidade, site, automações, materiais e estrutura digital.',
  },
  {
    number: '04',
    title: 'Evolução',
    description:
      'Acompanhamento, ajustes, documentação e melhoria contínua.',
  },
]
