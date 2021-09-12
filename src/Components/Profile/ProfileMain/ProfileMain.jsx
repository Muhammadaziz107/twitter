import React from "react";
import "./ProfileMain.css";
import { NavLink, Switch, Route } from "react-router-dom";
import Vector6 from "../../Lib/Vector6";
import Vector7 from "../../Lib/Vector7";
import Vector8 from "../../Lib/Vector8";
import Vector9 from "../../Lib/Vector9";
import Vector10 from "../../Lib/Vector10";
import userlogo from "../../../Assets/images/user-logo.jpg";
import More from "../../Lib/more";
import ProfileMainImg from "../../../Assets/images/profile-main-tweets-img.jpg";

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

          <div className="user-profile__div1">
            <img className="userlogo" src={userlogo} alt="nimadur" />

            <span className="user-profile__div1__wrapper">
              <div className="user-profile__div1__wrapper__wrapper">
                <p>Bobur</p>
                <a href="twitter.com">@bobur_mavlonov · Apr 1</a>
              </div>
              <p className="user-profile__paragraph1">
                4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun
                moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni
                normallashtirishni reja qildim
              </p>

              <div className="user-profile__div1__div">
                <p className="user-profile__div1__div__paragraph">
                  {/* ====================== */}

                  <Vector6 />
                  {/* ======================= */}
                  <p>10</p>
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector7 />
                  <p>1</p>
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <div id="main-content">
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
                  <p>8</p>
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector9 />
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector10 />
                </p>
              </div>
            </span>

            <button className="user-profile__more-btn" type="button">
              <More />
            </button>
          </div>

          {/* ===== */}

          <div className="user-profile__div1">
            <img className="userlogo" src={userlogo} alt="nimadur" />

            <span className="user-profile__div1__wrapper">
              <div className="user-profile__div1__wrapper__wrapper">
                <p>Bobur</p>
                <a href="twitter.com">@bobur_mavlonov · Apr 1</a>
              </div>
              <p className="user-profile__paragraph1">
                <div>
                  Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga
                  qarab ham o'tirmaymiz.
                </div>
                <div>
                  <p></p>
                </div>
                <div>
                  Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga
                  chiqadi slishkom aqlli odamlar nazdida.
                </div>
                <div>
                  <p></p>
                </div>
                <div>Gap faqat biznes trenerlar haqida emas.</div>
              </p>

              <div className="user-profile__div1__div">
                <p className="user-profile__div1__div__paragraph">
                  <Vector6 />
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector7 />
                  <p>5</p>
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <div id="main-content">
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
                  <p>9</p>
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector9 />
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector10 />
                </p>
              </div>
            </span>

            <button className="user-profile__more-btn" type="button">
              <More />
            </button>
          </div>
          {/* ========== */}

          <div className="user-profile__div1">
            <img className="userlogo" src={userlogo} alt="nimadur" />

            <span className="user-profile__div1__wrapper">
              <div className="user-profile__div1__wrapper__wrapper">
                <p>Bobur</p>
                <a href="twitter.com">@bobur_mavlonov · Apr 1</a>
              </div>
              <p className="user-profile__paragraph1">A bo'pti maskamasman</p>
              <img src={ProfileMainImg} alt="" />

              <div className="user-profile__div1__div">
                <p className="user-profile__div1__div__paragraph">
                  <Vector6 />
                  <p>10</p>
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector7 />
                  <p>1</p>
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <div id="main-content">
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
                  <p>8</p>
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector9 />
                </p>
                <p className="user-profile__div1__div__paragraph">
                  <Vector10 />
                </p>
              </div>
            </span>

            <button className="user-profile__more-btn" type="button">
              <More />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileMain;
