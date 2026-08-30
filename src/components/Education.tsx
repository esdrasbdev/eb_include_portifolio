import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { EDUCATION } from '@/data/education'

export function Education() {
  return (
    <section id="formacao" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" label="Formação" title="Trajetória acadêmica e técnica." />

        <div className="relative mt-16 max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" />
          <div className="space-y-14">
            {EDUCATION.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
                </span>

                <p className="mono-caption text-xs text-[var(--fg-muted)]">{item.period}</p>
                <h3 className="mt-2 font-display text-xl font-medium tracking-tight sm:text-2xl">{item.degree}</h3>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">{item.institution}</p>
                {item.description && (
                  <p className="mt-3 max-w-lg text-[var(--fg-muted)]">{item.description}</p>
                )}
                {item.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
