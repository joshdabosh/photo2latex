import React from "react"
import { Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Navigation from "./components/Navigation"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"

function App() {
	return (
		<div className="App">
			<div className="container">
				<Navigation />
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
			</div>
		</div>
	)
}

export default App
