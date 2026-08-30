import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#formacao', label: 'Formação' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#stack', label: 'Stack' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          scrolled ? 'py-3' : 'py-6',
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-300 sm:px-6',
            scrolled &&
              'border border-[var(--border)] bg-[var(--bg)]/70 py-2 shadow-[0_1px_0_0_var(--border)] backdrop-blur-xl',
          )}
        >
          <a href="#top" className="mono-caption text-sm font-medium tracking-widest" data-cursor-hover>
            EB
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]',
                  active === link.href && 'text-[var(--fg)]',
                )}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute inset-x-4 -bottom-0.5 h-px bg-[var(--fg)]"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Alternar tema"
              data-cursor-hover
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href="#contato" className="hidden sm:block" data-cursor-hover>
              <Button size="sm">Contato</Button>
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] lg:hidden"
            >
              <Menu size={17} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-[var(--bg)] lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-6">
              <span className="mono-caption text-sm">EB</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)]"
              >
                <X size={17} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="font-display text-3xl font-medium tracking-tight text-[var(--fg)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
