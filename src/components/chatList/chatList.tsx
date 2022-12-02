import React from "react";

import "./chatList.scss";

const ChatList = () => {
  return (
    <div className="ChatList">
      {[1, 2, 3, 4,5].map((data: any) => {
        return (
          <div className="userChat">
            <img src="/images/cesar.jpg" alt="" />
            <div className="userChatInfo">
              <span>Cesar</span>
              <p>hello vanel </p>
            </div>
            <div className="Time">
              <div >10:30</div>
              <div className="badge">1</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
