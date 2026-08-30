import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiVercel,
  SiGithub,
} from 'react-icons/si'
import { LogoLoop, type LogoItem } from '@/components/LogoLoop'

const LOGOS: LogoItem[] = [
  { node: <SiReact />, title: 'React' },
  { node: <SiNextdotjs />, title: 'Next.js' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
  { node: <SiNodedotjs />, title: 'Node.js' },
  { node: <SiPostgresql />, title: 'PostgreSQL' },
  { node: <SiMongodb />, title: 'MongoDB' },
  { node: <SiFirebase />, title: 'Firebase' },
  { node: <SiDocker />, title: 'Docker' },
  { node: <SiVercel />, title: 'Vercel' },
  { node: <SiGithub />, title: 'GitHub' },
]

export function TechMarquee() {
  return (
    <div className="tech-marquee relative border-y border-[var(--border)] bg-[var(--bg-elevated)]/30 py-7 sm:py-9">
      <LogoLoop
        logos={LOGOS}
        speed={48}
        direction="left"
        logoHeight={26}
        gap={56}
        fadeOut
        fadeOutColor="var(--bg)"
        hoverSpeed={12}
        ariaLabel="Tecnologias e ferramentas utilizadas"
      />
    </div>
  )
}
