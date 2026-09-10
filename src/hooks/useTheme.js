import { useCallback, useEffect, useState } from 'react'

// tema claro/oscuro. lo guardo en localStorage
const STORAGE_KEY = 'qgis-theme'

function systemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useTheme() {
  // null = sigo al sistema; 'light' | 'dark' = lo forcé yo
  const [forced, setForced] = useState(null)

  // leo lo guardado al arrancar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'light' || saved === 'dark') setForced(saved)
    } catch { /* nada */ }
  }, [])

  // lo escribo en el html y lo guardo
  useEffect(() => {
    const root = document.documentElement
    if (forced) {
      root.setAttribute('data-theme', forced)
      try { localStorage.setItem(STORAGE_KEY, forced) } catch { /* nada */ }
    } else {
      root.removeAttribute('data-theme')
    }
  }, [forced])

  const active = forced ?? (systemPrefersDark() ? 'dark' : 'light')

  const toggle = useCallback(() => {
    setForced(active === 'dark' ? 'light' : 'dark')
  }, [active])

  // el botón muestra lo contrario a lo que se ve
  return { active, toggle, label: active === 'dark' ? 'Claro' : 'Oscuro' }
}
