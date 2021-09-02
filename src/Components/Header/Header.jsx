import React from "react";

import "./Header.css";
import Logo from "../../Assets/images/logo.png";
import userLogo from "../../Assets/images/user-logo.jpg";
import moreLink from "../../Assets/images/Vector1.png";
import useTheme from "../../Hooks/useTheme";
function Header() {
  const [theme, setTheme] = useTheme();
  return (
    <header className={`header ${theme}`}>
      <a href="home.html" className="logo-link">
        <img src={Logo} alt="" width="40" height="33" />
      </a>
      <ul className="list">
        <li className="list__item">
          <a className="list__item__link" href="aaaa">
            Home
          </a>
        </li>
        <li className="list__item">
          <a className="list__item__link" href="aaaa">
            Explore
          </a>
        </li>
        <li className="list__item">
          <a className="list__item__link" href="aaaa">
            Notifications
          </a>
        </li>
        <li className="list__item">
          <a className="list__item__link" href="aaaa">
            Messages
          </a>
        </li>
        <li className="list__item">
          <a className="list__item__link" href="aaaa">
            Bookmarks
          </a>
        </li>
        <li className="list__item">
          <a className="list__item__link" href="aaaa">
            Lists
          </a>
        </li>
        <li className="list__item">
          <a className="list__item__link" href="aaaa">
            Profile
          </a>
        </li>
        <li className="list__item">
          <a className="list__item__link" href="aaaa">
            More
          </a>
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
