import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Edit = (props) => {
	let { id } = useParams();
	let history = useHistory();

	const [user, setUser] = useState({});
	const [mgs, setMsg] = useState("");

	useEffect(() => {
		axios
			.get(`http://localhost:5000/users/${id}`)
			.then((res) => {
				setUser(res.data);
				setMsg("success! fetching user.");
			})
			.catch((err) => {
				setMsg("An Errro Occured! when fetching..");
			});
	}, []);

	console.log(user);
	const handleInputChange = (e) => {
		console.log(e.target.value);
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSumbit = (e) => {
		e.preventDefault();
		e.target.reset();

		axios
			.put(`http://localhost:5000/users/${id}`, user)
			.then((res) => {
				console.log();
				setMsg("updated successfully!");
				history.push("/");
			})
			.catch((err) => {
				console.log(err);
				setMsg("Errro Occured! when updating.");
			});
	};

	return (
		<div className="container">
			<form onSubmit={(e) => handleFormSumbit(e)}>
				<div className="form-group">
					<label>Name</label>
					<input
						type="text"
						name="name"
						value={user.name}
						className="form-control"
						placeholder="Enter name"
						onChange={(e) => handleInputChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={user.email}
						className="form-control"
						placeholder="email"
						onChange={(e) => handleInputChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input
						type="text"
						name="address"
						value={user?.address?.city || user?.address}
						className="form-control"
						placeholder="Enter Address"
						onChange={(e) => handleInputChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						type="tel"
						name="phone"
						value={user.phone}
						className="form-control"
						placeholder="Enter Phone Number"
						onChange={(e) => handleInputChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<label>Website</label>
					<input
						type="url"
						name="website"
						value={user.website}
						className="form-control"
						placeholder="Enter Website"
						onChange={(e) => handleInputChange(e)}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary mt-5">
					Submit
				</button>
				<p className="mt-4">{mgs}</p>
			</form>
		</div>
	);
};

export default Edit;
