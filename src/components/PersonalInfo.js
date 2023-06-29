import classes from "./PersonalInfo.module.css";
import AnimatedElement from "./animation/AnimatedElement.js";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
const PersonalInfo = () => {
  return (
    <div className={classes["personalinfo_container"]}>
      <AnimatedElement animationType="slide-in" base="animated-text">
        <div className={classes["info_div"]}>
          <h1 className={classes["main_heading"]}>O mnie</h1>
          <p className={classes["about_me_text"]}>
            Jestem informatykiem specjalizującym się w naprawie komputerów i
            optymalizacji. Pomagam ludziom w rozwiązywaniu problemów z
            urządzeniami. Oferuję również usługi napraw komputerów i
            administrowania stron internetowych. Moim celem jest zapewnienie
            profesjonalnej obsługi i pełnego zadowolenia klientów.
          </p>
          <h1 className={classes["main_heading"]}>Kontakt</h1>
          <div className={classes["contact_div"]}>
            <li className={classes["contact_item"]}>
              <LocalPhoneIcon />
              <span className={classes["contact_text"]}>794 265 222</span>
            </li>
            <li className={classes["contact_item"]}>
              <HomeIcon />
              <span className={classes["contact_text"]}>
                ul. Nowogródzka 7B
              </span>
            </li>
            <li className={classes["contact_item"]}>
              <EmailIcon />
              <span className={classes["contact_text"]}>serwis@zen-it.pl</span>
            </li>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default PersonalInfo;
