export interface TechCategory {
  id: string
  label: string
  items: string[]
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Front-End',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    label: 'Back-End',
    items: ['Node.js', 'Express', 'Python', 'APIs REST', 'Autenticação', 'Integração de serviços', 'Arquitetura de aplicações'],
  },
  {
    id: 'database',
    label: 'Bancos de dados',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase', 'Modelagem de dados'],
  },
  {
    id: 'devops',
    label: 'DevOps & Infraestrutura',
    items: ['Git', 'GitHub', 'Vercel', 'Docker', 'CI/CD', 'Deploy', 'Variáveis de ambiente'],
  },
  {
    id: 'tools',
    label: 'Ferramentas',
    items: ['VS Code', 'Figma', 'Postman', 'Notion'],
  },
]
