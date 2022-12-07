import React from "react"

import "./welcome.scss"

const Welcome = (props:any) => {

	const {currentUser} = props

	return <div className="Welcome">

		<h1>{currentUser.userName}</h1>
	</div>
}

export default Welcome
