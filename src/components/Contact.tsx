import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { SocialLinks } from '@/components/SocialLinks'
import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS } from '@/data/social-links'

export function Contact() {
  return (
    <section id="contato" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border-strong)] px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ background: 'radial-gradient(600px circle at 50% 0%, var(--fg), transparent 70%)' }}
          />

          <SectionHeading
            index="07"
            label="Vamos construir algo?"
            title="Estou aberto a novos projetos, ideias e oportunidades para construir produtos digitais completos."
            align="center"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-6 max-w-md text-sm text-[var(--fg-muted)]"
          >
            Se você tem uma ideia, um problema ou um produto em construção, vamos conversar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex flex-col items-center gap-8"
          >
            <a href={`mailto:${SOCIAL_LINKS.email}`} data-cursor-hover>
              <Button>
                Entrar em contato
                <ArrowRight size={15} />
              </Button>
            </a>
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
