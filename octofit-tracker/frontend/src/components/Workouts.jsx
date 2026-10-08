import ResourceView from './ResourceView.jsx'

const workoutsEndpoint = '/api/workouts/'

function Workouts() {
  return (
    <ResourceView
      title="Workouts"
      endpoint={workoutsEndpoint}
      requestMode="fetch"
      columns="repeat(auto-fit, minmax(260px, 1fr))"
      renderItem={(workout) => (
        <article className="resource-card" key={workout.id}>
          <h3>{workout.title}</h3>
          <p>{workout.focus}</p>
          <dl>
            <dt>Difficulty</dt>
            <dd>{workout.difficulty}</dd>
            <dt>Duration</dt>
            <dd>{workout.durationMinutes} minutes</dd>
            <dt>Recommended for</dt>
            <dd>{workout.recommendedFor?.join(', ')}</dd>
          </dl>
        </article>
      )}
    />
  )
}

export default Workouts