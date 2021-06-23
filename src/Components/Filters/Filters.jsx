import React from "react";
import "./filters.css";
function Filters({ filter, setFilter, len }) {
  function change(e) {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  }

  return (
    <div className="filter">
      <div>{len} Products</div>
      <div>
        <span>Order </span>
        <select onChange={change} value={filter.price} name="price" id="">
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div>
        <span>Filter </span>
        <select name="size" onChange={change} value={filter.size} id="">
          <option value="ALL">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
