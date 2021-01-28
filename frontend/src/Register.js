import React, { useState } from "react"

import { Form, Button, Alert } from "react-bootstrap"

import { Redirect } from "react-router-dom"

import { getAuth, setAuth } from "./Account"

function Register() {
	/* eslint-disable */
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")
	const [error, setError] = useState(null)
	const [redirect, setRedirect] = useState(false)
	/* eslint-enable */

	const handleSubmit = (e) => {
		e.preventDefault()

		if (password != passwordConfirm) {
			setError("Passwords do not match")

			setTimeout(setError, 3000, null)
			return
		}

		fetch("http://localhost:3000/api/users/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then(async (res) => {
				if (!res.ok) throw res

				setAuth(await res.json())

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
			<h1 className="display-4">Register</h1>

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

				<Form.Group controlId="formBasicPasswordConfirm">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Confirm Password"
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default Register
