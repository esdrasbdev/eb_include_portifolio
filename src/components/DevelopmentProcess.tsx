import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'

const STEPS = [
  { n: '01', title: 'Entendimento', description: 'Compreender o problema, o público e os objetivos do produto.' },
  { n: '02', title: 'Planejamento', description: 'Definir escopo, arquitetura, tecnologias e prioridades.' },
  { n: '03', title: 'Interface', description: 'Criar experiências claras, responsivas e consistentes.' },
  { n: '04', title: 'Desenvolvimento', description: 'Construir componentes, APIs, regras de negócio e integrações.' },
  { n: '05', title: 'Dados', description: 'Estruturar bancos de dados, autenticação e persistência.' },
  { n: '06', title: 'Deploy', description: 'Publicar, monitorar e evoluir o produto.' },
]

export function DevelopmentProcess() {
  return (
    <section id="processo" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="06" label="Como eu construo" title="Um processo pensado para produtos completos." />

        <div className="relative mt-20">
          {/* linha base */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--border)] lg:block" />

          {/* linha animada, "desenhada" ao entrar na tela */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
            className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--fg)] lg:block"
          />

          {/* ponto viajando pela linha, sugerindo fluxo contínuo */}
          <motion.div
            className="absolute top-6 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--fg)] shadow-[0_0_12px_2px_var(--glow)] lg:block"
            initial={{ left: '0%', opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ left: ['0%', '100%'] }}
            transition={{
              opacity: { duration: 0.4, delay: 1.4 },
              left: { duration: 3.5, repeat: Infinity, ease: 'linear', delay: 1.6 },
            }}
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.15, ease: 'backOut' }}
                  className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] font-display text-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--fg)] group-hover:shadow-[0_0_20px_-4px_var(--glow)]"
                >
                  {step.n}
                </motion.div>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-[var(--fg)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
