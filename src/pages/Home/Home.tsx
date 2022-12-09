import React, { useState, useEffect, useCallback } from "react";
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
import { key_App } from "../../types/constans/constant";
import Chat from "../../components/chat/chat";
import Welcome from "../../components/welcome/welcome";

import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [currentChat, setCurrentChat] = useState(undefined);

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
          <Chat currentChat={currentChat} currentUser={currentUser} />
        )}
      </div>
    </div>
  );
};

export default Home;
