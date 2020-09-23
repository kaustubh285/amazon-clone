import { Button } from "@material-ui/core";
import React from "react";
import "./product.css";

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>TP-Link LB120 Wi-Fi SmartLight</p>
        <div className='product__rating'>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
        <p className='product__price'>
          <small>
            ₹<strong>799</strong>
          </small>
        </p>
      </div>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/21TCPoTq%2BkL.jpg'
        alt='item'
      />
      <Button color='default' variant='outlined'>
        Add to cart
      </Button>
    </div>
  );
}

export default Product;
