import React from "react"
import Header from "../header/header"; 
import MessageList from "../messageList/messageList";
import InputMessages from "../inputMessages/inputMessages";
import "./chat.scss"

const Chat = () => {

	return <div className="Chat">
		<Header/>
		<MessageList/>
		<InputMessages/>
		
	</div>
}

export default Chat
