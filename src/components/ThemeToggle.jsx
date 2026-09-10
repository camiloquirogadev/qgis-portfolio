import { useTheme } from '../hooks/useTheme.js'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { toggle, label } = useTheme()
  return (
    <button
      className={styles.toggle}
      type="button"
      onClick={toggle}
      aria-label="Cambiar tema claro / oscuro"
    >
      {label}
    </button>
  )
}
