import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Intro from "./Components/Main/Intro/Intro";
import UserTweet from "./Components/Main/UserTweet/UserTweet";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Intro />
        <UserTweet />
      </div>
    </div>
  );
}

export default App;
