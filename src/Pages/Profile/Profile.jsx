import React from "react";
import Back from "../../Components/Lib/back";
import "./Profile.css";
import ProfileIntro from "../../Components/Profile/ProfileIntro/ProfileIntro";
function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <header className="profile__header">
          <button className="back-btn" type="button">
            <Back />
          </button>

          <span className="header__wrapper">
            <h3 className="header__username">Bobur</h3>
            <p className="header__password">1,070 Tweets</p>
          </span>
        </header>
        <ProfileIntro />
      </div>
    </div>
  );
}

export default Profile;
