import React from "react"
import { Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Navigation from "./components/Navigation"
import Home from "./Home"
import TestPage from "./TestPage"

function App() {
	return (
		<div className="App">
			<div className="container">
				<Navigation />
				<Route exact path="/" component={Home} />
				<Route exact path="/test" component={TestPage} />
			</div>
		</div>
	)
}

export default App
