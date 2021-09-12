import React from "react";
import "./ProfileMain.css";
import { NavLink, Switch, Route } from "react-router-dom";
function ProfileMain() {
  return (
    <div className="ProfileMain-wrapper">
      <div className="ProfileMain">
        <div className="profilemain__header">
          <nav className="profilemain__nav">
            <ul className="profilemain__list">
              <li className="profilemain__list__item">
                <NavLink className="profilemain__list__item__link" to="/profile/tweet">
                  Tweets
                </NavLink>
              </li>
              <li className="profilemain__list__item">
                <NavLink className="profilemain__list__item__link" to="/tweet">
                  Tweets & replies
                </NavLink>
              </li>
              <li className="profilemain__list__item">
                <NavLink className="profilemain__list__item__link" to="/tweet">
                  Media
                </NavLink>
              </li>
              <li className="profilemain__list__item">
                <NavLink className="profilemain__list__item__link" to="/tweet">
                  Likes
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* =========== */}

        <div className="profilemain__maindiv">
          <p className="profilemain__maindiv__p">Pinned Tweet</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileMain;
