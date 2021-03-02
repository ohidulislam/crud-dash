import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Users from "./Containers/Users/Users";
import AddUser from "./Containers/Users/AddUser";
import ViewUser from "./Containers/Users/ViewUser";
import EditUser from "./Containers/Users/EditUser";

import "./assets/css/style.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Layout>
						<Switch>
							<Route exact path="/" component={Users} />
							<Route path="/users/add" component={AddUser} />
							<Route
								path="/users/edit/:id"
								component={EditUser}
							/>
							<Route path="/users/:id" component={ViewUser} />
						</Switch>
					</Layout>
				</div>
			</Router>
		);
	}
}

export default App;
