import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProfileImage } from '@/components/ProfileImage'
import { SocialLinks } from '@/components/SocialLinks'
import { Typewriter } from '@/components/shared/Typewriter'

const ROLES = ['Software Engineering Student', 'Creative Developer', 'Full-Stack Developer']

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32">
      {/* elementos flutuantes decorativos */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[var(--fg-muted)]/40" />
        <div
          className="animate-float absolute right-[12%] top-[35%] h-1.5 w-1.5 rounded-full bg-[var(--fg-muted)]/30"
          style={{ animationDelay: '1.2s' }}
        />
        <div
          className="animate-float absolute left-[18%] bottom-[18%] h-1 w-1 rounded-full bg-[var(--fg-muted)]/30"
          style={{ animationDelay: '2.4s' }}
        />
        <div
          className="animate-float absolute right-[22%] bottom-[28%] h-2 w-2 rounded-full bg-[var(--fg-muted)]/20"
          style={{ animationDelay: '0.6s' }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8"
      >
        <div>
          <motion.p variants={item} className="mono-caption text-sm text-[var(--fg-muted)]">
            Olá, eu sou Esdras.
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
          >
            Full-Stack Developer &amp;
            <br />
            <Typewriter words={ROLES} className="text-[var(--fg-muted)]" />
          </motion.h1>

          <motion.p variants={item} className="text-balance mt-6 max-w-lg text-base text-[var(--fg-muted)] sm:text-lg">
            Construo produtos digitais completos, unindo interfaces bem projetadas, APIs robustas e soluções
            escaláveis.
          </motion.p>

          <motion.p variants={item} className="text-balance mt-3 max-w-lg text-sm text-[var(--fg-muted)]">
            Do primeiro conceito ao deploy, transformo ideias em experiências digitais funcionais, modernas e bem
            estruturadas.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projetos" data-cursor-hover>
              <Button>
                Ver projetos
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href="#sobre" data-cursor-hover>
              <Button variant="secondary">Sobre mim</Button>
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <SocialLinks />
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-2 text-xs text-[var(--fg-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--fg)] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--fg)]" />
            </span>
            Disponível para projetos e oportunidades
          </motion.div>
        </div>

        <motion.div variants={item}>
          <ProfileImage />
        </motion.div>
      </motion.div>

      {/* indicador de scroll */}
      <motion.a
        href="#sobre"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="mono-caption text-[10px] text-[var(--fg-muted)]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-[var(--border-strong)] p-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-[var(--fg-muted)]" />
        </motion.div>
      </motion.a>
    </section>
  )
}
