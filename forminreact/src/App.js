import React, { useState } from "react"
import "./index.css"

function App() {

  const [fullName, newFullName] = useState({
    fName: "",
    lName: "",
    email: "",
  })

  const [nameTitle, newNameTitle] = useState("")

  const ChangingState = (event) => {
    const name = event.target.name
    const value = event.target.value

    newFullName((prevalue) => {
      

      //Method 1
      return {
        ...prevalue,
        [name] : value,
      }

      //Method 2      
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevalue.lName,
      //     email: prevalue.email,
      //   }
      // } else if(name==="lName"){
      //   return {
      //     fName: prevalue.fName,
      //     lName: value,
      //     email: prevalue.email,
      //   }
      // } else {
      //   return {
      //     fName: prevalue.fName,
      //     lName: prevalue.lName,
      //     email: value,
      //   }
      // }
    })
  }

  const onSubmits = (e) => {
    e.preventDefault()
    newNameTitle(fullName.fName + " " + fullName.lName + " 🥂")
  }

  return (
    <>
      <form onSubmit={onSubmits} style={{ width: "700px" }}>
        <div>
          <h1> Hello {nameTitle}</h1>
          <input
            type="text"
            placeholder="Enter your First Name"
            onChange={ChangingState}
            name="fName"
            value={fullName.fName}
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            onChange={ChangingState}
            name="lName"
            value={fullName.lName}
          />
          <input
            type="text"
            placeholder="Enter your Email Address"
            onChange={ChangingState}
            name="email"
            value={fullName.email}
          />
          <button type="submit">Submit🤑</button>
        </div>
      </form>
    </>
  )
}

export default App
