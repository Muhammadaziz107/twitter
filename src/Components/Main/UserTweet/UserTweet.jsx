import React, { useRef } from "react";

import "./UserTweet.css";
import UserLogo from "../../../Assets/images/user-logo.jpg";
import Vector1 from "../../Lib/Vector1";
import Vector2 from "../../Lib/Vector2";
import Vector3 from "../../Lib/Vector3";
import Vector4 from "../../Lib/Vector4";
import Vector5 from "../../Lib/Vector5";
import useLang from "../../../Hooks/useLang";
import content from "../../../Localization/Content";
import { Context } from "../../../Context/Theme";
function UserTweet() {
  const tweetBtn = useRef();
  const [lang] = useLang();
  const { theme } = React.useContext(Context);

  return (
    <section className={`user-tweet`}>
      <div className="user-typing">
        <img
          className="user-logo"
          src={UserLogo}
          alt="user logo"
          width="60"
          height="60"
        />

        <span className="user-typing__wrapper">
          <input
            className={`input ${theme}`}
            type="text"
            placeholder={content[lang].introplaceholder}
          />
          <div>
            <button className="btn-typing" type="button">
              <Vector1 />
            </button>
            <button className="btn-typing" type="button">
              <Vector2 />
            </button>
            <button className="btn-typing" type="button">
              <Vector3 />
            </button>
            <button className="btn-typing" type="button">
              <Vector4 />
            </button>
            <button className="btn-typing" type="button">
              <Vector5 />
            </button>
          </div>
        </span>
        <button className="tweet-btn" ref={tweetBtn}>
          Tweet
        </button>
      </div>
    </section>
  );
}

export default UserTweet;
