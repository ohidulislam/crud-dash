import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="d-flex justify-content-between">
						<div className="logo">
							<a href="#">Logo</a>
						</div>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/users/add">Add Post</Link>
							</li>
							{/* <li>
							<Link to="/users/edit/:id">Edit Post</Link>
						</li> */}
						</ul>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
