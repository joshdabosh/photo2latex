import Container from "react-bootstrap/Container"

import MainPage from "../MainPage"
import TestPage from "../TestPage"

import { NavLink } from "react-router-dom"

function Navigation() {
	return (
		<Container style={{ "padding": 0 }}>
			<div class="bs-example">
				<ul class="nav nav-pills nav-fill w-100">
					<li class="nav-item">
						<NavLink className="nav-link" activeClassName="active" exact to="/">
							Home
						</NavLink>
					</li>

					<li class="nav-item">
						<NavLink className="nav-link" activeClassName="active" exact to="/test">
							test
						</NavLink>
					</li>
				</ul>
			</div>
		</Container>
	)
}

export default Navigation
