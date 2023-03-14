import React from "react"

import Card from "./Card"
import movies from "./MoviesData.js"

const Show = (props) => {
  if (props.movieTitle === "Avatar"  || props.movieTitle === "300" || props.movieTitle === "Game of Thrones") {
    return (
      <Card
        key={props.key}
        imgSrc={props.imgSrc}
        movieTitle={props.movieTitle}
        director={props.director}
        movieLink={props.movieLink}
      />
    )
  }
}

function App() {
  return (
    <>
      <h1 className="heading_style">List of Top Netflix movies</h1>
      { movies.map((val, index) => {
        return <Show 
        key={val.id}
        imgSrc={val.Images}
        movieTitle={val.Title}
        director={val.Director}
        movieLink={val.Poster}
        />
      })}
    </>
  )
}

export default App
