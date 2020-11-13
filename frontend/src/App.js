import React from "react"

import { Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import Navigation from "./components/Navigation"

import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import About from "./About"
import Convert from "./Convert"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},

	{
		path: "/convert",
		name: "Convert",
		component: Convert,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
]

function App() {
	return (
		<div className="App">
			<div className="container">
				<Navigation routes={routes} />

				{routes.map((r, idx) => (
					<Route
						key={idx}
						exact
						path={r.path}
						component={r.component}
					/>
				))}
			</div>
		</div>
	)
}

export default App
