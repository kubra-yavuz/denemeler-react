
import { useState } from 'react'
import './App.css'

function App() {

  const [clear, setClear] = useState("");
  const onclick = () => {
    setClear("")
  }
  return (
    <div>
      <h3>Notlar</h3>
      <input
        type="text"
        value={clear}
        onChange={(e) => setClear(e.target.value)} />
      <button onClick={onclick}>Temizle</button>
    </div>
  )
}

export default App
