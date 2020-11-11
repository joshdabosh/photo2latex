import React from "react"

import Changelog from "./components/Changelog"
import Button from "react-bootstrap/Button"

function Home() {
	return (
		<div style={{ padding: "1em 0.5em" }}>
			<div>
				<h1 className="display-4 font-weight-bold">Photo2LaTex</h1>
				<p>
					A free, online, convenient tool to to convert your
					handwritten papers to LaTex code, with the click of a
					button.
				</p>
				<Button style={{ marginBottom: "2.5em" }}>
					<p style={{ margin: 0 }}>Learn More</p>
				</Button>
			</div>

			<div className="text-center">
				<Button
					variant="success"
					style={{ width: "17em", height: "7em" }}
				>
					<h2
						className="font-weight-bold"
						style={{ margin: 0, fontSize: "2.5em" }}
					>
						Get Started
					</h2>
				</Button>
			</div>

			<Changelog />
		</div>
	)
}

export default Home
