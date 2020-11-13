import React from "react"
import PropTypes from "prop-types"

function ChangelogEntry(props) {
	return (
		<div>
			<p>{props.date}</p>
			<ul>
				<li>{props.text}</li>
			</ul>
		</div>
	)
}

ChangelogEntry.propTypes = {
	text: PropTypes.string,
	date: PropTypes.string,
}

export default ChangelogEntry
