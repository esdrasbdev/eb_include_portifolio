import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const isFinePointer = useMediaQuery('(pointer: fine)')
  const reducedMotion = useReducedMotion()
  const [expanded, setExpanded] = useState(false)
  const enabled = isFinePointer && !reducedMotion

  useEffect(() => {
    if (!enabled) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        dotRef.current?.style.setProperty('transform', `translate3d(${e.clientX}px, ${e.clientY}px, 0)`)
      })
    }
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setExpanded(!!target.closest('a, button, [data-cursor-hover]'))
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <div
        className="rounded-full bg-white transition-[width,height] duration-200 ease-out"
        style={{
          width: expanded ? 36 : 8,
          height: expanded ? 36 : 8,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  )
}
