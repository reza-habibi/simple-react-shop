import React from "react";
import "./products.css";

function Products({ imgSrc = "", title = "", price = 0 ,onClick , modalShow}) {
  return (
      <div className="product">
        <a href="!#" onClick={modalShow}>
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
