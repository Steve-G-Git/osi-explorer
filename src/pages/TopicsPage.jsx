import { useMemo, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import TopicCard from '../components/TopicCard.jsx'
import { topics } from '../data/topics.js'

export default function TopicsPage() {
  const [query, setQuery] = useState('')

  const filteredTopics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return topics

    return topics.filter((topic) => (
      topic.name.toLowerCase().includes(normalizedQuery)
      || topic.abbreviation.toLowerCase().includes(normalizedQuery)
      || topic.summary.toLowerCase().includes(normalizedQuery)
    ))
  }, [query])

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Topics' }]} />

      <section className="topic-index-hero" aria-labelledby="topic-index-title">
        <p className="eyebrow">Connected encyclopedia</p>
        <h1 id="topic-index-title">Browse networking topics</h1>
        <p>Search by protocol, device, address, command, or concept.</p>

        <label className="topic-search">
          <span>Search topics</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try ARP, TCP, address, routing..."
          />
        </label>
      </section>

      <section className="topics-section" aria-live="polite" aria-labelledby="topic-results-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Topic index</p>
            <h2 id="topic-results-title">{filteredTopics.length} topic{filteredTopics.length === 1 ? '' : 's'}</h2>
          </div>
          <p>Complete lessons and connected routes appear together.</p>
        </div>

        {filteredTopics.length > 0 ? (
          <div className="topic-grid">
            {filteredTopics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}
          </div>
        ) : (
          <div className="topic-placeholder">
            <h2>No topics matched that search.</h2>
            <p>Try a shorter term such as IP, route, cable, or port.</p>
          </div>
        )}
      </section>
    </>
  )
}
