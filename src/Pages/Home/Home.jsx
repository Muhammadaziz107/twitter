import React from "react";
import Intro from "../../Components/Main/Intro/Intro";
import UserTweet from "../../Components/Main/UserTweet/UserTweet";
import UserComments from "../../Components/Main/UsersComments/UsersComments";
import "./Home.css";
function Home() {
  return (
    <div className="site-main">
      <Intro />
      <UserTweet />
      <UserComments />
    </div>
  );
}
export default Home;
