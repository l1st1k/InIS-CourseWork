import { useState } from 'react'
import '../assets/styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
         <h1>
             {count}
         </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Plus
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
            Minus
        </button>
      </div>
    </div>
  )
}

export default App
