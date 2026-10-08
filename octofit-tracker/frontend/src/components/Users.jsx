import ResourceView from './ResourceView.jsx'

const usersEndpoint = '/api/users/'

function Users() {
  return (
    <ResourceView
      title="Users"
      endpoint={usersEndpoint}
      requestMode="fetch"
      columns="repeat(auto-fit, minmax(260px, 1fr))"
      renderItem={(user) => (
        <article className="resource-card" key={user.id}>
          <h3>{user.displayName}</h3>
          <p>@{user.username}</p>
          <dl>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Team</dt>
            <dd>{user.teamId}</dd>
            <dt>Goal</dt>
            <dd>{user.fitnessGoal}</dd>
          </dl>
        </article>
      )}
    />
  )
}

export default Users