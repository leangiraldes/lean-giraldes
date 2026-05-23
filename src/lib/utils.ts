/**
 * Utility: junta classes condicionalmente
 * Uso: cn('base-class', condition && 'extra-class')
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Utility: formata número de WhatsApp para link wa.me
 */
export function whatsappLink(number: string, message?: string): string {
  const base = `https://wa.me/${number}`
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`
  }
  return base
}
