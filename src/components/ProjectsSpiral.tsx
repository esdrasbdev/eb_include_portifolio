import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import InfiniteSpiral from '@/components/InfiniteSpiral'
import gessicaSaas from '@/assets/projects/Saas_Gessica.png'
import gessicaLanding from '@/assets/projects/gessicalanding.png'
import caldasSaas from '@/assets/projects/saas_caldasebrito.png'
import caldasLanding from '@/assets/projects/caldasebrito_landing.png'
import eagleEvent from '@/assets/projects/eagle_event.png'

const SPIRAL_ITEMS = [
  { src: gessicaSaas, alt: 'Sistema Advogada Géssica', label: 'Advogada Géssica — Sistema' },
  { src: caldasLanding, alt: 'Landing page Caldas & Brito', label: 'Caldas & Brito — Landing Page' },
  { src: eagleEvent, alt: 'Plataforma Event Eagle', label: 'Event Eagle' },
  { src: gessicaLanding, alt: 'Landing page Géssica Sampaio', label: 'Géssica Sampaio — Landing Page' },
  { src: caldasSaas, alt: 'Sistema Caldas & Brito Advocacia', label: 'Caldas & Brito — Sistema' },
]

export function ProjectsSpiral() {
  const isMobile = useMediaQuery('(max-width: 640px)')

  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-elevated)] py-16 sm:py-24">
      {/* textura e glow de fundo, coerente com o resto do site */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--fg)]/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mono-caption text-xs text-[var(--fg-muted)]"
        >
          Um giro pelo que já construí
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-3 text-sm text-[var(--fg-muted)]"
        >
          Arraste, role ou apenas observe girar
        </motion.p>
      </div>

      <div className="relative" style={{ height: isMobile ? 620 : 620 }}>
        <InfiniteSpiral
          items={SPIRAL_ITEMS}
          animationMode="all"
          speed={0.4}
          radius={isMobile ? 190 : 280}
          cardWidth={isMobile ? 300 : 360}
          cardHeight={isMobile ? 150 : 180}
          verticalSpacing={isMobile ? 76 : 84}
          perspective={1200}
          cardRadius={14}
          centerScale={1.3}
          edgeFade={0.3}
          edgeBlur={2}
          cardsPerTurn={5}
          pauseOnHover
        />

        {/* fade suave nas bordas superior/inferior, integrando com o fundo da seção */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--bg-elevated)] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent" />
      </div>
    </section>
  )
}
