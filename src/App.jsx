import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Intro from "./Components/Main/Intro/Intro";
import UserTweet from "./Components/Main/UserTweet/UserTweet";
import UserComments from "./Components/Main/UsersComments/UsersComments";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="twitter-main main">
        <Intro />
        <UserTweet />
        <UserComments />
      </div>
    </div>
  );
}

export default App;
