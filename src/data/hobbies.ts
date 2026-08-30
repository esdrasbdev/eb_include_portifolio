import { Gamepad2, Cpu, Dumbbell, Headphones, Rocket, BookOpen, type LucideIcon } from 'lucide-react'
import { BasketballIcon } from '@/components/icons/BrandIcons'
import type { ComponentType } from 'react'

export interface Hobby {
  id: string
  label: string
  icon: LucideIcon | ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  description: string
  relatedIds: string[]
}

export const HOBBIES: Hobby[] = [
  {
    id: 'games',
    label: 'Games',
    icon: Gamepad2,
    description: 'Um fifinha de vez em quando é bom....',
    relatedIds: ['tecnologia'],
  },
  {
    id: 'tecnologia',
    label: 'Tecnologia',
    icon: Cpu,
    description: 'Procuro sempre me manter atualizado com as tendências e novidades do mundo da tecnologia.',
    relatedIds: ['projetos', 'aprendizado'],
  },
  {
    id: 'academia',
    label: 'Academia',
    icon: Dumbbell,
    description: 'Disciplina, consistência e evolução. Treinar o corpo para manter a mente saudável. ',
    relatedIds: ['basquete'],
  },
  {
    id: 'basquete',
    label: 'Basquete',
    icon: BasketballIcon,
    description: 'Jogar em quadra, competir e manter o corpo em movimento fora da tela. Não compensa ser sedentário, né?',
    relatedIds: ['academia'],
  },
  {
    id: 'musica',
    label: 'Música',
    icon: Headphones,
    description: 'Uma parte constante da minha rotina, principalmente durante momentos de foco. Sem música, não consigo me concentrar.',
    relatedIds: [],
  },
  {
    id: 'projetos',
    label: 'Projetos pessoais',
    icon: Rocket,
    description: 'Desenvolver projetos pessoais é uma forma de aprender, experimentar e criar soluções que impactam positivamente a vida das pessoas.',
    relatedIds: ['aprendizado', 'tecnologia'],
  },
  {
    id: 'aprendizado',
    label: 'Aprendizado',
    icon: BookOpen,
    description: 'Estou sempre em busca de novos conhecimentos, habilidades e experiências para crescer pessoal e profissionalmente.',
    relatedIds: ['tecnologia', 'projetos'],
  },
]
