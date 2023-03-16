import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const drawerIsOpenHandler = () => {
    setDrawerIsOpen(true);
  };

  const drawerIsCloseHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={drawerIsCloseHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={drawerIsCloseHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={drawerIsOpenHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/"> OriShare</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
