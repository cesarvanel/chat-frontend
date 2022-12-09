import React, { useCallback, useEffect } from "react";
import { getMessage } from "../../redux/apps/actions";
import { messageSelector, useAppDispatch, useAppSelector } from "../../redux/store";
import Message from "../message/message";
import "./messageList.scss";

const MessageList = (props:any) => {

  const {currentChat, currentUser} = props;

  const sender = currentUser.userEmail;
  const receiver = currentChat.userEmail;

  const dispatch = useAppDispatch();

  const loadMessage = useCallback(async () => {
    const Body: any = { sender, receiver };
    const res = await dispatch(getMessage(Body));

    if (getMessage.fulfilled.match(res)) {
      return res.payload;
    }
  }, [dispatch, receiver, sender]);

  useEffect(() => {
    loadMessage();
  }, [loadMessage]);

  
  const messages = useAppSelector(messageSelector);

  console.log("messages", messages);

  
  return (
    <div className="MessageList">
      {messages.map(( msg:any, index:number) => {
        return <Message  key={index} msgs={msg}/>;
      })}
    </div>
  );
};

export default MessageList;
