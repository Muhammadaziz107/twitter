import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [theme, setTheme] = React.useState(
    window.localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    window.localStorage.setItem("theme", theme);
  });

  return <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>;
}
export { Provider, Context };
