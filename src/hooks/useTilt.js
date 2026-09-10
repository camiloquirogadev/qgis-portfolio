import { useEffect, useRef } from 'react'

// inclina la lámina siguiendo el mouse, con un brillo que la recorre.
// solo con mouse (no en touch) y si no piden menos movimiento.
const MAX_DEG = 6

export function useTilt() {
  const frameRef = useRef(null)
  const shineRef = useRef(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    if (reduce || !fine) return

    let raf = null
    let rotX = 0, rotY = 0, posX = 50, posY = 50

    // pinto una vez por frame
    const paint = () => {
      raf = null
      frame.style.transform =
        `perspective(1200px) rotateX(${rotY}deg) rotateY(${rotX}deg) translateY(-5px)`
      const shine = shineRef.current
      if (shine) {
        shine.style.opacity = '1'
        shine.style.background =
          `radial-gradient(340px circle at ${posX}% ${posY}%, rgba(255,255,255,.34), rgba(255,255,255,0) 62%)`
      }
    }

    const onMove = (e) => {
      const r = frame.getBoundingClientRect()
      posX = ((e.clientX - r.left) / r.width) * 100
      posY = ((e.clientY - r.top) / r.height) * 100
      rotX = ((posX / 100) - 0.5) * (MAX_DEG * 2)
      rotY = (0.5 - (posY / 100)) * (MAX_DEG * 2)
      if (!raf) raf = requestAnimationFrame(paint)
    }

    // al salir vuelve a plano
    const onLeave = () => {
      if (raf) { cancelAnimationFrame(raf); raf = null }
      frame.style.transform = ''
      const shine = shineRef.current
      if (shine) shine.style.opacity = '0'
    }

    frame.addEventListener('pointermove', onMove)
    frame.addEventListener('pointerleave', onLeave)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      frame.removeEventListener('pointermove', onMove)
      frame.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return { frameRef, shineRef }
}
