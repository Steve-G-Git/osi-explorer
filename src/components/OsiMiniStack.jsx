import { layers } from '../data/layers.js'

export default function OsiMiniStack({ activeLayerNumbers }) {
  return (
    <aside className="osi-mini-panel" aria-labelledby="osi-mini-title">
      <p className="eyebrow">Active layer</p>
      <h2 id="osi-mini-title">OSI stack</h2>
      <ol className="osi-mini-stack">
        {layers.map((layer) => {
          const isActive = activeLayerNumbers.includes(layer.number)

          return (
            <li
              key={layer.id}
              className={isActive ? 'is-active' : ''}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className="osi-mini-number">{layer.number}</span>
              <span>{layer.name}</span>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}
