import React from "react";
import "./header.css";
import "./header-mob.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className='header'>
      <div className='header__logoDiv'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon_logo'
          className='header__logo'
        />
        <p>.in</p>
      </div>
      <div className='header__search'>
        <div
          style={{
            display: "flex",
            height: "100%",
          }}
          className='header__searchCombo'>
          <input className='header__searchInput' type='text' />
          <div className='header__searchIconDiv'>
            <SearchIcon className='header__searchIcon' />
          </div>
        </div>
      </div>
      <div className='header__nav'>
        <div className='header__navCountry'>
          <span style={{ fontSize: "35px" }} role='img' aria-label='india-logo'>
            🇮🇳
          </span>
        </div>
        <div className='header__navOption'>
          <p>Hello,</p>
          <p>Sign in</p>
        </div>
        <div className='header__navOption'>
          <p>Returns</p>
          <p>& Orders</p>
        </div>
        <div className='header__navOption'>
          <p>Try</p>
          <p>Prime</p>
        </div>
        <div className='header__navOptionCard'>
          <ShoppingCartIcon />
          <p>Cart</p>
          <span
            style={{ color: "#f08804", marginTop: "10px", paddingLeft: "5px" }}>
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
