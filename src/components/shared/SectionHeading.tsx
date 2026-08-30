import { motion } from 'framer-motion'

export function SectionHeading({
  index,
  label,
  title,
  subtitle,
  align = 'left',
}: {
  index: string
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className={
          'mono-caption flex items-center gap-3 text-xs text-[var(--fg-muted)] ' +
          (align === 'center' ? 'justify-center' : '')
        }
      >
        <span>{index}</span>
        <span className="h-px w-8 bg-[var(--border-strong)]" />
        <span>{label}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={
          'text-balance mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl ' +
          (align === 'center' ? 'mx-auto' : '')
        }
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={
            'mt-4 max-w-xl text-balance text-[var(--fg-muted)] ' +
            (align === 'center' ? 'mx-auto' : '')
          }
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
