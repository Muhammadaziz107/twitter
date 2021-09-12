import React from "react";

import "./UserComments.css";
import userlogo1 from "../../../Assets/images/userlogo1.jpg";
import userlogo2 from "../../../Assets/images/userlogo2.jpg";
import userlogo3 from "../../../Assets/images/userlogo3.jpg";
import Vector6 from "../../Lib/Vector6";
import Vector7 from "../../Lib/Vector7";

import Vector9 from "../../Lib/Vector9";
import Vector10 from "../../Lib/Vector10";
import More from "../../Lib/more";
import img1 from "../../../Assets/images/img1.jpg";

import { Context } from "../../../Context/Theme";

function UserComments() {
  const [count, setCount] = React.useState(0);
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
                {/* ================= */}
                <div id="main-content" onChange={() => setCount(count + 1)}>
                  <div>
                    <input type="checkbox" id="checkbox1" />
                    <label for="checkbox1">
                      <svg
                        id="heart-svg"
                        viewBox="467 392 58 57"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Group"
                          fill="none"
                          fill-rule="evenodd"
                          transform="translate(467 392)"
                        >
                          <path
                            d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                            id="heart"
                            fill="#AAB8C2"
                          />
                          <circle
                            id="main-circ"
                            fill="#E2264D"
                            opacity="0"
                            cx="29.5"
                            cy="29.5"
                            r="1.5"
                          />

                          <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                          </g>

                          <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                          </g>

                          <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                          </g>

                          <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                          </g>
                        </g>
                      </svg>
                    </label>
                  </div>
                </div>
                {/* =================== */}
                <p>{count}</p>
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
                {/* ============= */}

                <div
                  id="main-content"
                  onChange={() => {
                    setCount(count + 1);
                  }}
                >
                  <div>
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox">
                      <svg
                        id="heart-svg"
                        viewBox="467 392 58 57"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Group"
                          fill="none"
                          fill-rule="evenodd"
                          transform="translate(467 392)"
                        >
                          <path
                            d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                            id="heart"
                            fill="#AAB8C2"
                          />
                          <circle
                            id="main-circ"
                            fill="#E2264D"
                            opacity="0"
                            cx="29.5"
                            cy="29.5"
                            r="1.5"
                          />

                          <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                          </g>

                          <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                          </g>

                          <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                          </g>

                          <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                          </g>
                        </g>
                      </svg>
                    </label>
                  </div>
                </div>

                {/* ================== */}
                <p>{count}</p>
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
                {/* ============== */}
                <div
                  id="main-content"
                  onChange={() => {
                    setCount(count + 1);
                  }}
                >
                  <div>
                    <input type="checkbox" id="checkbox2" />
                    <label for="checkbox2">
                      <svg
                        id="heart-svg"
                        viewBox="467 392 58 57"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Group"
                          fill="none"
                          fill-rule="evenodd"
                          transform="translate(467 392)"
                        >
                          <path
                            d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                            id="heart"
                            fill="#AAB8C2"
                          />
                          <circle
                            id="main-circ"
                            fill="#E2264D"
                            opacity="0"
                            cx="29.5"
                            cy="29.5"
                            r="1.5"
                          />

                          <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                          </g>

                          <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                          </g>

                          <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                          </g>

                          <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                          </g>

                          <g id="grp1" opacity="0" transform="translate(24)">
                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                          </g>
                        </g>
                      </svg>
                    </label>
                  </div>
                </div>

                {/* ================== */}
                <p>{count}</p>
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
