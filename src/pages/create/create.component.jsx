import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./create.styles.css";
import Navbar from "../../components/navBar/navBar.component";
import CreateDogForm from "../../components/createForm/createDogForm.component";
import { getTemperament } from "../../redux/actions/actions";
function Create() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.temperaments);

  return (
    <div className="create-container">
      <Navbar />
      <h1>Create your breed</h1>
      <CreateDogForm props={temperaments} />
      <button>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
}

export default Create;
