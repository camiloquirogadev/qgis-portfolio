import styles from './ProfileInset.module.css'

export default function ProfileInset({ inset }) {
  return (
    <div className={styles.inset}>
      <img src={inset.img} alt={inset.alt} />
      <div className={styles.cap}>
        <p className={styles.label}>{inset.label}</p>
        <p>{inset.text}</p>
      </div>
    </div>
  )
}
