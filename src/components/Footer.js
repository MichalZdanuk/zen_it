import classes from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnimatedElement from "./animation/AnimatedElement";

const Footer = () => {
  const handleGithubClick = () => {
    window.location.href = "https://github.com/MichalZdanuk";
  };
  return (
    <div className={classes["footer_div"]}>
      <AnimatedElement animationType="grow" base="animated-v2">
        <div onClick={handleGithubClick} className={classes["copyright_div"]}>
          Copyright:
          <GitHubIcon />
          <p className={classes["name"]}>Michał Żdanuk</p>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default Footer;
