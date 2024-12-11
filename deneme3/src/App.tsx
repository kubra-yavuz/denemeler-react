import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("white");
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
  };
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <select name="colors" id="" onChange={onChange} >
        <option value="red">Kırmızı</option>
        <option value="blue">Mavi</option>
        <option value="green">Yeşil</option>
      </select>
    </div>
  )
}

export default App
