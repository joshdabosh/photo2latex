import Container from "react-bootstrap/Container"

import MainPage from "../MainPage"
import TestPage from "../TestPage"

import { Link } from "react-router-dom"

function Navigation() {
	return (
		<Container>
			<div class="bs-example">
				<ul class="nav nav-pills nav-fill w-100">
					<li class="nav-item">
						<Link className="nav-link" exact to="/">
							Home
						</Link>
					</li>

					<li class="nav-item">
						<Link className="nav-link" exact to="/test">
							test
						</Link>
					</li>
				</ul>
			</div>
		</Container>
	)
}

export default Navigation
