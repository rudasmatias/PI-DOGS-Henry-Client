import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postDogs } from "../../redux/actions/actions";
import validate from "./validation";
import CheckBox from "../../components/checkBox/checkBox.component";
import "./createDogForm.styles.css";

function CreateDogForm({ props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const temperamentos = props;
  const [checkBox, setCheckBox] = useState([]);

  const [dogData, setDogData] = useState({
    name: "",
    heightMax: "",
    heightMin: "",
    weightMax: "",
    weightMin: "",
    life_span: "",
    temperaments: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    heightMax: "",
    heightMin: "",
    weightMax: "",
    weightMin: "",
    life_span: "",
    temperaments: "",
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const dogCreated = {
      name: `${dogData.name}`,
      height: `${dogData.heightMin} - ${dogData.heightMax}`,
      weight: `${dogData.weightMin} - ${dogData.weightMax}`,
      life_span: `${dogData.life_span}`,
      temperaments: [dogData.temperaments, ...checkBox].join(" "),
      image: `${dogData.image}`,
    };

    if (Object.keys(errors).length) {
      return alert("No se puede crear personaje, faltan datos");
    }

    dispatch(postDogs(dogCreated));
    alert("Your dog has been Created!!");
    setDogData({
      name: "",
      heightMax: "",
      heightMin: "",
      weightMax: "",
      weightMin: "",
      life_span: "",
      temperaments: "",
      image: "",
    });

    navigate("/home");
  };

  const handleInputChange = (event, temperamentos) => {
    const { name, value } = event.target;
    setDogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors(validate({ ...dogData, [name]: value }, temperamentos));
  };

  const handleCheck = (event) => {
    setCheckBox([...checkBox, event.target.name]);
  };

  return (
    <div className="form-dog-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={dogData.name}
            onChange={handleInputChange}
          />
          <span>{errors.name}</span>
        </label>
        <br />
        <label>
          Height min(cm):
          <input
            type="text"
            name="heightMin"
            value={dogData.heightMin}
            onChange={handleInputChange}
          />
          <span>{errors.heightMin}</span>
        </label>
        <br />
        <label>
          Height max(cm):
          <input
            type="text"
            name="heightMax"
            value={dogData.heightMax}
            onChange={handleInputChange}
          />
          <span>{errors.heightMax}</span>
        </label>
        <br />
        <label>
          Weight min(kg):
          <input
            type="text"
            name="weightMin"
            value={dogData.weightMin}
            onChange={handleInputChange}
          />
          <span>{errors.weightMin}</span>
        </label>
        <br />
        <label>
          Weight max(kg):
          <input
            type="text"
            name="weightMax"
            value={dogData.weightMax}
            onChange={handleInputChange}
          />
          <span>{errors.weightMax}</span>
        </label>
        <br />
        <label>
          Life Span:
          <input
            type="text"
            name="life_span"
            value={dogData.life_span}
            onChange={handleInputChange}
          />
          <span>{errors.life_span}</span>
        </label>
        <br />
        <label>
          Temperaments:
          <input
            type="text"
            name="temperaments"
            value={dogData.temperaments}
            onChange={handleInputChange}
          />
          <span>{errors.temperaments}</span>
        </label>
        <br />
        <fieldset>
          <legend>Here you have somes temperaments</legend>
          <CheckBox props={temperamentos} handleCheck={handleCheck} />
        </fieldset>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={dogData.image}
            onChange={handleInputChange}
          />
          <span>{errors.image}</span>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateDogForm;
