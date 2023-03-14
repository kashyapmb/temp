import React from "react"
import { NavLink } from "react-router-dom"

function Error() {
	return (
		<>
			<div className="setStyle2">
				<h1> 404 Error Page </h1>
				<p> Sorry, This page doesn't exist </p>
				<NavLink to="/">Home Page</NavLink>
				<br />
				<NavLink to="/search">Search Page</NavLink>
			</div>
		</>
	)
}

export default Error
