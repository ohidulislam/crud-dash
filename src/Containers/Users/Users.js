import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Users extends Component {
	state = {
		users: null,
	};

	componentDidMount() {
		this.loadUsers();
	}

	loadUsers = () => {
		axios
			.get("http://localhost:5000/users")
			.then((res) => {
				// console.log(res.data);
				this.setState({
					...this.state,
					users: res.data.reverse(),
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleItemDelete = (id) => {
		axios
			.delete(`http://localhost:5000/users/${id}`)
			.then((res) => {
				// console.log(res.data);
				this.loadUsers();
				console.log("Items successfully deleted!");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		// console.log(this.state.users);

		return (
			<div className="container">
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Address</th>
							<th>Website</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users
							? this.state.users.map((user) => {
									return (
										<tr key={user.id}>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>{user.phone}</td>
											<td>
												{user.address?.city ||
													user.address}
											</td>
											<td>{user.website}</td>
											<td>
												<Link
													to={`/users/${user.id}`}
													className="btn btn-primary mx-1"
												>
													View
												</Link>
												<Link
													to={`/users/edit/${user.id}`}
													className="btn btn-primary mx-3"
												>
													Edit
												</Link>
												<button
													className="btn btn-warning"
													type="button"
													onClick={() =>
														this.handleItemDelete(
															user.id
														)
													}
												>
													Delete
												</button>
											</td>
										</tr>
									);
							  })
							: null}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Users;
