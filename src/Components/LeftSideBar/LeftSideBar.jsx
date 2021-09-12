import React, { useContext } from "react";
import { NavLink, Switch } from "react-router-dom";
import "./LeftSideBar.css";
import Logo from "../../Assets/images/logo.png";
import userLogo from "../../Assets/images/user-logo.jpg";
import moreLink from "../../Assets/images/Vector1.png";

import Public from "../../Routes/Public";
import Private from "../../Routes/Private";

import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";

import useLang from "../../Hooks/useLang";
import content from "../../Localization/Content";
import { Context } from "../../Context/Lang";
function Header() {
  const [lang] = useLang();
  return (
    <>
      <div className={`header`}>
        <a href="home" className="logo-link">
          <img src={Logo} alt="" width="40" height="33" />
        </a>
        <ul className={`list `}>
          <li className={`list__item `}>
            <NavLink className="list__item__link" to="/">
              {content[lang].home}
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/explore">
              Explore
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/notifications">
              Notifications
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/messages">
              Messages
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/bookmarks">
              Bookmarks
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/lists">
              Lists
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/more">
              More
            </NavLink>
          </li>
        </ul>
        <button className="header-btn">Tweet</button>

        <div className="header-wrapper">
          <img
            className="user-logo"
            src={userLogo}
            alt="user logo"
            width="50"
            height="50"
          />
          <span className="header-wrapper__span">
            <p className="user-name">Bobur</p>
            <a href="twitter.com" className="user-username">
              @bobur_mavlonov
            </a>
          </span>
          <a href="more" className="more-link">
            <img src={moreLink} alt="more link" width="17" height="4" />
          </a>
        </div>
      </div>
      <Switch>
        <Public path="/" component={Home} exact />
        <Private path="/profile" component={Profile} exact />
        <Public path="/login" component={Login} exact />
      </Switch>
    </>
  );
}

export default Header;
