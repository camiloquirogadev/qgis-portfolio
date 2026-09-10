import styles from './Hero.module.css'

const facts = [
  { k: 'Autor', v: 'Camilo Sol Quiroga' },
  { k: 'Herramienta', v: 'QGIS' },
  { k: 'Formación', v: 'TUSIGyT' },
]

export default function Hero() {
  return (
    <header className={styles.hero}>
      <p className={`${styles.eyebrow} rise`}>Mapas hechos en QGIS · TUSIGyT</p>
      <h1 className="rise" style={{ animationDelay: '.08s' }}>
        Cartografía <em>en QGIS</em>
      </h1>
      <p className={`${styles.lede} rise`} style={{ animationDelay: '.18s' }}>
        Una selección de mapas que fui armando en la tecnicatura: composición,
        simbología y layout de impresión.
      </p>
      <div className={`${styles.facts} rise`} style={{ animationDelay: '.26s' }}>
        {facts.map((f) => (
          <div className={styles.fact} key={f.k}>
            <span className={styles.k}>{f.k}</span>
            <span className={styles.v}>{f.v}</span>
          </div>
        ))}
      </div>
    </header>
  )
}
