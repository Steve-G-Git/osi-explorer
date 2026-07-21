import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { layers } from '../data/layers.js'
import { topics } from '../data/topics.js'
import { knowledgeMapEdges, knowledgeMapNodes } from '../data/knowledgeMap.js'

const topicById = new Map(topics.map((topic) => [topic.id, topic]))
const nodeById = new Map(knowledgeMapNodes.map((node) => [node.id, node]))

function getLayerName(topic) {
  const layer = layers.find((item) => item.number === topic.layers[0])
  return layer ? `Layer ${layer.number}: ${layer.name}` : 'Cross-layer concept'
}

export default function KnowledgeMapPage() {
  const [selectedId, setSelectedId] = useState('arp')
  const [query, setQuery] = useState('')
  const [layerFilter, setLayerFilter] = useState('all')

  const visibleIds = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return new Set(
      knowledgeMapNodes
        .map((node) => topicById.get(node.id))
        .filter(Boolean)
        .filter((topic) => {
          const matchesQuery =
            !normalizedQuery ||
            topic.name.toLowerCase().includes(normalizedQuery) ||
            topic.abbreviation.toLowerCase().includes(normalizedQuery) ||
            topic.summary.toLowerCase().includes(normalizedQuery)

          const matchesLayer =
            layerFilter === 'all' || topic.layers.includes(Number(layerFilter))

          return matchesQuery && matchesLayer
        })
        .map((topic) => topic.id),
    )
  }, [layerFilter, query])

  const selectedTopic = topicById.get(selectedId) || topicById.get('arp')
  const connectedTopics = selectedTopic.connections
    .map((id) => topicById.get(id))
    .filter(Boolean)

  return (
    <div className="page-shell knowledge-map-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Knowledge Map' }]} />

      <section className="page-intro map-intro" aria-labelledby="map-title">
        <p className="eyebrow">Interactive concept network</p>
        <h1 id="map-title">Connected Knowledge Map</h1>
        <p>
          Follow the relationships between protocols, addressing, devices, and media.
          Select a node to inspect it, or open its full encyclopedia page.
        </p>
      </section>

      <section className="map-toolbar" aria-label="Knowledge map filters">
        <label>
          <span>Search concepts</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try ARP, routing, or HTTP"
          />
        </label>

        <label>
          <span>Filter by OSI layer</span>
          <select value={layerFilter} onChange={(event) => setLayerFilter(event.target.value)}>
            <option value="all">All layers</option>
            {[...layers].reverse().map((layer) => (
              <option key={layer.number} value={layer.number}>
                Layer {layer.number}: {layer.name}
              </option>
            ))}
          </select>
        </label>

        <button
          className="secondary-button"
          type="button"
          onClick={() => {
            setQuery('')
            setLayerFilter('all')
          }}
        >
          Reset filters
        </button>
      </section>

      <div className="knowledge-layout">
        <section className="map-panel" aria-label="Interactive topic map">
          <div className="map-scroll-region">
            <div className="knowledge-canvas">
              <svg
                className="knowledge-edges"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {knowledgeMapEdges.map(([fromId, toId]) => {
                  const from = nodeById.get(fromId)
                  const to = nodeById.get(toId)
                  if (!from || !to) return null

                  const isVisible = visibleIds.has(fromId) && visibleIds.has(toId)
                  const isActive = selectedId === fromId || selectedId === toId

                  return (
                    <line
                      key={`${fromId}-${toId}`}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      className={`${isVisible ? '' : 'edge-muted'} ${isActive ? 'edge-active' : ''}`}
                      vectorEffect="non-scaling-stroke"
                    />
                  )
                })}
              </svg>

              {knowledgeMapNodes.map((node) => {
                const topic = topicById.get(node.id)
                if (!topic) return null

                const isVisible = visibleIds.has(topic.id)
                const isSelected = selectedId === topic.id

                return (
                  <button
                    key={topic.id}
                    className={`knowledge-node layer-${topic.layers[0]} ${isSelected ? 'is-selected' : ''} ${isVisible ? '' : 'is-filtered'}`}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    type="button"
                    onClick={() => setSelectedId(topic.id)}
                    aria-pressed={isSelected}
                    aria-label={`${topic.abbreviation}: ${topic.name}`}
                  >
                    <strong>{topic.abbreviation}</strong>
                    <span>{topic.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
          <p className="map-help">On smaller screens, scroll sideways to explore the complete map.</p>
        </section>

        <aside className="map-inspector" aria-live="polite">
          <p className="eyebrow">Selected concept</p>
          <h2>{selectedTopic.abbreviation}</h2>
          <p className="inspector-full-name">{selectedTopic.name}</p>
          <p className="topic-layer-label">{getLayerName(selectedTopic)}</p>
          <p>{selectedTopic.summary}</p>

          <Link className="button-link inspector-link" to={`/topics/${selectedTopic.id}`}>
            Open full topic
          </Link>

          <div className="inspector-connections">
            <h3>Direct connections</h3>
            {connectedTopics.length > 0 ? (
              <div className="connection-chip-list">
                {connectedTopics.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedId(topic.id)}
                    disabled={!nodeById.has(topic.id)}
                  >
                    {topic.abbreviation}
                  </button>
                ))}
              </div>
            ) : (
              <p>No connected topics have been added yet.</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
