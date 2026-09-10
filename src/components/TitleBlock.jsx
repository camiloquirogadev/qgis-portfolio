import ProfileInset from './ProfileInset.jsx'
import styles from './TitleBlock.module.css'

// el cuadro con los datos del mapa
export default function TitleBlock({ map }) {
  return (
    <div className={styles.titleblock}>
      <h2 className={styles.title}>{map.title}</h2>
      <p className={styles.sub}>{map.sub}</p>
      <p className={styles.desc}>{map.desc}</p>

      <dl className={styles.specs}>
        {map.specs.map((s) => (
          <div key={s.k}>
            <dt>{s.k}</dt>
            <dd>{s.v}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.tags}>
        {map.tags.map((t) => (
          <span className={styles.tag} key={t}>{t}</span>
        ))}
      </div>

      {map.inset && <ProfileInset inset={map.inset} />}
    </div>
  )
}
