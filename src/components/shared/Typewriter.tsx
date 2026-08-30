import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function Typewriter({
  words,
  className,
  typingSpeed = 55,
  deletingSpeed = 32,
  pauseMs = 1900,
}: {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
}) {
  const reducedMotion = useReducedMotion()
  const [text, setText] = useState(reducedMotion ? words[0] : '')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reducedMotion) return
    const current = words[wordIndex % words.length]
    let timeout: number

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text === '') {
      timeout = window.setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }, 260)
    } else {
      timeout = window.setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
        },
        deleting ? deletingSpeed : typingSpeed,
      )
    }
    return () => window.clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, reducedMotion, pauseMs, typingSpeed, deletingSpeed])

  return (
    <span className={cn('inline-flex items-center', className)}>
      {text}
      <span
        aria-hidden
        className="ml-1 inline-block w-[2px] animate-pulse bg-current"
        style={{ height: '0.85em' }}
      />
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  )
}
