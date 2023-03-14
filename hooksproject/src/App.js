import React from "react"
import { useState } from "react"
import "./App.css"


function App() {
  let newTime = new Date().toLocaleTimeString()  

  //   current  function             initial 
  const [ctime, setCtime] = useState(newTime)

  const GetNewTime = () => {
    setCtime(new Date().toLocaleTimeString())
  }

  return (
    <>
      <h1> {ctime} </h1>
      <button onClick={GetNewTime}>Get Current Time</button>
    </>
  )
}

export default App
