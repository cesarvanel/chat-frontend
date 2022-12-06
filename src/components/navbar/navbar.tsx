import React from "react"

import "./navbar.scss"

const Navbar = () => {

	return <div className="Navbar">

		<div>
			<h3>Ronddo Chat </h3>
		</div>
		<div className="user">
			<img src="./images/cesar.jpg" alt=""  />
			<span>Cesar</span>
			<button>logout</button>
		</div>
	</div>
}

export default Navbar
