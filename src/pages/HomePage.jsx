import { Link } from 'react-router'
import LayerCard from '../components/LayerCard.jsx'
import { layers } from '../data/layers.js'

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Interactive networking reference</p>
        <h1 id="page-title">See the OSI model as one connected system.</h1>
        <p className="hero-copy">
          Start with the seven-layer overview, then move inward to explore the
          protocols, addresses, devices, and troubleshooting tools that make a
          network work.
        </p>
      </section>

      <section className="home-journey-callout" aria-labelledby="home-journey-title">
        <div>
          <p className="eyebrow">Follow the traffic</p>
          <h2 id="home-journey-title">Watch a web request move through the stack.</h2>
          <p>Step through DNS, TCP, TLS, HTTP, IP, ARP, Ethernet, physical signals, routing, and the server response.</p>
        </div>
        <Link className="button-link" to="/packet-journey">Start packet journey</Link>
      </section>

      <section className="home-topics-callout" aria-labelledby="home-topics-title">
        <div>
          <p className="eyebrow">Connected encyclopedia</p>
          <h2 id="home-topics-title">Explore protocols and concepts directly.</h2>
          <p>Search the topic index or open the completed lessons for DNS, TCP, HTTP, IPv4, Ethernet, MAC addresses, and ARP.</p>
        </div>
        <Link className="button-link" to="/topics">Browse topics</Link>
      </section>

      <section className="network-map-section" aria-labelledby="map-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Bird’s-eye view</p>
            <h2 id="map-title">The seven OSI layers</h2>
          </div>
          <p>Select any layer to inspect its responsibilities and connected topics.</p>
        </div>

        <div className="network-map">
          <div className="layer-stack">
            {layers.map((layer) => (
              <LayerCard key={layer.id} layer={layer} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
