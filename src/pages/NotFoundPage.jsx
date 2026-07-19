import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="status-page">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>The route may have changed or the topic has not been built yet.</p>
      <Link className="button-link" to="/">Return to OSI Explorer</Link>
    </section>
  )
}
