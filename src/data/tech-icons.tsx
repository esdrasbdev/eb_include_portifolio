import type { IconType } from 'react-icons'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiFigma,
  SiPostman,
  SiNotion,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

/**
 * Mapa "nome da tecnologia (como aparece em technologies.ts)" -> ícone real da marca.
 * Tecnologias sem logo correspondente (ex: "REST API", "Autenticação") simplesmente
 * não aparecem aqui e o card exibe só o texto, sem ícone.
 */
export const TECH_ICONS: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Docker: SiDocker,
  Figma: SiFigma,
  Postman: SiPostman,
  Notion: SiNotion,
  'VS Code': VscVscode,
}
