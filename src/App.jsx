import { Route, Routes } from 'react-router'
import SiteHeader from './components/SiteHeader.jsx'
import HomePage from './pages/HomePage.jsx'
import LayerPage from './pages/LayerPage.jsx'
import TopicPage from './pages/TopicPage.jsx'
import PacketJourneyPage from './pages/PacketJourneyPage.jsx'
import TopicsPage from './pages/TopicsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main id="main-content" className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layers/:layerId" element={<LayerPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:topicId" element={<TopicPage />} />
          <Route path="/packet-journey" element={<PacketJourneyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}
