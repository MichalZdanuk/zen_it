import classes from "./Politics.module.css";
import AnimatedElement from "./animation/AnimatedElement";
import ConstructionIcon from '@mui/icons-material/Construction';
import LaptopIcon from '@mui/icons-material/Laptop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const benefits = [
    {
      id: 0,
      iconName: "repair",
      title: "Profesjonalna Naprawa Komputerów",
      content: "Zajmuję się profesjonalną naprawą komputerów i laptopów. Dzięki mojemu doświadczeniu i wiedzy szybko przywracam sprzęt do pełnej sprawności, eliminując usterki i problemy techniczne."
    },
    {
      id: 1,
      iconName: "remote",
      title: "Mobilna Usługa Naprawy Komputerów",
      content: "Oferuję usługi mobilnej naprawy komputerów, bez konieczności wizyty w serwisie. Dojeżdżam do klientów we własnym samochodzie, co zapewnia wygodę i oszczędność czasu."
    },
    {
      id: 2,
      iconName: "shop",
      title: "Dostęp do Sprzętu Komputerowego z Hurtowni",
      content: "Jako pośrednik, zapewniam dostęp do wysokiej jakości sprzętu komputerowego. Współpracuję z renomowanymi hurtowniami, aby zapewnić klientom najlepsze rozwiązania i konkurencyjne ceny."
    },
  ];

const chooseIcon = (iconName) => {
  if(iconName === "repair"){
    return <ConstructionIcon className={classes["icon"]}/>
  } else if (iconName === "remote"){
    return <LaptopIcon className={classes["icon"]}/>
  } else if (iconName === "shop"){
    return <ShoppingCartIcon className={classes["icon"]}/>
  }
};

const Politics = () => {
  return (
    <div className={classes["politics-div"]}>
      <h2 className={classes["politics-heading"]}><span className={classes["text-with-border"]}>MOJE USŁUGI</span> INFORMATYCZNE</h2>
      <div className={classes["politics-container"]}>
        <PoliticList benefits={benefits} />
      </div>
    </div>
  );
};

const Politic = (props) => {
    return(
      <AnimatedElement animationType="grow" base="animated-v2">
            <div className={classes["politic_div"]}>
                {/* <img src={props.img} className={classes["benefit-icon"]} alt="a"/> */}
                {chooseIcon(props.iconName)}
                <p className={classes["politic_title"]}>{props.title}</p>
                <p className={classes["politic_content"]}>{props.content}</p>
            </div>
            </AnimatedElement>
    );
};

const PoliticList = (props) => {
    const benefits = props.benefits.map((b) => {return <Politic key={b.id} iconName={b.iconName} title={b.title} content={b.content}/>})
    return (
        <>{benefits}</>
    );
};

export default Politics;
