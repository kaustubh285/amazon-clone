import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./checkout.css";
import HalfRating from "./Rating";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, subTotal }, dispatch] = useStateValue();

  const adv = [
    "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif",
  ];

  const adv_number = Math.floor(Math.random() * adv.length);

  console.log(adv_number);
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src={adv[adv_number]} className='checkout__ad' alt='ad' />
        <div className='checkout__basket'>
          <h2 className='checkout__Title'>Your shopping basket</h2>
          {basket.map((item, key) => (
            <div className='checkout__cart'>
              <div className='checkout__cartImage'>
                <img
                  className='checkout__itemImage'
                  src={item.img}
                  alt='prod-1'
                />
              </div>
              <div className='checkout__itemInfo'>
                <p className='checkout__basketTitle'>{item.title}</p>
                <HalfRating stars={item.rating} />
                <p>
                  <strong>₹{item.price}</strong>
                </p>
                <div className='product__rating'>
                  {/* {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <p key={i}>
                        <span role='img' aria-label='star'>
                          ⭐
                        </span>
                      </p>
                    ))} */}
                </div>
                <Button
                  color='default'
                  variant='outlined'
                  style={{ marginTop: "5px" }}>
                  Remove from cart
                </Button>
              </div>
            </div>
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
