import { useEffect, useRef } from 'react'
import styles from './Lightbox.module.css'

// el mapa en grande. cierra con la x, click afuera o esc
export default function Lightbox({ data, onClose }) {
  const closeRef = useRef(null)
  const open = data != null

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className={styles.lb}
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada del mapa"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <button className={styles.close} type="button" onClick={onClose} aria-label="Cerrar" ref={closeRef}>
        ✕
      </button>
      <figure className={styles.figure}>
        <img src={data.src} alt={data.caption} />
        <figcaption>{data.caption}</figcaption>
      </figure>
    </div>
  )
}
