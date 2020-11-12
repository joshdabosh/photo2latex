import React, { useState } from "react"

import { Form, Button } from "react-bootstrap"

function Register() {

    /* eslint-disable */
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    /* eslint-enable */

    const handleSubmit = e => {
        e.preventDefault()

        console.log(username, password, passwordConfirm)
    }

	return (
		<div style={{ padding: "1em 0" }}>
			<h1 className="display-4 font-weight-bold">Login</h1>


            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" onChange={e => setPasswordConfirm(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
		</div>
	)
}

export default Register
