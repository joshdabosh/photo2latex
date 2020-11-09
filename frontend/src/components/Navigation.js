import React from "react"
import Container from "react-bootstrap/Container"

import { NavLink } from "react-router-dom"

function Navigation() {
	return (
		<Container style={{ padding: 0 }}>
			<div className="bs-example">
				<ul className="nav nav-pills nav-fill w-100">
					<li className="nav-item">
						<NavLink
							className="nav-link"
							activeClassName="active"
							exact
							to="/"
						>
							Home
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink
							className="nav-link"
							activeClassName="active"
							exact
							to="/test"
						>
							test
						</NavLink>
					</li>
				</ul>
			</div>
		</Container>
	)
}

export default Navigation
