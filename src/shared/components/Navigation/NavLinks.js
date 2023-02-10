import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/locations">MY LOCATIONS</NavLink>
      </li>
      <li>
        <NavLink to="/locations/new">ADD LOCATIONS</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHETICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
