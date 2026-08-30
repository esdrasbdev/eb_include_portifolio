import { motion } from 'framer-motion'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import type { Project } from '@/data/projects'
import { getProjectImage } from '@/lib/project-images'
import { PROJECT_LINKS } from '@/data/social-links'
import { Button } from '@/components/ui/button'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const imageSrc = getProjectImage(project.image)
  const href = project.href ?? PROJECT_LINKS[project.id]
  const hasLink = !!href && href !== 'COLOCAR_LINK_AQUI'

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)]/40 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]"
    >
      {/* imagem do projeto */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Captura de tela do projeto ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="bg-grid flex h-full w-full flex-col items-center justify-center gap-2 text-center">
            <ImageIcon size={20} strokeWidth={1.5} className="text-[var(--fg-muted)]" />
            <span className="mono-caption px-6 text-[10px] text-[var(--fg-muted)]">
              Imagem do projeto
              <br />
              src/assets/projects/{project.image ?? '—'}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {hasLink && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)]/80 backdrop-blur-sm transition-all duration-300 hover:border-[var(--fg)] hover:-translate-y-0.5 hover:translate-x-0.5"
          >
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>

      {/* informações do projeto */}
      <div className="p-8 sm:p-10">
        <span className="mono-caption text-xs text-[var(--fg-muted)]">{project.category}</span>

        <h3 className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-3xl">{project.name}</h3>
        <p className="mt-4 max-w-lg text-[var(--fg-muted)]">{project.description}</p>

        <ul className="mt-6 space-y-2">
          {project.responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2.5 text-sm text-[var(--fg-muted)]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--fg-muted)]" />
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg-muted)]">
                {tech}
              </span>
            ))}
          </div>

          {hasLink && (
            <a href={href} target="_blank" rel="noopener noreferrer" data-cursor-hover className="shrink-0">
              <Button variant="secondary" size="sm">
                Visitar site
                <ArrowUpRight size={13} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
