import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs text-[var(--fg-muted)] transition-colors',
        className,
      )}
      {...props}
    />
  )
}
