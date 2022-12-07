import React from "react";
import Header from "../header/header";
import MessageList from "../messageList/messageList";
import InputMessages from "../inputMessages/inputMessages";
import "./chat.scss";

const Chat = (props: any) => {
  const { currentChat } = props;


  const handleSendMsg = async (msg:any) =>{

	alert(msg)

  }

  return (
    <div className="Chat">
      <Header currentChat={currentChat} />
      <MessageList />
      <InputMessages handleSendMsg  = {handleSendMsg}  />
    </div>
  );
};

export default Chat;
