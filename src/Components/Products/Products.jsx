import React from "react";
import "./products.css";

function Products({id, imgSrc = "", title = "", price = 0,quantity, onClick, show, setDataModal }) {
  function showModal() {
    setDataModal({
      imgSrc: imgSrc,
      id: id,
      title: title,
      price: price,
      quantity:quantity
    });
    show();
  }

  return (
    <div className="product ">
      <a href="!#">
        <img src={imgSrc} alt={title} />
        <p>{title}</p>
      </a>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-success w-50 text-center mb-3 "
          onClick={showModal}
        >
          Quick view
        </button>
      </div>

      <div className="product-price">
        <div>${price}</div>
        <button onClick={onClick} className="button primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Products;
