import React from "react";
import "./basket.css";
function Basket({ imgSrc = "", title = "", price = 0, onClick ,quantity}) {


  return (
    <div>
      <div>
        <img src={imgSrc} alt={title} />
      </div>
      <div>
        <div>{title}</div>
        <div className="right">
          ${price} x {quantity}{" "}
          <button onClick={onClick} className="button">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
