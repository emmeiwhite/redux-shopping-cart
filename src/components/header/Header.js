import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="section main-nav">
        <span className="brand">ReduxCart</span>
        <div className="cart-items-wrapper">
          <div className="total-cart-item">4</div>
        </div>
      </nav>
    </header>
  );
}
