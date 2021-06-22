import React from "react";
import "./products.css";

function Products({ imgSrc = "", title = "", price = 0 ,onClick}) {
  return (
      <div className="product">
        <a href="#dress1">
          <img src={imgSrc} alt={title} />
          <p>{title}</p>
        </a>
        <div className="product-price">
          <div>${price}</div>
          <button onClick={onClick} className="button primary">Add To Cart</button>
        </div>
      </div>
  );
}

export default Products;
