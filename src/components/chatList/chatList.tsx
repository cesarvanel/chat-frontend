import { Fragment, useEffect, useState } from "react";

import "./chatList.scss";

import { User } from "../../types/types";

export type TchatProps = {
  contacts: User[];
  loading: boolean;
  currentUser: any;
  changeChat: (chat: any) => void;
};

const ChatList = (props: TchatProps) => {
  const { contacts, currentUser, loading, changeChat } = props;

  const [currentName, setCurrentName] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentImage(currentUser.userAvatar);
      setCurrentName(currentUser.userName);
    }
  }, [currentUser]);

  const changeCurrentChat = (index: any, contacts: User) => {
    setCurrentSelected(index);
    changeChat(contacts);
  };

  return (
    <Fragment>
      {currentImage && currentName && (
        <div className="ChatLists">
          {loading && (
            <div className="ChatList">
              {contacts.map((contact: User, index: number) => {
                return (
                  <div
                    className={`userChat ${
                      index === currentSelected ? "selecred" : ""
                    }`}
                    key={index}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <img src={contact.userAvatar} alt="" />
                    <div className="userChatInfo">
                      <span>{contact.userName}</span>
                      <p>hello vanel </p>
                    </div>
                    <div className="Time">
                      <div>10:30</div>
                      <div className="badge"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div>{}</div>
        </div>
      )}
    </Fragment>
  );
};

export default ChatList;
