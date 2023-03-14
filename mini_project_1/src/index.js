import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const time = new Date(2020, 5, 5, 0)
let t = time.getHours()
let greet = ""
const cssStyle = {}

if (t >= 3 && t <= 11) {
  greet = "Good Morning"
  cssStyle.color = "green"
} else if (t > 11 && t < 19) {
  greet = "Good Evening"
  cssStyle.color = "orange"
} else {
  greet = "Good Night"
  cssStyle.color = "black"
}

ReactDOM.render(
  <>
    <div>
      <h1 className="heading">
        Hello sir, <span style={cssStyle}>{greet}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
)
