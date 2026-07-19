import { Link, useParams } from 'react-router'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import TopicCard from '../components/TopicCard.jsx'
import { getLayerById } from '../data/layers.js'
import { getTopicsByIds } from '../data/topics.js'

function DetailList({ title, items }) {
  return (
    <section className="detail-panel">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default function LayerPage() {
  const { layerId } = useParams()
  const layer = getLayerById(layerId)

  if (!layer) {
    return (
      <section className="status-page">
        <p className="eyebrow">Unknown layer</p>
        <h1>That OSI layer does not exist.</h1>
        <Link className="button-link" to="/">Return to the layer map</Link>
      </section>
    )
  }

  const topics = getTopicsByIds(layer.topicIds)

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'OSI layers', to: '/' },
          { label: `Layer ${layer.number}: ${layer.name}` },
        ]}
      />

      <section className="layer-hero" data-layer={layer.number}>
        <div>
          <p className="eyebrow">OSI Layer {layer.number}</p>
          <h1>{layer.name}</h1>
          <p>{layer.summary}</p>
        </div>
        <div className="pdu-badge">
          <span>Protocol data unit</span>
          <strong>{layer.pdu}</strong>
        </div>
      </section>

      <div className="detail-grid">
        <DetailList title="Common protocols and standards" items={layer.protocols} />
        <DetailList title="Hardware and devices" items={layer.devices} />
        <DetailList title="Addressing" items={layer.addressing} />
        <DetailList title="Troubleshooting tools" items={layer.tools} />
      </div>

      <section className="topics-section" aria-labelledby="topics-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Connected concepts</p>
            <h2 id="topics-title">Topics at this layer</h2>
          </div>
          <p>These cards already come from a separate data file.</p>
        </div>

        {topics.length > 0 ? (
          <div className="topic-grid">
            {topics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            Topic data for this layer will be added in a later stage.
          </div>
        )}
      </section>
    </>
  )
}
