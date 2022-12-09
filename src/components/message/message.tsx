import React from "react";

import "./message.scss";

const Message = (props:any) => {

  const {msgs} = props;

  console.log('msgs', msgs)

  
  return (
    <div className="Message owner">
      <div className="sender">
        <span>{msgs.message}</span>
      </div>

      <div className="receiver">
        <img src="/images/cesar.jpg" alt="" />
        <p>j'apprend le developpement je suis un violent developpeur</p>
      </div>
    </div>
  );
};

export default Message;
