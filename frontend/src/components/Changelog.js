import React from "react"
import Container from "react-bootstrap/Container"

import ChangelogEntry from "./ChangelogEntry"

function Changelog() {
	return (
		<Container style={{ padding: "2em 0" }}>
			<div className="bs-example">
				<ChangelogEntry
					date="11/11/20"
					text="Started working on stuff!"
				/>
			</div>
		</Container>
	)
}

export default Changelog
