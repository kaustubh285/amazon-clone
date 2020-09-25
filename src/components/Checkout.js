import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, subTotal }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          className='checkout__ad'
          alt='ad'
        />
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
                <p>
                  <strong>₹{item.price}</strong>
                </p>
                <div className='product__rating'>
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <p key={i}>
                        <span role='img' aria-label='star'>
                          ⭐
                        </span>
                      </p>
                    ))}
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
