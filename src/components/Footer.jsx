import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.col}>
        Hecho con <b>QGIS</b> · exportado desde el compositor de impresión
      </span>
      <span className={styles.col}>
        <b>Camilo Sol Quiroga</b> · TUSIGyT · 2026
      </span>
    </footer>
  )
}
