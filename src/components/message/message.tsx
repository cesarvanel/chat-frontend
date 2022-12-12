import React from "react";

import "./message.scss";

const Message = (props: any) => {
  const { msgs } = props;

  return (
    <div className="Message owner">
      <div className="sender">{msgs.fromMe && <span>{msgs.message}</span>}</div>

      <div className="receiver">
        <img src="/images/cesar.jpg" alt="" />
        {msgs.fromMe && (
          <p>j'apprend le developpement je suis un violent developpeur</p>
        )}
      </div>
    </div>
  );
};

export default Message;
