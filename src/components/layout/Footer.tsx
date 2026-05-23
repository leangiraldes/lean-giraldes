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
    <footer className="border-t border-white/[0.04] py-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Linha principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand — logo horizontal + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo />
            <p className="text-[11px] text-[#222] uppercase tracking-[0.18em] font-light pl-[2.1rem]">
              {SITE.tagline}
            </p>
          </div>

          {/* Redes sociais */}
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
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#1e1e1e]">
            © {year} Lean Giraldes. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-[#1a1a1a]">
            Presidente Prudente, SP — Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
