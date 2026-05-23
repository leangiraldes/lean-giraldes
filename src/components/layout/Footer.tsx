import { Instagram, Linkedin, MessageCircle, Mail } from 'lucide-react'

// ← Edite seus links aqui
const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/leangiraldes', Icon: Instagram },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/leangiraldes',  Icon: Linkedin },
  { label: 'WhatsApp',  href: 'https://wa.me/5518999999999',            Icon: MessageCircle },
  { label: 'E-mail',    href: 'mailto:leanvitorlimagiraldes@gmail.com', Icon: Mail },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-[6px] bg-blue-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">LG</span>
          </div>
          <span className="text-[13px] text-[#333]">
            Lean Giraldes — Modernizando empresas familiares.
          </span>
        </div>

        {/* Social + copyright */}
        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#252525] hover:text-[#555] transition-colors duration-200"
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}

          <span className="text-[#1e1e1e] text-[12px] pl-2 border-l border-white/[0.05]">
            © {year}
          </span>
        </div>
      </div>
    </footer>
  )
}
