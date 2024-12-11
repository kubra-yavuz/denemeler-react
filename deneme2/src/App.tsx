import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder='Bilgilerinizi yazın...' value={text} onChange={handleChange} />
      <h1>Bilgiler:  {text}</h1>
    </div>
  )
}

export default App;