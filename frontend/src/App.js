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
		showLogin: 0, // 0 - always show
		// 1 - show when not logged in
		// 2 - show when logged in
	},
	{
		path: "/about",
		name: "About",
		component: About,
		showLogin: 0,
	},
	{
		path: "/convert",
		name: "Convert",
		component: Convert,
		showLogin: 2,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		showLogin: 1,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
		showLogin: 1,
	},
]

function App() {
	return (
		<div className="App">
			<div className="container">
				
				<Route path='/' component={() => <Navigation routes={routes}/>} />

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
