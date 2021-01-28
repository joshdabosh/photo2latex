import React from "react"
import { Container, Nav } from "react-bootstrap"

import { getAuth } from "../Account"

import { NavLink } from "react-router-dom"

import PropTypes from "prop-types"

const handleLoggedIn = (e) => {
	return e.showLogin != 1
}

const handleNotLoggedIn = (e) => {
	return e.showLogin != 2
}

function Navigation(props) {
	return (
		<Container style={{ padding: "1em 0" }}>
			<Nav
				variant="pills"
				fill
				style={{
					width: "100%",
				}}
			>
				{getAuth() != null
					? [
							props.routes
								.filter(handleLoggedIn)
								.map((r, idx) => (
									<Nav.Item key={idx} className="nav-item">
										<NavLink
											className="nav-link"
											activeClassName="active"
											exact
											to={r.path}
										>
											{r.name}
										</NavLink>
									</Nav.Item>
								)),
					  ]
					: [
							props.routes
								.filter(handleNotLoggedIn)
								.map((r, idx) => (
									<Nav.Item key={idx} className="nav-item">
										<NavLink
											className="nav-link"
											activeClassName="active"
											exact
											to={r.path}
										>
											{r.name}
										</NavLink>
									</Nav.Item>
								)),
					  ]}
			</Nav>
		</Container>
	)
}

Navigation.propTypes = {
	routes: PropTypes.array,
}

export default Navigation
