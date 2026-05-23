import { Instagram, Linkedin, MessageCircle, Mail } from 'lucide-react'

// -------------------------------------------------------
// LINKS SOCIAIS — Edite suas URLs aqui
// -------------------------------------------------------
const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/leangiraldes', // ← Troque pelo seu @
    Icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/leangiraldes', // ← Troque pelo seu perfil
    Icon: Linkedin,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5518999999999', // ← Troque pelo seu número
    Icon: MessageCircle,
  },
  {
    label: 'E-mail',
    href: 'mailto:leanvitorlimagiraldes@gmail.com',
    Icon: Mail,
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Linha principal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-[7px] bg-blue-600 flex items-center justify-center shrink-0">
                <span className="text-white text-[11px] font-bold">LG</span>
              </div>
              <span className="font-semibold text-[#d0d0d0] text-sm">
                Lean Giraldes
              </span>
            </div>
            <p className="text-[#333] text-xs mt-1">
              Modernizando empresas familiares.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-[#444] hover:text-[#d0d0d0] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-200"
              >
                <Icon className="w-[15px] h-[15px]" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Linha de copyright */}
        <div className="mt-8 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#2a2a2a] text-xs">
            © {year} Lean Giraldes. Todos os direitos reservados.
          </p>
          <p className="text-[#2a2a2a] text-xs">
            Presidente Prudente, SP — Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
