import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Chat from "../../components/chat/chat";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
