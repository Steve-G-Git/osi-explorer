import { Link, useNavigate, useParams } from 'react-router'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import TopicCard from '../components/TopicCard.jsx'
import { getLayerById } from '../data/layers.js'
import { getTopicById, getTopicsByIds } from '../data/topics.js'

function ContentSection({ section }) {
  return (
    <section className="topic-content-section">
      <h2>{section.title}</h2>

      {section.type === 'paragraphs' && section.content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {section.type === 'steps' && (
        <ol className="process-list">
          {section.items.map((item) => <li key={item}>{item}</li>)}
        </ol>
      )}

      {section.type === 'list' && (
        <ul className="troubleshooting-list">
          {section.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}

      {section.type === 'commands' && section.items.map((item) => (
        <div className="command-block" key={item.command}>
          <code>{item.command}</code>
          <p>{item.description}</p>
        </div>
      ))}

      {section.type === 'cards' && (
        <div className="relationship-grid">
          {section.items.map((item) => (
            <article className="relationship-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

function TopicNotFound() {
  return (
    <section className="status-page">
      <p className="eyebrow">Topic not found</p>
      <h1>We could not find that OSI Explorer topic.</h1>
      <p>The link may be incorrect, or the topic may not have been added yet.</p>
      <Link className="button-link" to="/topics">Browse all topics</Link>
    </section>
  )
}

export default function TopicPage() {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const topic = getTopicById(topicId)

  if (!topic) return <TopicNotFound />

  const primaryLayer = topic.layerId ? getLayerById(topic.layerId) : null
  const connectedTopics = getTopicsByIds(topic.connections)
  const isDetailed = Array.isArray(topic.sections)

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', to: '/' },
        { label: 'Topics', to: '/topics' },
        ...(primaryLayer ? [{ label: `${primaryLayer.name} Layer`, to: `/layers/${primaryLayer.id}` }] : []),
        { label: topic.abbreviation },
      ]} />

      <button className="back-button" type="button" onClick={() => navigate(-1)}>← Back</button>

      <section className="topic-hero">
        <div>
          <p className="eyebrow">Encyclopedia topic</p>
          <h1>{topic.name}</h1>
          <p className="topic-lead">{topic.summary}</p>
          <div className="topic-meta" aria-label="Topic information">
            <span><strong>Abbreviation:</strong> {topic.abbreviation}</span>
            <span><strong>OSI layers:</strong> {topic.layers.join(' and ')}</span>
          </div>
        </div>
      </section>

      {!isDetailed ? (
        <section className="topic-placeholder">
          <p className="eyebrow">Connected route ready</p>
          <h2>This topic is part of the knowledge map.</h2>
          <p>{topic.summary}</p>
          <p>Its full lesson has not been added yet, but its stable route and connections already work.</p>
        </section>
      ) : (
        <div className="topic-layout">
          <article className="topic-article">
            {topic.sections.map((section) => <ContentSection key={section.title} section={section} />)}
          </article>
        </div>
      )}

      {connectedTopics.length > 0 && (
        <section className="topics-section" aria-labelledby="connected-topics-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Knowledge map</p>
              <h2 id="connected-topics-title">Connected topics</h2>
            </div>
            <p>Follow a connection to keep moving through the network.</p>
          </div>
          <div className="topic-grid">
            {connectedTopics.map((connectedTopic) => <TopicCard key={connectedTopic.id} topic={connectedTopic} />)}
          </div>
        </section>
      )}
    </>
  )
}
