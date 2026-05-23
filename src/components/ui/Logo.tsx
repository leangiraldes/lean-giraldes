'use client'

interface LogoProps {
  /** Callback opcional — usado no Header para fechar o menu mobile ao clicar */
  onClick?: () => void
}

/**
 * Logotipo da marca — componente compartilhado entre Header e Footer.
 * Sempre leva ao topo da página (#inicio).
 */
export function Logo({ onClick }: LogoProps) {
  return (
    <a
      href="#inicio"
      onClick={onClick}
      className="inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040404] rounded"
      aria-label="Lean Giraldes — início da página"
    >
      <div
        className="w-6 h-6 rounded-[6px] bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200 shrink-0"
        aria-hidden="true"
      >
        <span className="text-white text-[10px] font-bold leading-none">LG</span>
      </div>
      <span className="text-[13px] font-medium text-[#777] group-hover:text-[#bbb] transition-colors duration-200">
        Lean Giraldes
      </span>
    </a>
  )
}
