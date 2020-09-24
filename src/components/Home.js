import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__imgDes'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684200_.jpg'
          alt='prime'
        />
        <img className='home__imgMob' src='/AmazonBackdrop.jpg' alt='prime' />
        <div className='home__row'>
          <Product
            title='TP-Link LB120 Wi-Fi SmartLight'
            rating={4}
            price='799'
            img='https://images-na.ssl-images-amazon.com/images/I/21TCPoTq%2BkL.jpg'
          />
          <Product
            title='TP-Link Kasa Smart WiFi Light Bulb, Dimmable by TP-Link No Hub Required, Works with Alexa & Google (KL110) '
            rating={3}
            price='699'
            img='https://images-na.ssl-images-amazon.com/images/I/41lp2Y6iwPL._SL1000_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            title='Beardo Turmeric Clay Mask For Men, 50 gm '
            rating={5}
            price='235'
            img='https://images-na.ssl-images-amazon.com/images/I/41Gcp-UAlLL.jpg'
          />
          <Product
            title='WuFuYuan - Tapioca Pearl (Black) - Net Wt. 8.8 Oz.'
            rating={2}
            price='1,679'
            img='https://images-na.ssl-images-amazon.com/images/I/610v9u2ZRSL._SL1000_.jpg'
          />
          <Product
            title='Acer B227Q 21.5" IPS LED Full HD Monitor - Inbuilt HD Web CAM with MIC - Height Adjustment Pivot '
            rating={4}
            price='11,567'
            img='https://images-na.ssl-images-amazon.com/images/I/71fFh2JesVL._SL1500_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            title='(Renewed) Lenovo Legion Y7000 9th gen Intel Core i5 15.6 inch FHD Gaming Laptop (8GB/1TB HDD+256 GB SSD/Windows 10/NVIDIA GTX 1050 3GB Graphics/Black/2.3Kg), 81V4000LIN '
            rating={3}
            price='64,999'
            img='https://images-na.ssl-images-amazon.com/images/I/81R0SvfG53L._SL1500_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
