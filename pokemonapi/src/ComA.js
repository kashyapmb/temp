import React, { useState, useEffect } from "react"
import axios from "axios"
import "./index.css"

const ComA = () => {
	const [num, setNum] = useState()
	const [name, setName] = useState()
	const [imgSrc, setImgSrc] = useState()
	const [height, setHeight] = useState()
	const [weight, setWeight] = useState()

	useEffect(() => {
		async function getData() {
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
			setName(res.data.name)
			setImgSrc(res.data.sprites.other.home.front_default)
			setHeight(res.data.height)
			setWeight(res.data.weight)

			console.log(res)
		}
		getData()
	})

	const changeNum = (event) => {
		setNum(event.target.value)
	}

	return (
		<>
			<input type="text" onChange={changeNum} value={num} />
			<h3>
				{num} {name}
			</h3>
			<div className="imgStyle">
				<img src={`${imgSrc}`} />
			</div>
			<h3>
				Height: {height}
			</h3>
			<h3>
				Weight: {weight}
			</h3>
		</>
	)
}

export default ComA
