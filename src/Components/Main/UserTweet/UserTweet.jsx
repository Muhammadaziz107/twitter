import React, { useRef } from "react";

import UserLogo from "../../../Assets/images/user-logo.jpg";
import Vector1 from "../../Lib/Vector1";
import Vector2 from "../../Lib/Vector2";
import Vector3 from "../../Lib/Vector3";
import Vector4 from "../../Lib/Vector4";
import Vector5 from "../../Lib/Vector5";
import "./UserTweet.css";

import { Context } from "../../../Context/Theme";
function UserTweet() {
  const tweetBtn = useRef();
  // const [tweet, setTweet] = useState();
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
            placeholder="What’s happening"
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
        <button disabled className="tweet-btn" type="button" ref={tweetBtn}>
          Tweet
        </button>
      </div>
    </section>
  );
}

export default UserTweet;
