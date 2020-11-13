import React from "react"

import Changelog from "./components/Changelog"
import { Container, Button, Jumbotron } from "react-bootstrap"

function Home() {
	return (
		<div>
			<Jumbotron>
				<Container className="text-center">
					<h1 className="display-4">Photo2LaTex</h1>
					<p>
						A free, online, convenient tool to to convert your
						handwritten papers to LaTex code, with the click of a
						button.
					</p>
				</Container>

				<Container className="text-center">
					<Button variant="success">
						<h2 style={{ margin: 0, fontSize: "2em" }}>
							Get Started
						</h2>
					</Button>
				</Container>
			</Jumbotron>

			<Changelog />
		</div>
	)
}

export default Home
