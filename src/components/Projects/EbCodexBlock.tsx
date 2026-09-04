import { motion } from 'framer-motion'
import { ArrowRight, Layers, Server, Database, Rocket } from 'lucide-react'
import { InstagramIcon } from '@/components/icons/BrandIcons'
import { EBCODEX_INSTAGRAM_URL, EBCODEX_SITE_URL } from '@/data/social-links'
import { Button } from '@/components/ui/button'

const MARKS = [
  { icon: Layers, label: 'Produto' },
  { icon: Server, label: 'API' },
  { icon: Database, label: 'Dados' },
  { icon: Rocket, label: 'Deploy' },
]

export function EbCodexBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-elevated)]/60 p-8 shadow-[0_1px_0_0_var(--border)] sm:p-12"
    >
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div
        className="pointer-events-none absolute -inset-x-20 -top-40 h-80 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: 'radial-gradient(closest-side, var(--fg), transparent)', opacity: 0.05 }}
      />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <span className="mono-caption text-xs text-[var(--fg-muted)]">
            Digital Products / Full-Stack Web Experiences
          </span>
          <h3 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">EB CODEX</h3>
          <p className="mt-4 text-[var(--fg-muted)]">
            Minha identidade profissional voltada para desenvolvimento de produtos digitais, aplicações web,
            interfaces, APIs e experiências completas.
          </p>
          <p className="mt-2 text-sm text-[var(--fg-muted)]">
            Digital products. Full-stack systems. Web experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={EBCODEX_SITE_URL} target="_blank" rel="noopener noreferrer" data-cursor-hover>
              <Button variant="secondary" size="sm">
                Conhecer EB CODEX
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a
              href={EBCODEX_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
            >
              <InstagramIcon className="h-[15px] w-[15px]" />
              Instagram da EB CODEX
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {MARKS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] sm:px-8"
            >
              <Icon size={18} strokeWidth={1.5} />
              <span className="mono-caption text-[10px] text-[var(--fg-muted)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
