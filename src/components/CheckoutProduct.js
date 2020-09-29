import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../StateProvider";
import HalfRating from "./Rating";

function CheckoutProduct({ id, title, rating, price, img }) {
  const [{ basket, subTotal }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      price: price,
    });
  };
  return (
    <div className='checkout__cart'>
      <div className='checkout__cartImage'>
        <img className='checkout__itemImage' src={img} alt='prod-1' />
      </div>
      <div className='checkout__itemInfo'>
        <p className='checkout__basketTitle'>{title}</p>
        <HalfRating stars={rating} />
        <p>
          <strong>₹{price}</strong>
        </p>
        <div className='product__rating'>
          {/* {Array(rating)
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
          style={{ marginTop: "5px" }}
          onClick={removeFromBasket}>
          Remove from cart
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
