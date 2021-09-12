import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [lang, setLang] = React.useState(window.localStorage.getItem("lang") || "en");

  React.useEffect(() => {
    window.localStorage.setItem("lang", lang);
  });

  return <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>;
}
export { Provider, Context };
