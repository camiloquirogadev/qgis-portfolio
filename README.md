# Cartografía en QGIS

Mi portfolio de los mapas que hago en QGIS (TUSIGyT). Hecho en React + Vite.

## Correr

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # queda en dist/
```

## Cómo está armado

- `src/data/maps.js` — los mapas (esto es lo que toco para sumar uno)
- `src/components/` — cada parte (Hero, Plate, MapFrame, TitleBlock, Lightbox, etc.)
- `src/hooks/` — `useTheme` (claro/oscuro) y `useTilt` (el 3d)
- `src/styles/` — `tokens.css` (colores/fuentes/tema) y `global.css`
- `src/assets/` — las imágenes

## Sumar un mapa

1. Exporto el PNG del compositor de QGIS y lo paso a jpg (~1600px de ancho).
2. Lo dejo en `src/assets/`.
3. Agrego un objeto en `src/data/maps.js` con sus datos (SRC, fuente, fecha).

El `<Plate>` lo dibuja solo, alternando el lado del mapa.

## Mapas

- Batimetría del Atlántico Sur + perfil Maceió–Luanda (Unidad 2)
- Estudiantes de TUSIGyT en el Partido de Moreno — EPSG:5347 (Unidad 8)
