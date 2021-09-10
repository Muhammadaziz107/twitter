import React from "react";

import "./App.css";
import Intro from "./Components/Main/Intro/Intro";
import UserTweet from "./Components/Main/UserTweet/UserTweet";
import UserComments from "./Components/Main/UsersComments/UsersComments";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import { Context } from "./Context/Theme";

import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
function App() {
  const { theme } = React.useContext(Context);

  return (
    <div className={`wrapper ${theme}`}>
      <LeftSideBar />
      <div className="twitter-main main">
        <Intro />
        <UserTweet />
        <UserComments />
      </div>

      <RightSideBar />
    </div>
  );
}

export default App;
