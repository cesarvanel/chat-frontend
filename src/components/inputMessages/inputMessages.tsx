import { LinkSimple, FilePlus, PaperPlaneRight, Smiley } from "phosphor-react";
import Picker from "emoji-picker-react";
import React, { useState } from "react";

import "./inputMessages.scss";

export type InputProps = {

  handleSendMsg:(msg:any) => void
}

const InputMessages = (props: InputProps) => {
  const {handleSendMsg} = props
  const [showEmojisPicker, setShwoEmojisPicker] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmojisClick = (event: any, emojis: any) => {
    console.log(emojis)
    let message = msg;
    message  = emojis.emoji + message;
    setMsg(message);
  };
  const sendChat = (e:any) =>{
    e.preventDefault()

    if(msg.length > 0){
      handleSendMsg(msg)
      setMsg('')

    }
  }

  return (
    <div className="InputMessages">
      <div className="emoji">
        <Smiley
          size={32}
          weight="fill"
          onClick={() => setShwoEmojisPicker(true)}
        />

        {showEmojisPicker && <Picker onEmojiClick={handleEmojisClick} />}
      </div>

      <form onSubmit={sendChat}>
        <input
          type="text"
          placeholder="Enter your messages here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <div className="send">
          <input type="file" name="" id="file" hidden />
          <label htmlFor="file">
            <button>
              <FilePlus size={24} weight="bold" />
            </button>
          </label>

          <button>
            <LinkSimple weight="bold" />
          </button>

          <button>
            <PaperPlaneRight weight="bold" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputMessages;
