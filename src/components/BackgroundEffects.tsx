import { useRef } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function BackgroundEffects() {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  useMousePosition(reducedMotion ? { current: null } : ref)

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-[0.35]" />
      <div
        className="absolute inset-0 opacity-[0.08] transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), var(--fg), transparent 70%)',
        }}
      />
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-[var(--fg)]/[0.05] blur-[120px]" />
      <div className="absolute -right-40 bottom-[-10%] h-[520px] w-[520px] rounded-full bg-[var(--fg)]/[0.04] blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
    </div>
  )
}
