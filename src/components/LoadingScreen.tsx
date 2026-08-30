import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const STEPS = [
  'Inicializando',
  'Carregando assets',
  'Montando interface',
  'ESDRAS BRITO',
  'FULL-STACK DEVELOPER',
  'Pronto',
]
const TOTAL_MS = 3400

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const elapsed = now - start
      // easing com pequenas pausas para parecer um carregamento real
      const linear = Math.min(elapsed / TOTAL_MS, 1)
      const eased = linear < 0.85 ? linear / 0.85 * 0.92 : 0.92 + ((linear - 0.85) / 0.15) * 0.08
      setProgress(Math.min(eased * 100, 100))
      if (elapsed < TOTAL_MS) {
        raf = requestAnimationFrame(tick)
      }
    }
    raf = requestAnimationFrame(tick)

    const hide = setTimeout(() => setVisible(false), TOTAL_MS + 280)
    const done = setTimeout(onDone, TOTAL_MS + 650)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(hide)
      clearTimeout(done)
    }
  }, [onDone])

  const stepIndex = Math.min(Math.floor((progress / 100) * STEPS.length), STEPS.length - 1)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 overflow-hidden bg-[var(--bg)]"
        >
          {/* grid + glow de fundo */}
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.25]" />
          <motion.div
            className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[var(--fg)]/[0.05] blur-[100px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* partículas flutuantes */}
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-[var(--fg-muted)]"
              style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 22}%` }}
              animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -14, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            />
          ))}

          {/* logo com anéis orbitais */}
          <div className="relative z-10 grid h-28 w-28 place-items-center">
            <motion.div
              className="absolute inset-0 rounded-full border border-[var(--border-strong)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-dashed border-[var(--border)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-7 rounded-full border border-[var(--border)] opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 rounded-full bg-[var(--fg)]/[0.06] blur-xl" />
            <motion.span
              className="mono-caption text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              EB
            </motion.span>
          </div>

          {/* rótulo de etapa */}
          <div className="z-10 h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={stepIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mono-caption block text-xs text-[var(--fg-muted)] sm:text-sm"
              >
                {STEPS[stepIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* barra de progresso + porcentagem */}
          <div className="z-10 flex w-56 flex-col items-center gap-3 sm:w-72">
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[var(--border)]">
              <motion.div
                className="h-full bg-[var(--fg)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-[var(--fg)]/40 to-transparent"
                animate={{ left: ['-10%', '110%'] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="mono-caption text-[10px] tabular-nums text-[var(--fg-muted)]">
                {Math.round(progress).toString().padStart(2, '0')}%
              </span>
              <span className="flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1 w-1 rounded-full bg-[var(--fg-muted)]"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
                  />
                ))}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
