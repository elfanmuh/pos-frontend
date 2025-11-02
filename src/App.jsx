import './App.css'
import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  const min = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>TESTING</h1>
      <div>
        <button onClick={add}>+</button>
        <button onClick={min}>-</button>
      </div>
      <div>

        <h2>{count}</h2>
      </div>
    </>
  )
}

export default App
