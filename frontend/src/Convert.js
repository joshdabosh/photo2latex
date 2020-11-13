import React, { useState } from "react"
import Holder from "./img/holder.png"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import Navbar from "react-bootstrap/Navbar"

function Convert() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const cards = ["scan_0.png", "scan_1.jpg", "scan_2.pdf"]
	return (
		<div>
			<Navbar>
				<h2>My Scans</h2>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Button variant="success" onClick={handleShow}>
						Add Scan
					</Button>
				</Navbar.Collapse>
			</Navbar>

			<div className="container">
				<CardGroup>
					{cards.map((card, idx) => (
						<Card key={idx}>
							<Card.Body>
								<Card.Title>Scan {idx}</Card.Title>
								<Card.Img variant="top" src={Holder} />
								<Card.Text>{card}</Card.Text>
								<Button variant="primary">Copy Code</Button>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">
									Last updated 3 mins ago
								</small>
							</Card.Footer>
						</Card>
					))}
				</CardGroup>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Upload Scan</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Upload an image or a scan of your work below.</p>

					<Form>
						<Form.File
							id="custom-file-translate-scss"
							label="Custom file input"
							lang="en"
							custom
						/>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Upload
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default Convert
