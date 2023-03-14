import React from "react"

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="" className="card_img" />
          <div className="card_info">
            <h2 className="card_category">{props.movieTitle}</h2>
            <h3 className="card_title">Director: {props.director}</h3>
            <a href={props.movieLink} target="_kuchbhi">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
