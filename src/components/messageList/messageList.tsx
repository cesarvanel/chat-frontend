import React from "react";
import Message from "../message/message";
import "./messageList.scss";

const MessageList = () => {
  return (
    <div className="MessageList">
      {[1, 2,3,4].map((index:number) => {
        return <Message  key={index}/>;
      })}
    </div>
  );
};

export default MessageList;
