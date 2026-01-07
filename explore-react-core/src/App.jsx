import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Users from './Users'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>React core concept</h1>
      <Counter></Counter>
      <br />
      <Users></Users>
    </>
  )
}

export default App
