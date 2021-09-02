import ThemeIcon from "../../Lib/ThemeIcon";
import "./Intro.css";
import Uzicon from "../../Lib/Uz";
import Usaicon from "../../Lib/Usa";
function Intro() {
  return (
    <section className="intro">
      <div className="intro__wrapper">
        <h2 className="intro__wrapper__heading">Home</h2>

        <button type="button" className="uz">
          <Uzicon />
        </button>
        <button type="button" className="en">
          <Usaicon />
        </button>
        <button className="theme-btn" type="button">
          <ThemeIcon />
        </button>
      </div>
    </section>
  );
}

export default Intro;
