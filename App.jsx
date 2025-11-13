import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Numbers from './Components/Numbers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Redux! </h1> 
      <Counter /> 
      <Numbers /> 
    </>
  )
}

export default App
