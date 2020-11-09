import React from "react"

import Button from "react-bootstrap/Button"

function MainPage() {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">Photo2LaTex</h1>
				<p>
					A free, online, convenient tool to to convert your
					handwritten papers to LaTex code, with the click of a
					button.
				</p>
			</div>

			<Button>Learn More</Button>
		</div>
	)
}

export default MainPage
