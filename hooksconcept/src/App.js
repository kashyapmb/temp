import React from "react"
import { useState } from "react"
import "./App.css"

function App() {
  const state = useState()
  //    current  funtion           initial 
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1> {count} </h1>
      <button onClick={Increment}> Click Me</button>
    </>
  )
}

export default App
