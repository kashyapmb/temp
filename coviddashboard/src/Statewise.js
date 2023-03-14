import React, { useEffect, useState } from "react"
import "./Statewise.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Statewise = () => {
	const [data, setData] = useState([])

	const getCovidData = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/users")
		const actualData = await res.json()
		console.log(actualData)
		setData(actualData)
	}

	useEffect(() => {
		getCovidData()
	}, [])

	return (
		<>
			<div className="container-fluid mt-5">
				<div className="main-heading">
					<h1 className="mb-5 text-center">
						<span className="font-weight-bold">INDIA </span>COVID-19 Dashboard
					</h1>
				</div>

				<div className="table-responsive">
					<table className="table table-hover">
						<thead className="thead-dark">
							<tr>
								<th> id </th>
								<th> Name </th>
								<th> Phone </th>
								<th> Username </th>
								<th> Email </th>
								<th> Website </th>
							</tr>
						</thead>
						<tbody>
							{data.map((obj, index) => {
								return (
									<tr>
										<th> {obj.id} </th>
										<td> {obj.name} </td>
										<td> {obj.phone} </td>
										<td> {obj.username} </td>
										<td> {obj.email} </td>
										<td> {obj.website} </td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
			<h1> </h1>
		</>
	)
}

export default Statewise
