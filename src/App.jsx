import React from "react";

import "./App.css";

import RightSideBar from "./Components/RightSideBar/RightSideBar";
import { Context } from "./Context/Theme";

import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
function App() {
  const { theme } = React.useContext(Context);

  return (
    <div className={`wrapper ${theme}`}>
      <LeftSideBar />
      <RightSideBar />
    </div>
  );
}

export default App;
