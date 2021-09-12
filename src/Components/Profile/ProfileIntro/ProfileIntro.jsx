import React from "react";
import "./ProfileIntro.css";
import ProfileIntroUserImg from "../../../Assets/images/profile-intro-user-img.jpg";
function ProfileIntro() {
  return (
    <div className="profileintro-wrapper">
      <div className="profile-intro">
        <img
          src={ProfileIntroUserImg}
          alt="ProfileIntroUserImg"
          className="ProfileIntroUserImg"
        />

        <button className="edit-profile" type="button">
          Edit profile
        </button>
      </div>
    </div>
  );
}

export default ProfileIntro;
