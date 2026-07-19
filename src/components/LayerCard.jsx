import { Link } from 'react-router'

export default function LayerCard({ layer }) {
  return (
    <Link
      className="layer-card"
      data-layer={layer.number}
      to={`/layers/${layer.id}`}
      aria-label={`Explore Layer ${layer.number}: ${layer.name}`}
    >
      <span className="layer-number">Layer {layer.number}</span>
      <div>
        <h2>{layer.name}</h2>
        <p>{layer.summary}</p>
      </div>
      <dl className="layer-card-meta">
        <div>
          <dt>PDU</dt>
          <dd>{layer.pdu}</dd>
        </div>
        <div>
          <dt>Examples</dt>
          <dd>{layer.protocols.slice(0, 3).join(', ')}</dd>
        </div>
      </dl>
      <span className="card-action">Open layer <span aria-hidden="true">→</span></span>
    </Link>
  )
}
