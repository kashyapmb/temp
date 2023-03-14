import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import "./index.css"
import App from "./App"
import movies from "./MoviesData"

// function NMovie(val, ind, arr){
//   return(
//     <Card
//       imgSrc={val.Images}
//       movieTitle={val.Title}
//       director={val.Director}
//       movieLink={val.Poster}
//     />
//   )
// }

ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top Netflix movies</h1>

    {/* array.map(function(currentValue, index, arr), thisValue) */}

    {/* Method 1 */}
    {/* {movies.map(NMovie)} */}

    {/* Method 2 */}
    {movies.map((val, index) => {
      return (
        <Card
          key={val.id}
          imgSrc={val.Images}
          movieTitle={val.Title}
          director={val.Director}
          movieLink={val.Poster}
        />
      )
    })}
  </>,

  document.getElementById("root")
)
