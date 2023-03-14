import React from "react"
import { useState } from "react"
import Sresult from "./Sresult"

const Search = () => {
	const [img, setImg] = useState()

	const inputEvent = (event) => {
		setImg(event.target.value)
		console.log(event.target.value)
	}

	return (
		<>
			<div className="searchbar">
				<input
					type="text"
					placeholder="Search Anything"
					value={img}
					onChange={inputEvent}
				/>
			</div>
			<div className="image_css">
				{img !== '' ? <Sresult searchItem={img} /> : null}
			</div>
		</>
	)
}

export default Search
