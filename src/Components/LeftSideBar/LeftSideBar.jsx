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
              {content[lang].explore}
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/notifications">
              {content[lang].notifications}
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/messages">
              {content[lang].messages}
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/bookmarks">
              {content[lang].bookmarks}
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/lists">
              {content[lang].lists}
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/profile">
              {content[lang].profile}
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink className="list__item__link" to="/more">
              {content[lang].more}
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
