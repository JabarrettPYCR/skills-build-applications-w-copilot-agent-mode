import ResourceView from './ResourceView.jsx'

const leaderboardEndpoint = '/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceView
      title="Leaderboard"
      endpoint={leaderboardEndpoint}
      requestMode="fetch"
      columns="repeat(auto-fit, minmax(220px, 1fr))"
      renderItem={(entry) => (
        <article className="resource-card leaderboard-card" key={entry.id}>
          <span className="rank">#{entry.rank}</span>
          <h3>{entry.displayName}</h3>
          <dl>
            <dt>Points</dt>
            <dd>{entry.points}</dd>
            <dt>Weekly calories</dt>
            <dd>{entry.weeklyCalories}</dd>
          </dl>
        </article>
      )}
    />
  )
}

export default Leaderboard