import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
	const [user, setUser] = useState({});
	const [mgs, setMsg] = useState("");

	let history = useHistory();

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
			.post("http://localhost:5000/users", user)
			.then((res) => {
				console.log();
				setMsg("success!");
				history.push("/");
			})
			.catch((err) => {
				console.log(err);
				setMsg("An Errro Occured!");
			});
	};

	console.log(user);
	return (
		<div className="container">
			<form onSubmit={(e) => handleFormSumbit(e)}>
				<div className="form-group">
					<label>Name</label>
					<input
						type="text"
						name="name"
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

// AddUser.propTypes = {
// 	name: PropTypes.string.isRequired,
// };

export default AddUser;
