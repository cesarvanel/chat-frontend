import React from "react";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import ChatList from "../chatList/chatList";

import './sidebar.scss'
import { PlusCircle } from "phosphor-react";



const Sidebar = () => {
  return (
    <div className="Sidebar">

      <Navbar/>
      <Search/>
      <ChatList/>
    </div>
  );
};

export default Sidebar;
