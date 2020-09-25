import { Button } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./product.css";

function Product({ id, title, rating, price, img }) {
  const [{ basket, subTotal }, dispatch] = useStateValue();

  console.log(basket);
  console.log(subTotal);
  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        img: img,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <span role='img' aria-label='star'>
                  ⭐
                </span>
              </p>
            ))}
        </div>
        <p className='product__price'>
          <small>
            ₹<strong>{price}</strong>
          </small>
        </p>
      </div>
      <img src={img} alt='item' />
      <Button color='default' variant='outlined' onClick={addtobasket}>
        Add to cart
      </Button>
    </div>
  );
}

export default Product;
