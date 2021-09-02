import ThemeIcon from "../../Lib/ThemeIcon";
import "./Intro.css";
import Uzicon from "../../Lib/Uz";
import Usaicon from "../../Lib/Usa";
import useTheme from "../../../Hooks/useTheme";
function Intro() {
  const [theme, setTheme] = useTheme();

  return (
    <section className={`intro ${theme}`}>
      <div className="intro__wrapper">
        <h2 className="intro__wrapper__heading">Home</h2>

        <span className="span__intro-wrapper">
          <button type="button" className="uz">
            <Uzicon />
          </button>
          <button type="button" className="en">
            <Usaicon />
          </button>
          {/* ================ */}
          <select
            className="theme"
            value={theme}
            onChange={evt => setTheme(evt.target.value)}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
          </select>

          {/* ============= */}
          <button className="theme-btn" type="button">
            <ThemeIcon />
          </button>
        </span>
      </div>
    </section>
  );
}

export default Intro;
