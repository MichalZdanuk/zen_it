import classes from "./Statistics.module.css";
import NumberCounter from "number-counter";

const Statistics = () => {
  return (
    <div className={classes["statistics_div"]}>
      <div className={classes["statistic"]}>
        <span className={classes["numbers"]}>
          <NumberCounter end={50} start={30} delay="4" preFix="+" />
        </span>
        <p className={classes["statistic-text"]}>OBSŁUŻONYCH FIRM</p>
      </div>
      <div className={classes["statistic"]}>
        <span className={classes["numbers"]}>
          <NumberCounter end={978} start={800} delay="4" preFix="+" />
        </span>
        <p className={classes["statistic-text"]}>KLIENTÓW PRYWATNYCH</p>
      </div>
      <div className={classes["statistic"]}>
        <span className={classes["numbers"]}>
          <NumberCounter end={10} start={1} preFix="+" />
        </span>
        <p className={classes["statistic-text"]}>LAT DOŚWIADCZENIA</p>
      </div>
    </div>
  );
};

export default Statistics;
