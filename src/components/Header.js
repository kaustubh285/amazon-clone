import React from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to='/'>
        <div className='header__logoDiv'>
          <img
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='amazon_logo'
            className='header__logo'
          />
          <p>.in</p>
        </div>
      </Link>
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
        <Link to='/checkout'>
          <div className='header__navOptionCard'>
            <ShoppingCartTwoToneIcon />

            <span
              style={{
                color: "#f08804",
                marginTop: "10px",
                paddingLeft: "5px",
              }}>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
