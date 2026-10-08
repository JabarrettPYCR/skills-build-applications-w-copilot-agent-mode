import ResourceView from './ResourceView.jsx'

const teamsEndpoint = '/api/teams/'

function Teams() {
  return (
    <ResourceView
      title="Teams"
      endpoint={teamsEndpoint}
      requestMode="fetch"
      columns="repeat(auto-fit, minmax(260px, 1fr))"
      renderItem={(team) => (
        <article className="resource-card" key={team.id}>
          <h3>{team.name}</h3>
          <p>{team.motto}</p>
          <dl>
            <dt>City</dt>
            <dd>{team.city}</dd>
            <dt>Members</dt>
            <dd>{team.memberCount}</dd>
          </dl>
        </article>
      )}
    />
  )
}

export default Teams