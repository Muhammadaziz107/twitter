import React from "react";

import "./App.css";
import Intro from "./Components/Main/Intro/Intro";
import UserTweet from "./Components/Main/UserTweet/UserTweet";
import UserComments from "./Components/Main/UsersComments/UsersComments";
import Footer from "./Components/Footer/Footer";
import { Context } from "./Context/Theme";
import useToken from "./Hooks/useToken";
import AuthenticatedApp from "./Authenticated";
import UnauthenticatedApp from "./Unauthenticated";
import Header from "./Components/Header/Header";
function App() {
  const { theme } = React.useContext(Context);

  const [token] = useToken();
  if (token) {
    return <AuthenticatedApp />;
  } else {
    // return <UnauthenticatedApp />;
  }
  return (
    <div className={`wrapper ${theme}`}>
      <Header />
      <div className="twitter-main main">
        <Intro />
        <UserTweet />
        <UserComments />
      </div>

      <Footer />
    </div>
  );
}

export default App;
