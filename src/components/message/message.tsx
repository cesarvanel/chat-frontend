import React from "react";

import "./message.scss";

const Message = () => {
  return (
    <div className="Message owner">
      <div className="sender">
        <span>Que faites vous dans le vie ?</span>
      </div>

      <div className="receiver">
        <img src="/images/cesar.jpg" alt="" />
        <p>j'apprend le developpement je suis un violent developpeur</p>
      </div>
    </div>
  );
};

export default Message;
