import React from "react";
import "./products.css";

function Products({ imgSrc = "", title = "", price = 0 }) {
  return (
    <li>
      <div className="product">
        <a href="#dress1">
          <img src={imgSrc} alt={title} />
          <p>{title}</p>
        </a>
        <div className="product-price">
          <div>${price}</div>
          <button className="button primary">Add To Cart</button>
        </div>
      </div>
    </li>
  );
}

export default Products;
