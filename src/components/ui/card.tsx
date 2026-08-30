import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/60 backdrop-blur-sm',
        className,
      )}
      {...props}
    />
  )
}
