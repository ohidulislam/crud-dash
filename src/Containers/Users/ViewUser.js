import React, { useState, useEffect, useReducer } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const ViewUser = (props) => {
	const [user, setUser] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/users/${id}`)
			.then((res) => {
				console.log();
				setUser(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const userArr = [];
	for (let key in user) {
		userArr.push({
			id: key,
			value: user[key],
		});
	}
	console.log(userArr);

	return (
		<div className="container">
			<div className="card" style={{ width: "18rem" }}>
				<ul className="list-group list-group-flush">
					{userArr.map((u) => {
						return (
							<li className="list-group-item" key={u.id}>
								<b>{u.id}:</b>{" "}
								{u.id !== "address" && u.id !== "company"
									? u.value
									: ""}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ViewUser;
