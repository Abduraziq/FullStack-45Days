function MoodButton({ emoji, label, count, onClick }) {
    return (
      <button className="mood-btn" onClick={() => onClick(label)}>
        <span className="emoji">{emoji}</span>
        <span className="count">{count}</span>
      </button>
    )
  }
  
  export default MoodButton
  