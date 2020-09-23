import { Button } from "@material-ui/core";
import React from "react";
import "./product.css";

function Product({ title, rating, price, img }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
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
      <Button color='default' variant='outlined'>
        Add to cart
      </Button>
    </div>
  );
}

export default Product;
