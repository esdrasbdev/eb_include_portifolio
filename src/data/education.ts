export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  description?: string
  tags?: string[]
}

export const EDUCATION: EducationItem[] = [
  {
    id: 'ufc',
    degree: 'Engenharia de Software',
    institution: 'Universidade Federal do Ceará — UFC',
    period: '2026 — atualmente',
    description: 'Graduação em andamento, com foco na construção de soluções digitais, desenvolvimento de software e aplicação de boas práticas de engenharia. A formação envolve desde fundamentos de programação e análise de requisitos até arquitetura, qualidade e desenvolvimento de sistemas.',
    tags: ['Arquitetura', 'Engenharia de Software', 'Análise e levantamento de requisitos', 'Desenvolvimento de software', 'Qualidade de software'],
  },
  {
    id: 'ifce',
    degree: 'Técnico em Informática',
    institution: 'IFCE',
    period: '2022 — 2025',
    description: 'Formação técnica concluída, com base sólida em desenvolvimento de software, infraestrutura, redes de computadores e fundamentos de sistemas. Durante a formação, foram desenvolvidas competências práticas para análise de problemas, criação de soluções computacionais e manutenção de ambientes tecnológicos.',
    tags: ['Lógica de programação', 'Redes', 'Fundamentos de sistemas', 'Infraestrutura', 'Desenvolvimento de software', 'Análise de problemas', 'Soluções computacionais'],
  },
]
