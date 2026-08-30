import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { TECH_CATEGORIES } from '@/data/technologies'
import { TECH_ICONS } from '@/data/tech-icons'
import { cn } from '@/lib/utils'

export function TechStack() {
  const [active, setActive] = useState<string>('all')

  const categories = active === 'all' ? TECH_CATEGORIES : TECH_CATEGORIES.filter((c) => c.id === active)

  return (
    <section id="stack" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" label="Stack" title="Domínio de ponta a ponta." />

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActive('all')}
            className={cn(
              'relative rounded-full px-4 py-2 text-xs transition-colors',
              active === 'all' ? 'text-[var(--bg)]' : 'border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)]',
            )}
          >
            {active === 'all' && (
              <motion.span
                layoutId="stack-filter-pill"
                className="absolute inset-0 rounded-full bg-[var(--fg)]"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <span className="relative">Todas</span>
          </button>
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                'relative rounded-full px-4 py-2 text-xs transition-colors',
                active === cat.id ? 'text-[var(--bg)]' : 'border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)]',
              )}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="stack-filter-pill"
                  className="absolute inset-0 rounded-full bg-[var(--fg)]"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.06 }}
              className="rounded-2xl border border-[var(--border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <h3 className="mono-caption text-xs text-[var(--fg-muted)]">{cat.label}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => {
                  const Icon = TECH_ICONS[item]
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--fg)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--fg)]"
                    >
                      {Icon && <Icon size={13} />}
                      {item}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
