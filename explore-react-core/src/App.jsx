import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React core concept</h1>
    <Users></Users>
    </>
  )
}

export default App
