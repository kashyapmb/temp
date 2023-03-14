import React, {useState} from "react"
import "./index.css"

const App = ()=>{
  const currBgColor= "#8e44ad"
  const btnColor= "#2001ab"
  const text= "Click Me"
  const [bg , setBg] = useState(currBgColor);
  const [btnBg , setBtnBg] = useState(btnColor);
  const [btnText , setText] = useState(text);
  
  const bgChange = ()=>{
    if(bg==="#8e44ad"){
      setBg("#000000")
    }else if(bg==="#000000"){
      setBg("#96b659")
    }else{
      setBg("#8e44ad")
    }

    if(btnBg==="#2001ab"){
      setBtnBg("#f100f1")
    }else if(btnBg==="#f100f1"){
      setBtnBg("#187623")
    }else{
      setBtnBg("#2001ab")
    }

    if(btnText==="Click Me"){
      setText("Ouchh 😮")
    }else if(btnText==="Ouchh 😮"){
      setText("Let's Begin")
    }else{
      setText("Click Me")
    }
  }
  return (
    <>
      <div style={{backgroundColor: bg }}>
        <button onClick={bgChange} style={{backgroundColor: btnBg}}> {btnText} </button>
      </div>
    </>
  )
}

export default App
