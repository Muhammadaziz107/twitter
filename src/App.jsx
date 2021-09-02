import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Intro from "./Components/Main/Intro/Intro";
import UserTweet from "./Components/Main/UserTweet/UserTweet";
import UserComments from "./Components/Main/UsersComments/UsersComments";
import Footer from "./Components/Footer/Footer";
import useTheme from "./Hooks/useTheme";
function App() {
  const [theme, setTheme] = useTheme();
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
