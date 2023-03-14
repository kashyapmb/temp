var React = require("react")
var ReactDOM = require("react-dom")

// ---------------------------------------------------------------------------------
// Javascript->HTML->Javascript
//in { } should not contains any statement
const fname = "Kashyap"
const lname = "Bavadiya"
ReactDOM.render(
  <>
    <h1> Hello {fname} {lname} </h1>
    <h1> Hello {fname + " " + lname} </h1>
    <h1> Hello {`${fname} ${lname}`} </h1>
    <h1>  {`Hello ${fname} ${lname}`} </h1>
    <p>My fav number is {5 + 5}</p>
  </>,
  document.getElementById("root")
)

// --------------------------------------------------------------------------------
// //render(Shu dekhadvu che, Kya dekhadavu che)
// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>Bavadiya Kashap</p>
//   </div>,
//   document.getElementById("root")
// )

// // Method 2:  if react version is 16 or 16+ than u can use it
// ReactDOM.render(
//     [
//     <h1>Hello World</h1>,
//     <p>Bavadiya Kashap</p>
//     ],
//   document.getElementById("root")
// )

// //Method 3:    without using div tag
// ReactDOM.render(
//     <React.Fragment>
//     <h1>Hello World</h1>
//     <p>Bavadiya Kashap</p>
//     </React.Fragment>,
//   document.getElementById("root")
// )

// //Method 4:    no need to write React.Fragment
// ReactDOM.render(
//     <>
//     <h1>Hello World</h1>
//     <p>Bavadiya Kashap</p>
//     </>,
//   document.getElementById("root")
// )
// --------------------------------------------------------------------------------
