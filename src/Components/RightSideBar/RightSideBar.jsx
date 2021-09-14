import "./RightSideBar.css";
import Search from "../Lib/search";
import SettingsIcon from "../Lib/settings";
import More from "../Lib/more";
import user1 from "../../Assets/images/users1.jpg";
import user2 from "../../Assets/images/user2.jpg";
import useLang from "../../Hooks/useLang";
import content from "../../Localization/Content";
function Footer() {
  const [lang] = useLang();
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <label className="input-wrapper">
          <Search />
          <input
            className="searh-input"
            type="text"
            placeholder={content[lang].seachtwitter}
          />
        </label>

        <div className="trends">
          <span className="trends__wrapper1">
            <h2>{content[lang].trends}</h2>
            <button className="setting-btn" type="button">
              <SettingsIcon />
            </button>
          </span>

          <ul className="trends__list">
            <li className="trends__list__item">
              <span className="span-wrapper">
                <p>{content[lang].trending}</p>
                <h4>{content[lang].revolution}</h4>
                <p>{content[lang].tweets}</p>
              </span>
              <button type="button" className="footer__more-btn">
                <More />
              </button>
            </li>
            <li className="trends__list__item">
              <span className="span-wrapper">
                <p>{content[lang].trending}</p>
                <h4>{content[lang].revolution}</h4>
                <p>{content[lang].tweets}</p>
              </span>
              <button type="button" className="footer__more-btn">
                <More />
              </button>
            </li>
            <li className="trends__list__item">
              <span className="span-wrapper">
                <p>{content[lang].trending}</p>
                <h4>{content[lang].revolution}</h4>
                <p>{content[lang].tweets}</p>
              </span>
              <button type="button" className="footer__more-btn">
                <More />
              </button>
            </li>
          </ul>

          <a className="show-more-link" href="more-link">
            {content[lang].showmore}
          </a>
        </div>

        <div className="users">
          <h2 className="user__heading">{content[lang].youlike}</h2>
          <ul className="users__list">
            <li className="users__list__item">
              <img className="users__img" src={user1} alt="" />
              <span>
                <h5>Mushtariy</h5>
                <p>@Mushtar565266</p>
              </span>

              <button type="button" className="follow-btn">
                {content[lang].follow}
              </button>
            </li>
            <li className="users__list__item">
              <img className="users__img" src={user2} alt="" />
              <span>
                <h5>Shuhratbek</h5>
                <p>@mrshukhrat</p>
              </span>

              <button type="button" className="follow-btn">
                {content[lang].follow}
              </button>
            </li>
          </ul>
        </div>

        <div className="faqs">
          <span className="faqs__span1">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </span>
          <span className="faqs__span2">
            <p>Imprint</p>
            <p>Ads Info</p>
            <p>More ···</p>
            <p>© 2021 Twitter, Inc.</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
