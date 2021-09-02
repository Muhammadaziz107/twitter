import "./Footer.css";
import Search from "../Lib/search";
import SettingsIcon from "../Lib/settings";
import More from "../Lib/more";
import user1 from "../../Assets/images/users1.jpg";
import user2 from "../../Assets/images/user2.jpg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <label className="input-wrapper">
          <Search />
          <input className="searh-input" type="text" placeholder="Search Twitter" />
        </label>

        <div className="trends">
          <span className="trends__wrapper1">
            <h2>Trends for you</h2>
            <button className="setting-btn" type="button">
              <SettingsIcon />
            </button>
          </span>

          <ul className="trends__list">
            <li className="trends__list__item">
              <span className="span-wrapper">
                <p>Trending in Germany</p>
                <h4>Revolution</h4>
                <p>50.4K Tweets</p>
              </span>
              <button type="button" className="footer__more-btn">
                <More />
              </button>
            </li>
            <li className="trends__list__item">
              <span className="span-wrapper">
                <p>Trending in Germany</p>
                <h4>Revolution</h4>
                <p>50.4K Tweets</p>
              </span>
              <button type="button" className="footer__more-btn">
                <More />
              </button>
            </li>
            <li className="trends__list__item">
              <span className="span-wrapper">
                <p>Trending in Germany</p>
                <h4>Revolution</h4>
                <p>50.4K Tweets</p>
              </span>
              <button type="button" className="footer__more-btn">
                <More />
              </button>
            </li>
          </ul>

          <a className="show-more-link" href="more-link">
            Show more
          </a>
        </div>

        <div className="users">
          <h2 className="user__heading">You might like</h2>
          <ul className="users__list">
            <li className="users__list__item">
              <img className="users__img" src={user1} alt="" />
              <span>
                <h5>Mushtariy</h5>
                <p>@Mushtar565266</p>
              </span>

              <button type="button" className="follow-btn">
                Follow
              </button>
            </li>
            <li className="users__list__item">
              <img className="users__img" src={user2} alt="" />
              <span>
                <h5>Shuhratbek</h5>
                <p>@mrshukhrat</p>
              </span>

              <button type="button" className="follow-btn">
                Follow
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
    </footer>
  );
}

export default Footer;
