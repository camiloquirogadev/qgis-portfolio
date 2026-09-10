import ThemeToggle from './ThemeToggle.jsx'
import styles from './TopBar.module.css'

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.mark}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1 L8 15 M1 8 L15 8" stroke="currentColor" strokeWidth="1" />
          <circle cx="8" cy="8" r="4.2" stroke="var(--accent)" strokeWidth="1.3" />
          <circle cx="8" cy="8" r="1.1" fill="var(--accent)" />
        </svg>
        Portafolio cartográfico
      </div>
      <ThemeToggle />
    </div>
  )
}
