import "./filter.styles.css";
import Option from "../../components/temperamentsOptions/tempOptions.component";

function Filter({
  handleOrderWeight,
  handleOrderName,
  handleFilterByHosted,
  temperaments,
  handleFilter,
}) {
  return (
    <div className="filter-container">
      <select onChange={handleOrderWeight}>
        <option>Order Weight</option>
        <option value="A">Ascendent</option>
        <option value="D">Descendent</option>
      </select>
      <select onChange={handleOrderName}>
        <option>Order Name</option>
        <option value="A">Ascendent</option>
        <option value="D">Descendent</option>
      </select>
      <select onChange={handleFilterByHosted}>
        <option>Host</option>
        <option value="API">API</option>
        <option value="DB">DB</option>
      </select>
      <Option props={temperaments} handleFilter={handleFilter} />
    </div>
  );
}

export default Filter;
