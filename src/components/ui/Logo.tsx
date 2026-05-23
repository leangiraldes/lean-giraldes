'use client'

interface LogoProps {
  /** Fecha o menu mobile ao clicar — usado no Header */
  onClick?: () => void
}

/**
 * Logo horizontal da marca — fiel ao brand guide.
 * Formato: "LG" (extralight) + separador + "Lean Giraldes" (uppercase tracked).
 * Usado em Header e Footer.
 */
export function Logo({ onClick }: LogoProps) {
  return (
    <a
      href="#inicio"
      onClick={onClick}
      className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded"
      aria-label="Lean Giraldes — início da página"
    >
      {/* Monograma LG — Inter ExtraLight, fiel ao brand guide */}
      <span
        className="text-[1.15rem] font-extralight tracking-[-0.03em] leading-none text-white/70 group-hover:text-white/90 transition-colors duration-300"
        aria-hidden="true"
      >
        LG
      </span>

      {/* Separador vertical — referência ao logo horizontal do brand guide */}
      <span
        className="w-px h-3.5 bg-white/[0.10] shrink-0"
        aria-hidden="true"
      />

      {/* Nome da marca em uppercase — tracking largo como no brand guide */}
      <span className="text-[11px] font-light text-[#444] uppercase tracking-[0.2em] group-hover:text-[#666] transition-colors duration-300 leading-none">
        Lean Giraldes
      </span>
    </a>
  )
}
