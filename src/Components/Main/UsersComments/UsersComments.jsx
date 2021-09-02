import React from "react";

import "./UserComments.css";
import userlogo1 from "../../../Assets/images/userlogo1.jpg";
import userlogo2 from "../../../Assets/images/userlogo2.jpg";
import userlogo3 from "../../../Assets/images/userlogo3.jpg";
import Vector6 from "../../Lib/Vector6";
import Vector7 from "../../Lib/Vector7";
import Vector8 from "../../Lib/Vector8";
import Vector9 from "../../Lib/Vector9";
import Vector10 from "../../Lib/Vector10";
import More from "../../Lib/more";
import img1 from "../../../Assets/images/img1.jpg";

import { Context } from "../../../Context/Theme";
function UserComments() {
  const { theme } = React.useContext(Context);
  return (
    <section className="user-comment">
      <div className="user-comments__wrapper">
        <div className="user-comments__div1">
          <img className="userlogo2" src={userlogo1} alt="nimadur" />

          <span className="div1__wrapper">
            <div className={`div1__wrapper__wrapper ${theme}`}>
              <p className={`p ${theme}`}>Designsta</p>
              <a href="twitter.com">@inner · 25m</a>
            </div>
            <p className="paragraph1">
              Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
            </p>

            <div className="div1__div">
              <p className="div1__div__paragraph">
                <Vector6 />
                <p>10</p>
              </p>
              <p className="div1__div__paragraph">
                <Vector7 />
                <p>1</p>
              </p>
              <p className="div1__div__paragraph">
                <Vector8 />
                <p>8</p>
              </p>
              <p className="div1__div__paragraph">
                <Vector9 />
              </p>
              <p className="div1__div__paragraph">
                <Vector10 />
              </p>
            </div>
          </span>

          <button className="more-btn" type="button">
            <More />
          </button>
        </div>

        {/* ================== */}

        <div className="user-comments__div1">
          <img className="userlogo2" src={userlogo2} alt="nimadur" />

          <span className="div1__wrapper">
            <div className="div1__wrapper__wrapper">
              <p>cloutexhibition</p>
              <a href="twitter.com">@RajLahoti · 22m</a>
            </div>
            <p className="paragraph1">
              YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik
              davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand
              bo’ladi odam.
            </p>

            <div className="div1__div">
              <p className="div1__div__paragraph">
                <Vector6 />
              </p>
              <p className="div1__div__paragraph">
                <Vector7 />
                <p>5</p>
              </p>
              <p className="div1__div__paragraph">
                <Vector8 />
                <p>9</p>
              </p>
              <p className="div1__div__paragraph">
                <Vector9 />
              </p>
              <p className="div1__div__paragraph">
                <Vector10 />
              </p>
            </div>
          </span>

          <button className="more-btn" type="button">
            <More />
          </button>
        </div>

        {/* ======================= */}

        <div className="user-comments__div1">
          <img className="userlogo2" src={userlogo3} alt="nimadur" />

          <span className="div1__wrapper">
            <div className="div1__wrapper__wrapper">
              <p>CreativePhoto</p>
              <a href="twitter.com">@cloutexhibition · 1h</a>
            </div>
            <p className="paragraph1">Обетда..... Кечиринглар</p>
            <img src={img1} alt="" />
            <div className="div1__div">
              <p className="div1__div__paragraph">
                <Vector6 />
                <p>10</p>
              </p>
              <p className="div1__div__paragraph">
                <Vector7 />
                <p>1</p>
              </p>
              <p className="div1__div__paragraph">
                <Vector8 />
                <p>8</p>
              </p>
              <p className="div1__div__paragraph">
                <Vector9 />
              </p>
              <p className="div1__div__paragraph">
                <Vector10 />
              </p>
            </div>
          </span>

          <button className="more-btn" type="button">
            <More />
          </button>
        </div>
      </div>
    </section>
  );
}

export default UserComments;
