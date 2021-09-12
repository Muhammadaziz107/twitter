import React from "react";
import Back from "../../Components/Lib/back";
function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <header className="profile__header">
          <button type="button">
            <Back />
          </button>
        </header>
      </div>
    </div>
  );
}

export default Profile;
