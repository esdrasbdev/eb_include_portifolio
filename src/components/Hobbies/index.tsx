import { SectionHeading } from '@/components/shared/SectionHeading'
import { OrbitalTimeline } from './OrbitalTimeline'

export function Hobbies() {
  return (
    <section id="hobbies" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          label="Além do código"
          title="O que faço quando não estou construindo produtos digitais."
          align="center"
        />
        <div className="mt-16 sm:mt-20">
          <OrbitalTimeline />
        </div>
        <p className="mono-caption mx-auto mt-14 max-w-sm text-center text-[10px] text-[var(--fg-muted)] sm:mt-20">
          Toque em um nó para ver mais — a rotação pausa automaticamente
        </p>
      </div>
    </section>
  )
}
