function Options({ props, handleFilter }) {
  return (
    <select onChange={handleFilter}>
      <option value="Temperaments" key={"temp"}>
        Temperaments
      </option>

      {props.map((temp) => (
        <option value={temp.name} key={temp.name}>
          {temp.name}
        </option>
      ))}
    </select>
  );
}

export default Options;
