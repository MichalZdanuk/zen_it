import classes from "./Offer.module.css";
import AnimatedElement from "./animation/AnimatedElement";
import paintbrush from "../assets/paintbrush.png";
import shoppingcart from "../assets/shoppingcart.png";
import dvd from "../assets/dvd.png";
import tools from "../assets/tools.png";

const Offer = () => {
  return (
    <div className={classes["offers_div"]}>
      <OfferItem
        img={tools}
        name="Naprawa Komputerów"
        content="Profesjonalne naprawy komputerów, szybkie rozwiązywanie problemów sprzętowych i oprogramowania. Przywracamy sprawną pracę Twojego komputera."
      />
      <OfferItem
        img={dvd}
        name="Instalacja Oprogramowania"
        content="Pełna gama usług instalacji oprogramowania dostosowanych do Twoich potrzeb. Instalujemy i konfigurujemy różnorodne aplikacje, abyś mógł cieszyć się pełną funkcjonalnością swojego komputera."
      />
      <OfferItem
        img={paintbrush}
        name="Oczyszczanie Komputerów"
        content="Skuteczne oczyszczanie komputerów z niepotrzebnych plików, wirusów i szkodliwego oprogramowania. Twój komputer będzie działał szybko i sprawnie po naszej interwencji."
      />
      <OfferItem
        img={shoppingcart}
        name="Zakup Części / Komputerów"
        content="Profesjonalne doradztwo i pomoc w zakupie części komputerowych oraz gotowych komputerów. Zapewniamy wysoką jakość sprzętu i dostosowanie do Twoich potrzeb."
      />
    </div>
  );
};

const OfferItem = (props) => {
  return (
    <AnimatedElement animationType="grow" base="animated-v2">
      <div className={classes["offer"]}>
        <img src={props.img} className={classes["offer-img"]} alt="" />
        <h3 className={classes["offer-heading"]}>{props.name}</h3>
        <p className={classes["offer-text"]}>{props.content}</p>
      </div>
    </AnimatedElement>
  );
};

export default Offer;
