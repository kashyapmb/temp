import React from "react"
import { useState } from "react"
import "./App.css"


function App() {
  let time = new Date().toLocaleTimeString()  

  //   current  function             initial 
  const [ctime, setCtime] = useState(time)

  function UpdateTime(){
    setCtime(new Date().toLocaleTimeString())
  }

  setInterval(UpdateTime, 1000);


  return (
    <>
      <h1> {ctime} </h1>
    </>
  )
}

export default App
