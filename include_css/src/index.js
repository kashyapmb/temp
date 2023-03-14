import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const url1 = "https://picsum.photos/250/300"
const url2 = "https://picsum.photos/300/300"
const url3 = "https://picsum.photos/320/300"
const link = "https://www.google.com"
ReactDOM.render(
  <>
    <h1 className="heading">My name is</h1>
    <div class="img_div">
      <img src={url1} alt="Random Image" />
      <img src={url2} alt="Random Image" />
      <a href={link} target="_kuchBhi">
        <img src={url3} alt="Random Image" />
      </a>
    </div>
  </>,
  document.getElementById("root")
)
