import React, { useState } from 'react'

export default function App() {
  const [Count, setCount] = useState(0)
  const handleClick = () => {
    setCount(Count + 1);
  }
  return (
    <div>
      <h1>Sayım: {Count}</h1>
      <button onClick={handleClick}>Arttır</button>
    </div>
  )
}

