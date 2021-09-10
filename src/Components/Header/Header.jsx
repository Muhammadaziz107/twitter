import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./Header.css";
import Logo from "../../Assets/images/logo.png";
import userLogo from "../../Assets/images/user-logo.jpg";
import moreLink from "../../Assets/images/Vector1.png";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
function Header() {
  return (
    <header className={`header`}>
      <a href="home" className="logo-link">
        <img src={Logo} alt="" width="40" height="33" />
      </a>
      <ul className={`list `}>
        <li className={`list__item `}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/notifications">Notifications</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/bookmarks">Bookmarks</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/lists">Lists</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/more">More</NavLink>
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
    </header>
  );
}

export default Header;
