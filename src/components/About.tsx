import { motion } from 'framer-motion'
import { Cake, Code2, GraduationCap, MapPin, Layers } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

const FACTS = [
  { icon: Cake, label: 'Idade', value: '19 anos' },
  { icon: Code2, label: 'Atuação', value: 'Full-Stack Developer' },
  { icon: GraduationCap, label: 'Formação', value: 'Engenharia de Software' },
  { icon: MapPin, label: 'Localização', value: 'Brasil' },
  { icon: Layers, label: 'Foco', value: 'Produtos digitais' },
]

const AREAS = ['Front-End', 'Back-End', 'APIs', 'Databases', 'Cloud', 'DevOps']

export function About() {
  return (
    <section id="sobre" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          label="Sobre mim"
          title="Construindo produtos digitais do conceito ao deploy."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-balance text-lg leading-relaxed text-[var(--fg-muted)]"
          >
            <p>
              Sou <span className="text-[var(--fg)]">Esdras Brito</span>, desenvolvedor Full-Stack e estudante de
              Engenharia de Software. Gosto de transformar problemas em soluções digitais completas, combinando
              interfaces modernas, lógica de negócio, APIs, bancos de dados e boas práticas de desenvolvimento.
            </p>
            <p>
              Tenho interesse em criar produtos úteis, escaláveis e bem estruturados, sempre buscando equilibrar
              qualidade técnica, experiência do usuário e clareza de código.
            </p>

            <div className="!mt-10 flex flex-wrap gap-2 pt-2">
              {AREAS.map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="rounded-full border border-[var(--border)] px-3.5 py-1.5 text-xs text-[var(--fg-muted)] transition-colors duration-300 hover:border-[var(--fg-muted)] hover:text-[var(--fg)]"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/40 p-2"
          >
            {FACTS.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className={
                  'flex items-center gap-4 rounded-xl px-4 py-4 transition-colors duration-300 hover:bg-[var(--fg)]/[0.03] ' +
                  (i !== FACTS.length - 1 ? 'border-b border-[var(--border)]' : '')
                }
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--fg-muted)]">
                  <Icon size={16} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="mono-caption text-[10px] text-[var(--fg-muted)]">{label}</p>
                  <p className="mt-0.5 font-display text-base font-medium tracking-tight">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
