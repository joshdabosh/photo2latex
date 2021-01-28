import React, { useState } from "react"

import { Form, Button, Alert } from "react-bootstrap"

import { getAuth, setAuth } from "./Account"

import { Redirect } from "react-router-dom"

function Login() {
	/* eslint-disable */
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)
	const [redirect, setRedirect] = useState(false)
	/* eslint-enable */

	const handleSubmit = (e) => {
		e.preventDefault()

		fetch("http://localhost:3000/api/users/auth", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then(async (res) => {
				if (!res.ok) throw res

				setAuth((await res.json()).accessToken)

				setRedirect(true)
			})
			.catch(async (e) => {
				console.log(e)
				setError(await e.text())

				setTimeout(setError, 3000, null)
			})
	}

	if (getAuth()) {
		return <Redirect push to="/convert" />
	}

	return (
		<div>
			<h1 className="display-4">Login</h1>

			{error && <Alert variant="danger">{error}</Alert>}

			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default Login
