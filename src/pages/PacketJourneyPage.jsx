import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import OsiMiniStack from '../components/OsiMiniStack.jsx'
import { packetJourneySteps } from '../data/packetJourney.js'
import { getTopicsByIds } from '../data/topics.js'

export default function PacketJourneyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentStep = packetJourneySteps[currentIndex]
  const relatedTopics = getTopicsByIds(currentStep.topicIds)
  const isFirst = currentIndex === 0
  const isLast = currentIndex === packetJourneySteps.length - 1

  useEffect(() => {
    document.title = `${currentStep.title} | OSI Explorer`
  }, [currentStep.title])

  function goToPreviousStep() {
    setCurrentIndex((index) => Math.max(0, index - 1))
  }

  function goToNextStep() {
    setCurrentIndex((index) => Math.min(packetJourneySteps.length - 1, index + 1))
  }

  function restartJourney() {
    setCurrentIndex(0)
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Packet Journey' },
        ]}
      />

      <section className="journey-hero" aria-labelledby="journey-title">
        <p className="eyebrow">Guided packet journey</p>
        <h1 id="journey-title">What happens when you visit a website?</h1>
        <p>
          Follow one request from the browser, down through the OSI model, across
          the network, and back again.
        </p>
      </section>

      <div className="journey-layout">
        <section className="journey-card" aria-live="polite" aria-atomic="true">
          <div className="journey-progress-row">
            <p className="journey-progress-label">
              Step {currentStep.number} of {packetJourneySteps.length}
            </p>
            <p className="journey-concept">{currentStep.concept}</p>
          </div>

          <progress
            className="journey-progress"
            value={currentStep.number}
            max={packetJourneySteps.length}
            aria-label={`Step ${currentStep.number} of ${packetJourneySteps.length}`}
          />

          <div className="journey-step-content">
            <p className="journey-step-number" aria-hidden="true">
              {String(currentStep.number).padStart(2, '0')}
            </p>
            <div>
              <h2>{currentStep.title}</h2>
              <p>{currentStep.explanation}</p>
            </div>
          </div>

          {relatedTopics.length > 0 && (
            <section className="journey-related" aria-labelledby="journey-related-title">
              <h3 id="journey-related-title">Explore the concepts in this step</h3>
              <div className="journey-topic-links">
                {relatedTopics.map((topic) => (
                  <Link key={topic.id} to={`/topics/${topic.id}`}>
                    {topic.abbreviation || topic.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="journey-controls" aria-label="Packet journey controls">
            <button type="button" onClick={goToPreviousStep} disabled={isFirst}>
              Previous
            </button>

            <button type="button" className="secondary-button" onClick={restartJourney} disabled={isFirst}>
              Restart
            </button>

            <button type="button" onClick={goToNextStep} disabled={isLast}>
              Next
            </button>
          </div>
        </section>

        <OsiMiniStack activeLayerNumbers={currentStep.layerNumbers} />
      </div>
    </>
  )
}
