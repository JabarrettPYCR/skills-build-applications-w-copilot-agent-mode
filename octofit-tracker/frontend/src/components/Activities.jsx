import ResourceView from './ResourceView.jsx'

const activitiesEndpoint = '/api/activities/'

function Activities() {
  return (
    <ResourceView
      title="Activities"
      endpoint={activitiesEndpoint}
      requestMode="fetch"
      columns="repeat(auto-fit, minmax(240px, 1fr))"
      renderItem={(activity) => (
        <article className="resource-card" key={activity.id}>
          <h3>{activity.type}</h3>
          <dl>
            <dt>User</dt>
            <dd>{activity.userId}</dd>
            <dt>Duration</dt>
            <dd>{activity.durationMinutes} minutes</dd>
            <dt>Calories</dt>
            <dd>{activity.caloriesBurned}</dd>
            <dt>Distance</dt>
            <dd>{activity.distanceMiles} miles</dd>
          </dl>
        </article>
      )}
    />
  )
}

export default Activities