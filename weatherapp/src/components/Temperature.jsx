import React, { useEffect, useState } from "react"
import "./css/style.css"

const Temperature = () => {
	const [city, setCity] = useState(null)
	const [search, setSearch] = useState()

	useEffect(() => {
		const fetchAPI = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8cb2ca29fff3fdd4cf92364004459103`
			const response = await fetch(url)
			const resJson = await response.json()
			setCity(resJson.main)
		}

		fetchAPI()
	}, [search])

	return (
		<>
			<div className="box">
				<div className="inputData">
					<input
						type="search"
						className="inputField"
						onChange={(event) => {
							setSearch(event.target.value)
						}}
					/>
				</div>
				{!city ? (
					<p>No Data Found</p>
				) : (
					<>
						<div className="info">
							<h2 className="location">{search}</h2>
							<h1 className="temp">{city.temp_max}°C</h1>
							<h3 className="tempminmax">Min Temperature:{city.temp_max}°C</h3>
							<h3 className="tempminmax">Max Temperature:{city.temp_max}°C</h3>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Temperature
