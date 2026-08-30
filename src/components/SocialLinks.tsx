import { Mail } from 'lucide-react'
import { InstagramIcon, LinkedinIcon, GithubIcon } from '@/components/icons/BrandIcons'
import { SOCIAL_LINKS } from '@/data/social-links'
import { cn } from '@/lib/utils'

const ITEMS = [
  { key: 'instagram', label: 'Instagram', icon: InstagramIcon, href: SOCIAL_LINKS.instagram },
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin },
  { key: 'github', label: 'GitHub', icon: GithubIcon, href: SOCIAL_LINKS.github },
  { key: 'email', label: 'E-mail', icon: Mail, href: `mailto:${SOCIAL_LINKS.email}` },
]

export function SocialLinks({ className, iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {ITEMS.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href}
          target={key === 'email' ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          data-cursor-hover
          className="group grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--fg)] hover:text-[var(--fg)] hover:shadow-[0_0_16px_-4px_var(--glow)]"
        >
          <Icon size={16} />
          {!iconOnly && <span className="sr-only">{label}</span>}
        </a>
      ))}
    </div>
  )
}
