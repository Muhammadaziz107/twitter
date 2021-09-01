import ThemeIcon from "../../Lib/ThemeIcon";
import "./Intro.css";
function Intro() {
  return (
    <section className="intro">
      <div className="intro__wrapper">
        <h2 className="intro__wrapper__heading">Home</h2>

        <button className="theme-btn" type="button">
          <ThemeIcon />
        </button>
      </div>
    </section>
  );
}

export default Intro;
