import { NavLink } from 'react-router'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="OSI Explorer home">
          <span className="brand-mark" aria-hidden="true">OE</span>
          <span>
            <strong>OSI Explorer</strong>
            <small>Connected network knowledge</small>
          </span>
        </NavLink>

        <nav className="primary-nav" aria-label="Primary navigation">
          <NavLink to="/" end>
            Layers
          </NavLink>
          <NavLink to="/topics">
            Topics
          </NavLink>
          <NavLink to="/packet-journey">
            Packet Journey
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
