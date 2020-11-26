import React from "react";
import "./Item.css";
export default function Item({ product, price, img }) {
  return (
    <div className="item-card">
      <div className="item-image-wrapper">
        <img src={img} alt="" className="item-image" />
      </div>

      <div className="item-details">
        <p className="item-name">{product}</p>
        <p className="item-amount">${price}</p>
        <span>remove</span>
      </div>

      <div className="arrows">
        <span className="arrow-up">^</span>
        <p>4</p>
        <span className="arrow-down">^</span>
      </div>
    </div>
  );
}
