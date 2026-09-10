import { useTilt } from '../hooks/useTilt.js'
import styles from './MapFrame.module.css'

// el marco del mapa (con el tilt). click = abre en grande
export default function MapFrame({ img, alt, caption, onOpen }) {
  const { frameRef, shineRef } = useTilt()

  return (
    <div className={styles.frame} ref={frameRef}>
      <span className={`${styles.tick} ${styles.tl}`} />
      <span className={`${styles.tick} ${styles.tr}`} />
      <span className={`${styles.tick} ${styles.bl}`} />
      <span className={`${styles.tick} ${styles.br}`} />

      <div className={styles.neat}>
        <button
          className={styles.imgBtn}
          type="button"
          onClick={() => onOpen(img, caption)}
        >
          <img src={img} alt={alt} />
        </button>
        <span className={styles.zoomhint}>⤢ Ver en detalle</span>
        <span className={styles.shine} ref={shineRef} aria-hidden="true" />
      </div>
    </div>
  )
}
