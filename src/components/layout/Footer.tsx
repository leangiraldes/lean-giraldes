import { Instagram, Linkedin, MessageCircle, Mail } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { CONTACT, SITE } from '@/lib/config'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: CONTACT.instagram, Icon: Instagram },
  { label: 'LinkedIn',  href: CONTACT.linkedin,  Icon: Linkedin  },
  { label: 'WhatsApp',  href: CONTACT.whatsapp,  Icon: MessageCircle },
  { label: 'E-mail',    href: `mailto:${CONTACT.email}`, Icon: Mail },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Logo />
          <p className="text-[12px] text-[#252525] pl-8">{SITE.tagline}</p>
        </div>

        {/* Redes sociais + copyright */}
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={`${SITE.name} no ${label}`}
              className="text-[#252525] hover:text-[#555] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#555]"
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
          ))}

          <span
            className="text-[12px] text-[#1e1e1e] pl-4 border-l border-white/[0.05]"
            aria-label={`Copyright ${year}`}
          >
            © {year}
          </span>
        </div>
      </div>
    </footer>
  )
}
