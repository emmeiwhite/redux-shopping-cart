import React from "react";
import Item from "../item/Item";
import "./Cart.css";

export default function Cart() {
  return (
    <main className="section cart-wrapper">
      <h1 className="cart-heading">YOUR CART</h1>
      <Item
        product="Redme Note 7 MI"
        price="110"
        img="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png"
      />
      <Item
        product="Redme Prime 9 MI"
        price="210"
        img="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png"
      />
      <Item
        product="Realme Note 9 Pro"
        price="90"
        img="https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png"
      />

      {/* <p>Total Amount</p>
      <button>Clear Cart</button> */}
    </main>
  );
}
