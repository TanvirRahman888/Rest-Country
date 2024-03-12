import { useState } from 'react'
import Countries from './component/Countries/Countries'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React Rest Tour</h1>
      <Countries></Countries>
      
    </>
  )
}

export default App
