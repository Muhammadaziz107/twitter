import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Intro from "./Components/Main/Intro/Intro";
import UserTweet from "./Components/Main/UserTweet/UserTweet";
import UserComments from "./Components/Main/UsersComments/UsersComments";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="wrapper">
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
