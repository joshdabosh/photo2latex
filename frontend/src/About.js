import React from "react"

import { Container } from "react-bootstrap"

import { NavLink } from "react-router-dom"

function About() {
	return (
		<Container>
			<h1 className="display-4">Photo2LaTeX</h1>
			<p className="text-left">
				<b>Photo2LaTex</b> is a free, online, convenient tool to convert
				your handwritten papers into accurate LaTex code, with the click
				of a button. This online converter allow you to quickly and
				effectively convert images of your handwritten mathematical
				equations into LaTex code, facilitating the process from
				discovery to publication. All images are synced across
				platforms, meaning you can take an image from your phone and get
				the converted LaTex code from your computer. Our service uses
				machine learning technology and optical photo recognition to
				characterize your scans into LaTex code.
			</p>

			<p className="text-left">
				Click <NavLink to="/register">here</NavLink> to get started. It
				will take you to setup an account, and from there, you will be
				able to convert as many images as you would like. Click{" "}
				<NavLink to="/">here</NavLink> to see our changelog with all of
				our newest updates.
			</p>

			<p className="text-left">
				Questions? Send us an email at photo2latex@gmail.com, or
				@photo2latex.
			</p>
		</Container>
	)
}

export default About
