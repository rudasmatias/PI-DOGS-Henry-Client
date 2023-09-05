import Card from "../card/card.component";
import "./cards.styles.css";

function Cards({ props }) {
  const allDogs = props;
  return (
    <div className="cards-container" key="1">
      {allDogs?.map((dog) => {
        return <Card dog={dog} />;
      })}
    </div>
  );
}

export default Cards;
