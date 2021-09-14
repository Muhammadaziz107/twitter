import React, { useState } from "react";

import ThemeIcon from "../../Lib/ThemeIcon";
import "./Intro.css";
import useTheme from "../../../Hooks/useTheme";
import content from "../../../Localization/Content";
import useLang from "../../../Hooks/useLang";
function Intro() {
  const [lang, setLang] = useLang("en");
  const [theme, setTheme] = useTheme();

  return (
    <section className={`intro ${theme}`}>
      <div className="intro__wrapper">
        <h2 className="intro__wrapper__heading">{content[lang].home}</h2>

        <span className="span__intro-wrapper">
          <select
            className="lang"
            onChange={evt => {
              setLang(evt.target.value);
            }}
          >
            <option value="en">en</option>
            <option value="uz">uz</option>
          </select>
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
