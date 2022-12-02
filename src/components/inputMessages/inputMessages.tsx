import { LinkSimple, FilePlus, PaperPlaneRight } from "phosphor-react";
import React from "react";

import "./inputMessages.scss";

const InputMessages = ({}) => {
  return (
    <div className="InputMessages"> 
      <input type="text" placeholder="new messages" />

      <div className="send">
        <input type="file" name="" id="file" hidden />
        <label htmlFor="file">
          <FilePlus  size={24} weight="bold" />
        </label>

        <button>
          <LinkSimple  weight="bold" />
        </button>

        <button>
          <PaperPlaneRight weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default InputMessages;
