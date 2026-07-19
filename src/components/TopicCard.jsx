import { Link } from 'react-router'

export default function TopicCard({ topic }) {
  return (
    <Link className="topic-card" to={`/topics/${topic.id}`}>
      <div className="topic-card-heading">
        <span className="topic-abbreviation">{topic.abbreviation}</span>
        <span className="topic-layers">
          {topic.layers.length > 1 ? 'Layers' : 'Layer'} {topic.layers.join(' / ')}
        </span>
      </div>
      <h3>{topic.name}</h3>
      <p>{topic.summary}</p>
      <span className="topic-card-action">Explore topic</span>
    </Link>
  )
}
