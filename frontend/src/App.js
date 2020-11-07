import React from "react"
import { Route } from "react-router-dom"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Navigation from "./components/Navigation"
import MainPage from "./MainPage"
import TestPage from "./TestPage"

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<Navigation />
				<Route exact path="/" component={MainPage} />
				<Route exact path="/test" component={TestPage} />
			</div>
		</div>
	)
}

export default App
