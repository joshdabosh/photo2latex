import React from "react"
import { Container, Nav } from "react-bootstrap"

import { NavLink } from "react-router-dom"

import PropTypes from "prop-types"

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
				{props.routes.map((r, idx) => (
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
				))}
			</Nav>
		</Container>
	)
}

Navigation.propTypes = {
	routes: PropTypes.array,
}

export default Navigation
