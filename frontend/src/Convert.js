import React, { useState } from "react"
import Holder from "./img/holder.png"
import Testing_Image from "./img/a_137.jpg"
import Testing_Image2 from "./img/c_14147.jpg"
// import Testing from "./img/testing_7.png"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import Navbar from "react-bootstrap/Navbar"
import * as tf from "@tensorflow/tfjs"
//import * as mobilenet from '@tensorflow-models/mobilenet'

import { logout } from "./Account"

import { Redirect } from "react-router-dom"

let net, class_, img_url, img, tensor

async function loadModel(id) {
	if (tf.ready()) {
		var reader = new FileReader()
		console.log("image is here..")

		reader.onload = function (event) {
			img_url = event.target.result
			console.log("image is here2..")
			return img_url
		}
		img = document.getElementById(id.name)

		console.log(id)

		document.getElementById("status").innerHTML = "Status: Loading model..."
		net = await tf.loadLayersModel(
			"https://raw.githubusercontent.com/Qwerty71/codein/Qwerty71-patch-1/model.json"
		)
		console.log("model loaded...")

		let offset = tf.scalar(255)
		document.getElementById("status").innerHTML = "Status: Predicting..."
		tensor = tf.browser
			.fromPixels(img)
			.resizeNearestNeighbor([150, 150])
			.toFloat()
			.div(offset)

		let predictions = await net.predict(tensor.expandDims()).data()
		let results = Array.from(predictions)
			.map(function (p, i) {
				return {
					probability: p,
					className: i,
				}
			})
			.sort(function (a, b) {
				return b.probability - a.probability
			})
			.slice(0, 5)
		console.log(results[0].className)

		if (results[0].className == 9) {
			class_ = "a"
		} else if (results[0].className == 10) {
			class_ = "c"
		} else {
			class_ = results[0].className
		}

		console.log(class_)
		document.getElementById("status").innerHTML = "Status: Done!"
		document.getElementById("test").innerHTML = "Symbol: " + class_
	}
}

function Convert() {
	const [rendered, setRendered] = useState(false)
	const [redirect, setRedirect] = useState(false)

	if (!rendered) setRendered(true)

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	
	const cards = ["scan_0.png", "scan_1.jpg", "scan_2.pdf"]

	if (redirect) {
		return <Redirect push to="/" />
	}

	return (
		<div>
			<Navbar>
				<h2>My Scans</h2>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Button variant="success" onClick={handleShow}>
						Add Scan
					</Button>

					<Button
						style={{ marginLeft: "2em" }}
						variant="danger"
						onClick={() => {
							logout()
							setRedirect(true)
						}}
					>
						Logout
					</Button>
				</Navbar.Collapse>
			</Navbar>

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
							onChange={(e) => loadModel(e.target.files[0])}
							custom
						/>
					</Form>
					<br></br>
					<p id="status" style={{ fontSize: "50%" }}>
						{" "}
						Status: Waiting for upload...
					</p>
					<p id="test">Symbol: </p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Upload</Button>
				</Modal.Footer>
			</Modal>

			<div className="container">
				<CardGroup>
					{cards.map((card, idx) => (
						<Card key={idx}>
							<Card.Body>
								<Card.Title>Scan {idx}</Card.Title>
								<Card.Img
									id={card}
									variant="top"
									src={Holder}
								/>
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

			<img
				src={Testing_Image}
				id="a_137.jpg"
				style={{ display: "none" }}
			/>
			<img
				src={Testing_Image2}
				id="c_14147.jpg"
				style={{ display: "none" }}
			/>
		</div>
	)
}

export default Convert
