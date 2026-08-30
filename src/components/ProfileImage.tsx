import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TECH_ICONS } from '@/data/tech-icons'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import esdrasPhoto from '@/assets/profile/esdras.jpg'

const ORBIT_LABELS = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST API', 'Vercel']

export function ProfileImage() {
  const cardRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const springX = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.4 })
  const springY = useSpring(my, { stiffness: 150, damping: 20, mass: 0.4 })
  const rotateX = useTransform(springY, [0, 1], [7, -7])
  const rotateY = useTransform(springX, [0, 1], [-7, 7])
  const glowX = useTransform(springX, (v) => `${v * 100}%`)
  const glowY = useTransform(springY, (v) => `${v * 100}%`)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto aspect-square w-full max-w-sm"
      style={{ perspective: 900 }}
    >
      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-[var(--fg)]/[0.08] blur-[70px]" />

      {/* orbital ring with tech labels */}
      <div className="animate-spin-slower absolute -inset-6 rounded-full border border-dashed border-[var(--border)] sm:-inset-10">
        {ORBIT_LABELS.map((label, i) => {
          const angle = (i / ORBIT_LABELS.length) * 360
          const Icon = TECH_ICONS[label]
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2 h-fit w-fit"
              style={{ transform: `rotate(${angle}deg) translate(0, -150%) rotate(-${angle}deg)` }}
            >
              <span
                className="mono-caption inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--bg)]/80 px-2.5 py-1 text-[10px] text-[var(--fg-muted)] backdrop-blur-sm sm:px-3 sm:text-[11px]"
                style={{ animation: 'none' }}
              >
                {Icon && <Icon size={11} />}
                {label}
              </span>
            </div>
          )
        })}
      </div>

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-2xl"
      >
        <div className="aspect-square w-full">
          <img
            src={esdrasPhoto}
            alt="Esdras Brito"
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 70%' }}
          />
        </div>

        {/* spotlight que segue o mouse */}
        {!reducedMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) => `radial-gradient(220px circle at ${x} ${y}, rgb(255 255 255 / 0.18), transparent 70%)`,
              ),
            }}
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent" />
      </motion.div>
    </motion.div>
  )
}
