import { useEffect, useState } from 'react'
import { apiBaseUrl, fetchResource } from '../api.js'

function ResourceView({ columns, endpoint, renderItem, requestMode, title }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    async function loadItems() {
      try {
        const loadedItems = await fetchResource(endpoint)
        if (isActive) {
          setItems(loadedItems)
          setStatus('ready')
        }
      } catch (loadError) {
        if (isActive) {
          setError(loadError.message)
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      isActive = false
    }
  }, [endpoint])

  return (
    <section className="resource-panel">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">{endpoint}</p>
          <h2>{title}</h2>
        </div>
        <span className="api-pill">{apiBaseUrl}</span>
      </div>
      <span className="visually-hidden">{requestMode}</span>

      {status === 'loading' && <p className="status-message">Loading records...</p>}
      {status === 'error' && <p className="status-message error">{error}</p>}
      {status === 'ready' && (
        <div className="resource-grid" style={{ '--columns': columns }}>
          {items.map(renderItem)}
        </div>
      )}
    </section>
  )
}

export default ResourceView