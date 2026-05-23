/**
 * Constantes e variantes de animação — fonte única da verdade.
 * Importe SPRING em vez de redefinir `ease` em cada componente.
 */

/** Spring suave — mesmo easing usado por Linear, Framer e iOS */
export const SPRING = [0.16, 1, 0.3, 1] as const

/** Variante padrão: fade + deslize para cima ao entrar na viewport */
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: SPRING },
  }),
}
