import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogById } from "../../redux/actions/actions";

import "./detail.styles.css";

function Detail() {
  const { id } = useParams();
  const dog = useSelector((state) => state.dog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogById(id));
    return () => {};
  }, [dispatch, id]);

  return (
    <div>
      <h1 className="card-container-font-title">{dog.name}</h1>

      <div className="card-container">
        <img src={dog.image} alt={dog.image} />
        <h2 className="card-container-font">Id: {dog.id}</h2>
        <h2 className="card-container-font">
          HEIGHT (metric): {dog.height?.metric} cm.
        </h2>
        <h2 className="card-container-font">
          WEIGHT (metric): {dog.weight?.metric} kg.
        </h2>
        <h2 className="card-container-font">
          TEMPERAMENTS: {dog.temperaments}
        </h2>
        <h2 className="card-container-font">LIFE SPAN: {dog.life_span}</h2>
      </div>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <strong></strong>
    </div>
  );
}

export default Detail;
