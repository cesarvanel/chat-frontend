import { DotsThree, Phone, UserPlus } from "phosphor-react";
import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div>
        <h3>Cesar</h3>
      </div>

      <div className="right">
        <DotsThree size={24} weight="bold" />
        <Phone size={24} weight="bold" />
        <UserPlus size={24} weight="bold" />
      </div>
    </div>
  );
};

export default Header;
