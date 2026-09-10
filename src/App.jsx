import { useCallback, useState } from 'react'
import TopBar from './components/TopBar.jsx'
import Hero from './components/Hero.jsx'
import Plate from './components/Plate.jsx'
import Footer from './components/Footer.jsx'
import Lightbox from './components/Lightbox.jsx'
import { maps } from './data/maps.js'

export default function App() {
  // lightbox: null = cerrado, { src, caption } = abierto
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((src, caption) => setLightbox({ src, caption }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <>
      <div className="wrap">
        <TopBar />
        <Hero />
        <main>
          {maps.map((map, i) => (
            <Plate key={map.id} map={map} order={i} onOpen={openLightbox} />
          ))}
        </main>
        <Footer />
      </div>

      <Lightbox data={lightbox} onClose={closeLightbox} />
    </>
  )
}
