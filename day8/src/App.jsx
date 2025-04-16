import ProfileCard from './components/ProfileCard'
import team from './data/team'
import './index.css'

function App() {
  return (
    <div className="container">
      <h1>🚀 Day 8: React Components & Props</h1>
      <div className="card-grid">
        {team.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  )
}

export default App
