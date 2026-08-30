import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { HOBBIES } from '@/data/hobbies'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'

export function OrbitalTimeline() {
  const [angle, setAngle] = useState(0)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const rafRef = useRef(0)
  const reducedMotion = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 640px)')
  const paused = selectedId !== null || reducedMotion

  const radius = isMobile ? 118 : 190
  const nodeSize = isMobile ? 52 : 64

  useEffect(() => {
    if (paused) return
    let last = performance.now()
    const tick = (now: number) => {
      const dt = now - last
      last = now
      setAngle((a) => (a + dt * 0.008) % 360)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused])

  const selected = HOBBIES.find((h) => h.id === selectedId) ?? null
  const relatedIds = new Set(selected?.relatedIds ?? [])

  const selectedIndex = HOBBIES.findIndex((h) => h.id === selectedId)
  const step = 360 / HOBBIES.length
  const selTheta = selectedIndex >= 0 ? ((angle + selectedIndex * step) * Math.PI) / 180 : 0
  const selX = Math.cos(selTheta) * radius
  const selY = Math.sin(selTheta) * radius
  const cardGap = nodeSize / 2 + 16

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
      {/* orbit ring */}
      <div className="absolute inset-0 m-auto rounded-full border border-dashed border-[var(--border)]" />
      <div
        className="absolute rounded-full border border-[var(--border)] opacity-40"
        style={{ width: radius * 0.55, height: radius * 0.55 }}
      />

      {/* center node */}
      <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-lg sm:h-24 sm:w-24">
        <div className="absolute inset-0 -z-10 rounded-full bg-[var(--fg)]/10 blur-2xl" />
        <span className="mono-caption text-sm">EB</span>
      </div>

      {HOBBIES.map((hobby, i) => {
        const step = 360 / HOBBIES.length
        const theta = ((angle + i * step) * Math.PI) / 180
        const x = Math.cos(theta) * radius
        const y = Math.sin(theta) * radius
        const isSelected = selectedId === hobby.id
        const isRelated = relatedIds.has(hobby.id)
        const dimmed = selectedId !== null && !isSelected && !isRelated
        const Icon = hobby.icon

        return (
          <button
            key={hobby.id}
            data-cursor-hover
            onClick={() => setSelectedId((cur) => (cur === hobby.id ? null : hobby.id))}
            aria-label={hobby.label}
            aria-pressed={isSelected}
            className={cn(
              'absolute z-10 flex flex-col items-center justify-center rounded-full border bg-[var(--bg)] transition-all duration-500',
              isSelected
                ? 'border-[var(--fg)] shadow-[0_0_0_4px_var(--border)]'
                : isRelated
                  ? 'border-[var(--border-strong)]'
                  : 'border-[var(--border)]',
              dimmed && 'opacity-30',
            )}
            style={{
              width: nodeSize,
              height: nodeSize,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <Icon size={isMobile ? 16 : 20} strokeWidth={1.5} />
            <span className="mono-caption absolute -bottom-6 whitespace-nowrap text-[9px] text-[var(--fg-muted)] sm:text-[10px]">
              {hobby.label}
            </span>
            {isSelected && (
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--fg)]/10" />
            )}
          </button>
        )
      })}

      {/* info card */}
      <AnimatePresence>
        {selected && (
          <div
            className="absolute z-20 w-[min(260px,80vw)] sm:w-[240px]"
            style={
              isMobile
                ? { left: '50%', bottom: '-1rem', transform: 'translate(-50%, 100%)' }
                : {
                    left: `calc(50% + ${selX}px)`,
                    top: `calc(50% + ${selY}px)`,
                    transform: selX >= 0 ? `translate(${cardGap}px, -50%)` : `translate(calc(-100% - ${cardGap}px), -50%)`,
                  }
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: isMobile ? 0 : selX >= 0 ? -8 : 8, y: isMobile ? 8 : 0 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'relative rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-5 text-center shadow-2xl backdrop-blur-xl sm:text-left',
                isMobile && 'text-center',
              )}
            >
              {/* setinha conectando o card ao nó */}
              {!isMobile && (
                <span
                  className={cn(
                    'absolute top-1/2 h-px w-4 -translate-y-1/2 bg-[var(--border-strong)]',
                    selX >= 0 ? '-left-4' : '-right-4',
                  )}
                />
              )}

              <button
                onClick={() => setSelectedId(null)}
                aria-label="Fechar"
                className="absolute right-3 top-3 text-[var(--fg-muted)] hover:text-[var(--fg)]"
              >
                <X size={14} />
              </button>
              <p className="mono-caption text-xs text-[var(--fg-muted)]">{selected.label}</p>
              <p className="mt-2 text-sm text-[var(--fg)]">{selected.description}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
