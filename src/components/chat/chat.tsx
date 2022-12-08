import React, { useCallback, useEffect, useState } from "react";
import Header from "../header/header";
import MessageList from "../messageList/messageList";
import InputMessages from "../inputMessages/inputMessages";
import "./chat.scss";
import axios from "axios";
import { NEW_MESSAGE, GET_ALL_MESSAGE } from "../../types/constans/constant";

const Chat = (props: any) => {
  const { currentChat, currentUser } = props;

  const sender = currentUser.userEmail;
  const receiver = currentChat.userEmail;

  const getMessage = useCallback(async () => {
    const { data } = await axios.get(
      `${GET_ALL_MESSAGE}?sender=${sender}&receiver=${receiver}`
    );
    console.log(data);
  }, [receiver, sender]);

  useEffect(() => {
     getMessage();
  }, [getMessage]);

  const handleSendMsg = async (msg: any) => {
    try {
      const post: any = {
        msg: msg,
        users: [currentChat.userEmail, currentUser.userEmail],
        sender: currentUser.userEmail,
      };

      const { data } = await axios.post(NEW_MESSAGE, post);
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="Chat">
      <Header currentChat={currentChat} />
      <MessageList />
      <InputMessages handleSendMsg={handleSendMsg} />
    </div>
  );
};

export default Chat;
