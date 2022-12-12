import Header from "../header/header";
import MessageList from "../messageList/messageList";
import InputMessages from "../inputMessages/inputMessages";
import "./chat.scss";
import axios from "axios";
import { NEW_MESSAGE } from "../../types/constans/constant";
import userSlice from "../../redux/apps/reducer";
import {
  messageSelector,
  useAppDispatch,
  useAppSelector,
} from "../../redux/store";
import { EVENTS } from "../../redux/socket/actionsTypes";
import { getMessage } from "../../redux/apps/actions";
import { useEffect, useState } from "react";

const Chat = (props: any) => {
  const { currentChat, currentUser, socket } = props;
  const [arrival, setArrival] = useState<any>(null);

  const dispatch = useAppDispatch();

  const messages = useAppSelector(messageSelector);
  const handleSendMsg = async (msg: any) => {
    try {
      const post: any = {
        msg: msg,
        users: [currentChat.userEmail, currentUser.userEmail],
        sender: currentUser.userEmail,
        receiver: currentChat.userEmail,
      };
      const { data } = await axios.post(NEW_MESSAGE, post);
      socket.emit(EVENTS.SEND_MESSAGE, {
        receiver: currentChat.userEmail,
        sender: currentUser.userEmail,
        msg: msg,
      });
      const values = { fromMe: true, message: data.Msg.message.text };
      const msgs = [...messages, values];
      dispatch(userSlice.actions.AddNewMessage(msgs));
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on(EVENTS.RECEIVE_MESSAGE, (msg: any) => {
        setArrival({ fromMe: false, message: msg });
      });
    }
  }, [socket]);

  return (
    <div className="Chat">
      <Header currentChat={currentChat} />
      <MessageList currentChat={currentChat} currentUser={currentUser} />
      <InputMessages handleSendMsg={handleSendMsg} />
    </div>
  );
};

export default Chat;
