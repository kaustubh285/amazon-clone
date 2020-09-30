import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";

import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, subTotal }, dispatch] = useStateValue();

  const adv = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif",
  ];

  const adv_number = Math.floor(Math.random() * adv.length);

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src={adv[adv_number]}
          className='checkout__ad'
          alt='ad'
          style={{ backgroundColor: "#82d8e3" }}
        />
        <div className='checkout__basket'>
          <h2 className='checkout__Title'>Your shopping basket</h2>
          {basket.map((item, key) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              img={item.img}
              key={key}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal subTotal={subTotal} basket={basket} />
      </div>
    </div>
  );
}

export default Checkout;
