import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const endpoint = "http://localhost:3000/api/v1/items"
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const response = await fetch(endpoint)
    const result = await response.json()
    console.log(result)
    setItems(result)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <>
      <h1>TESTING</h1>
      {items.data?.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
