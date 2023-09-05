import { Link } from "react-router-dom";
import "./card.styles.css";
function Card({ dog }) {
  return (
    <div className="card-container-c" key={dog.id}>
      <h2>{dog.name.toUpperCase()}</h2>

      <div>
        <Link to={`/home/${dog.id}`}>
          <img src={dog.image?.url || dog.image} alt="image not found" />
        </Link>
      </div>
      <h3 className="card-container-c-body-font">
        TEMPERAMENT: {dog.temperament}
      </h3>
      <h3 className="card-container-c-body-font">
        WEIGHT: {dog.weight.metric} kg.
      </h3>
    </div>
  );
}

export default Card;
