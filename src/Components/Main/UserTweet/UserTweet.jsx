import UserLogo from "../../../Assets/images/user-logo.jpg";
import Vector1 from "../../Lib/Vector1";
import Vector2 from "../../Lib/Vector2";
import Vector3 from "../../Lib/Vector3";
import Vector4 from "../../Lib/Vector4";
import Vector5 from "../../Lib/Vector5";
import "./UserTweet.css";
function UserTweet() {
  return (
    <section className="user-tweet">
      <div className="user-typing">
        <img
          className="user-logo"
          src={UserLogo}
          alt="user logo"
          width="60"
          height="60"
        />

        <span className="user-typing__wrapper">
          <input className="input" type="text" placeholder="What’s happening" />
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
        <button className="tweet-btn" type="button">
          Tweet
        </button>
      </div>
    </section>
  );
}

export default UserTweet;
