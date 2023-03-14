import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Service from "./Service"
import Search from "./Search"
import User from "./User"
import Error from "./Error"
import Menu from "./Menu"

function App() {
	const Name = () => {
		return <>Hallo Kashyap </>
	}
	return (
		<>
			<Menu />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About name='Kashyap Bavadiya'/>} />
				<Route exact path="/service" element={<Service />} />
        {/*  Agar 1 hoy tyare niche ni line vapari sakaay*/}
				{/* <Route exact path="/user/:fname" element={<User />} /> */}
				<Route exact path="/user/:fname/:lname" element={<User />} />
				<Route exact path="/user/:fname" element={<User />} />
				<Route exact path="/user" element={<User />} />
				<Route exact path="/search" element={<Search />} />
				<Route exact path="/contact" element={<Contact />} /> 
				<Route exact path="/contact/name" element={<Name />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
