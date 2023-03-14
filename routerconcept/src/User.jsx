import React from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"

const User = () => {
	//useParams Hooks Concept
	const { fname, lname } = useParams()

	//useLocation Hooks Concept
	const location = useLocation()

	//useHistory Hooks Concept
	const navigate = useNavigate()

	return (
		<>
			<h1>
				User {fname} {lname}
			</h1>
			<h1>Path Name is {location.pathname}</h1>

			{/*navigate(2) go forward 2 */}
			{/*navigate(1) go forward 1 */}
			{/*navigate(-1) go Backward 1 */}
			{/*navigate(-2) go Backward 2 */}
			{location.pathname === `/user/kashyap/bavadiya` ? (
				<button onClick={() => navigate(-1)}>Clickme</button>
			) : null}
		</>
	)
}

export default User
