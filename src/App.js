import classes from "./App.module.css"
import PersonalInfo from "./components/PersonalInfo.js";
import Politics from "./components/Politics.js";
import Statistics from "./components/Statistics.js";
import Offer from "./components/Offer.js";
import Footer from "./components/Footer.js";
import logo from "./assets/logo.png"

function App() {
  return (
    <div className={classes["main_container"]}>
      <div className={classes["img_div"]}>
        <img src={logo} className={classes["logo_img"]} alt=""/>
        <p className={classes["author"]}>Zenon Żdanuk</p>
      </div>
        <PersonalInfo />
        <Statistics />
        <Politics />
        <Offer />
        <Footer />
    </div>
  );
}

export default App;
