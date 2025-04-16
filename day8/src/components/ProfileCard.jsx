function ProfileCard({ name, role, avatar }) {
    return (
      <div className="card">
        <img src={avatar} alt={name} />
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    )
  }
  
  export default ProfileCard
  