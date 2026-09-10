import MapFrame from './MapFrame.jsx'
import TitleBlock from './TitleBlock.jsx'
import styles from './Plate.module.css'

export default function Plate({ map, order, onOpen }) {
  const flip = order % 2 === 1                 // las impares dan vuelta el lado del mapa
  const delay = `${0.34 + order * 0.14}s`      // escalono la entrada

  return (
    <section
      id={map.id}
      className={`${styles.plate} rise`}
      style={{ animationDelay: delay }}
    >
      <p className={styles.index}>
        <b>{map.index}</b> <span>{map.eyebrow}</span>
        <span className={styles.rule} /> <span>{map.unit}</span>
      </p>

      <div className={`${styles.layout} ${flip ? styles.flip : ''}`}>
        <MapFrame
          img={map.img}
          alt={map.alt}
          caption={map.caption}
          onOpen={onOpen}
        />
        <TitleBlock map={map} onOpen={onOpen} />
      </div>
    </section>
  )
}
