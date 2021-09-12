import React from "react";
import "./ProfileInfo.css";
function ProfileInfo() {
  return (
    <div className="profileinfo-wrapper">
      <div className="profileinfo">
        <span className="span1">
          <h3 className="span1__h3">Bobur</h3>
          <p className="span1__p">@bobur_mavlonov</p>
        </span>

        <p className="profileinfo__p">
          UX&UI designer at{" "}
          <a className="profileinfo__p__a" href="#">
            @abutechuz
          </a>
        </p>

        <span className="span2">
          <p className="span2__p1">Mashag’daman</p>
          <p>
            <a className="span2__a" href="https://t.me/boburjon_mavlonov">
              t.me/boburjon_mavlonov
            </a>
          </p>
          <p className="span2__p2">Born November 24, 2000</p>
          <p className="span2__p3">Joined May 2020</p>
        </span>

        <span className="span3">
          <p className="span3__p">
            <strong className="span3__p__strong">67</strong>Following
          </p>

          <p className="span3__p">
            <strong className="span3__p__strong">47</strong> Followers
          </p>
        </span>
      </div>
    </div>
  );
}
export default ProfileInfo;
