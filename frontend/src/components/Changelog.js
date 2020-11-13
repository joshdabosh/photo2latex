import React from "react"
import { Container } from "react-bootstrap"

import ChangelogEntry from "./ChangelogEntry"

function Changelog() {
	return (
		<Container style={{ padding: "2em 0" }}>
			<ChangelogEntry date="10/29/20" text="Got this project rolling!" />
		</Container>
	)
}

export default Changelog
