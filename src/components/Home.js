import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__img' src='/AmazonBackdrop.jpg' alt='prime' />
        <div className='home__row'>
          <Product />
        </div>
        <div className='home__row'>
          <Product />
        </div>
        <div className='home__row'>
          <Product />
        </div>
        <div className='home__row'>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
