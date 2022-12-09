import Header from "../header/header";
import MessageList from "../messageList/messageList";
import InputMessages from "../inputMessages/inputMessages";
import "./chat.scss";
import axios from "axios";
import { NEW_MESSAGE } from "../../types/constans/constant";
import userSlice from "../../redux/apps/reducer";
import { useAppDispatch } from "../../redux/store";

const Chat = (props: any) => {
  const { currentChat, currentUser } = props;
  const dispatch = useAppDispatch()

  const handleSendMsg = async (msg: any) => {
    try {
      const post: any = {
        msg: msg,
        users: [currentChat.userEmail, currentUser.userEmail],
        sender: currentUser.userEmail,
        receiver: currentChat.userEmail,
      };
      const { data } = await axios.post(NEW_MESSAGE, post);
      //dispatch(userSlice.actions.AddNewMessage())
    } catch (error: any) {
      console.log(error);
    }
  };


  return (
    <div className="Chat">
      <Header currentChat={currentChat} />
      <MessageList currentChat={currentChat} currentUser={currentUser} />
      <InputMessages handleSendMsg={handleSendMsg} />
    </div>
  );
};

export default Chat;
