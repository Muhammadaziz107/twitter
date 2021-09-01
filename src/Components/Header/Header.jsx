import React from "react";

import "./Header.css";
import Logo from "../../Assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <a href="home.html" className="logo-link">
        <img src={Logo} alt="" width="40" height="33" />
      </a>
      <ul className="list">
        <li className="list__item">Home</li>
        <li className="list__item">Explore</li>
        <li className="list__item">Notifications</li>
        <li className="list__item">Messages</li>
        <li className="list__item">Bookmarks</li>
        <li className="list__item">Lists</li>
        <li className="list__item">Profile</li>
        <li className="list__item">More</li>
      </ul>
      <button className="header-btn">Tweet</button>
    </header>
  );
}

export default Header;
