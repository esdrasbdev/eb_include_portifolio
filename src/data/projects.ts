export interface Project {
  id: string
  name: string
  category: string
  description: string
  responsibilities: string[]
  stack: string[]
  href?: string
  image?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'gessica-sampaio',
    name: 'Advogada Géssica',
    category: 'SaaS / Legal Tech',
    description:
      'Sistema desenvolvido para gerenciamento e organização de atividades relacionadas à advocacia — do atendimento ao acompanhamento de processos.',
    responsibilities: [
      'Construção da interface e da experiência de uso',
      'Integração com serviços e autenticação',
      'Organização e estruturação de dados',
      'Deploy e manutenção contínua',
    ],
    stack: ['JavaScript', 'Node.js', 'Express', 'Vercel'],
    image: 'Saas_Gessica.png',
  },
  {
    id: 'gessica-sampaio-landing',
    name: 'Géssica Sampaio — Landing Page',
    category: 'Landing Page / Institucional',
    description:
      'Página institucional para apresentar a atuação da advogada Géssica Sampaio, com foco em credibilidade, clareza das áreas de atuação e captação de contato.',
    responsibilities: [
      'Design e desenvolvimento da interface',
      'Estrutura de seções institucionais',
      'Responsividade e performance',
      'Deploy',
    ],
    stack: ['React', 'Tailwind CSS', 'Vercel'],
    image: 'gessicalanding.png',
  },
  {
    id: 'caldas-brito',
    name: 'Caldas & Brito Advocacia',
    category: 'SaaS / Legal Management',
    description:
      'Plataforma completa de gestão para um escritório de advocacia: clientes, processos, agendamentos, documentos e permissões de usuários em um só sistema.',
    responsibilities: [
      'Interface administrativa e dashboard',
      'Regras de negócio e arquitetura de módulos',
      'Modelagem e integração com banco de dados',
      'Autenticação, papéis de usuário e permissões',
      'Geração de documentos jurídicos',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'Vercel'],
    image: 'saas_caldasebrito.png',
  },
  {
    id: 'caldas-brito-landing',
    name: 'Caldas & Brito — Landing Page',
    category: 'Landing Page / Institucional',
    description:
      'Site institucional do escritório Caldas & Brito Advocacia, apresentando os advogados, áreas de atuação e canais de contato de forma profissional.',
    responsibilities: [
      'Design e desenvolvimento da interface',
      'Componentes por advogado e área de atuação',
      'Responsividade e ajustes de acessibilidade',
      'Deploy',
    ],
    stack: ['React', 'Tailwind CSS', 'Vercel'],
    image: 'caldasebrito_landing.png',
  },
  {
    id: 'event-eagle',
    name: 'Event Eagle',
    category: 'Event Management',
    description:
      'Plataforma para gerenciamento de eventos, inscrições e minicursos, com foco em uma experiência administrativa clara e organizada.',
    responsibilities: [
      'Criação e gerenciamento de eventos',
      'Fluxo de inscrições e participantes',
      'Estrutura de minicursos',
      'Organização de dados administrativos',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL'],
    image: 'eagle_event.png',
  },
]
