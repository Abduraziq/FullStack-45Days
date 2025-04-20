import { useState } from 'react'
import MoodButton from './components/MoodButton.jsx'
import './index.css'

function App() {
  const [moods, setMoods] = useState({
    happy: 0,
    neutral: 0,
    sad: 0,
    angry: 0,
  })

  const handleMoodClick = (mood) => {
    setMoods((prev) => ({
      ...prev,
      [mood]: prev[mood] + 1,
    }))
  }

  const mostChosen = Object.entries(moods).reduce((a, b) => (a[1] > b[1] ? a : b))[0]

  return (
    <div className="container">
      <h1>🚀 Day 9: Mood Tracker</h1>
      <p>Select how you're feeling 👇</p>
      <div className="mood-row">
        <MoodButton emoji="😄" label="happy" count={moods.happy} onClick={handleMoodClick} />
        <MoodButton emoji="😐" label="neutral" count={moods.neutral} onClick={handleMoodClick} />
        <MoodButton emoji="😢" label="sad" count={moods.sad} onClick={handleMoodClick} />
        <MoodButton emoji="😡" label="angry" count={moods.angry} onClick={handleMoodClick} />
      </div>

      <div className="results">
        <h2>📊 Mood Summary:</h2>
        <p>Happy: {moods.happy}</p>
        <p>Neutral: {moods.neutral}</p>
        <p>Sad: {moods.sad}</p>
        <p>Angry: {moods.angry}</p>
        <h3>🔥 Most selected mood: <span className="highlight">{mostChosen}</span></h3>
      </div>
    </div>
  )
}

export default App
