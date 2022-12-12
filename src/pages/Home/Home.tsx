import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../../components/navbar/navbar";
import Search from "../../components/search/search";
import ChatList from "../../components/chatList/chatList";
import { useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
  contactSelector,
  loadingSelector,
} from "../../redux/store";
import { getAllUser } from "../../redux/apps/actions";
import { key_App, SOCKET_CONNECT } from "../../types/constans/constant";
import Chat from "../../components/chat/chat";
import Welcome from "../../components/welcome/welcome";

import "./Home.scss";
import { EVENTS } from "../../redux/socket/actionsTypes";
import { useSocket } from "../../hooks/useSocket";

const Home = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<any>({});
  const [currentChat, setCurrentChat] = useState(undefined);
  const socket = useSocket(SOCKET_CONNECT, {
    autoConnect: false,
    auth: { token: currentUser.accessToken },
    reconnectionAttempts: 5,
    reconnectionDelay: 5,
  });

  const dispatch = useAppDispatch();

  const loadContact = useCallback(async () => {
    const res = await dispatch(getAllUser());
    if (getAllUser.fulfilled.match(res)) {
      return res.payload;
    }
  }, [dispatch]);

  useEffect(() => {
    loadContact();
  }, [loadContact]);

  useEffect(() => {
    const items = localStorage.getItem(key_App);
    if (!items) {
      navigate("/register");
    } else {
      setCurrentUser(JSON.parse(items));
    }
  }, [navigate]);

  useEffect(() => {
    socket.on(EVENTS.connection, () => {
      console.log(socket.id);

      socket.emit(EVENTS.ADD_USER, currentUser.userEmail);
    });
  }, [currentUser.userEmail, socket]);

  const handleChangeChat = (chat: any) => {
    setCurrentChat(chat);
  };

  const contacts = useAppSelector(contactSelector);
  const loading = useAppSelector(loadingSelector);

  return (
    <div className="Home">
      <div className="container">
        <div className="Sidebar">
          <Navbar />
          <Search />
          <ChatList
            contacts={contacts}
            currentUser={currentUser}
            loading={loading}
            changeChat={handleChangeChat}
          />
        </div>
        {currentChat === undefined ? (
          <Welcome currentUser={currentUser} />
        ) : (
          <Chat
            currentChat={currentChat}
            currentUser={currentUser}
            socket={socket}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
