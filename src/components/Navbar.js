import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";
import "./navbar.css";

function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='navbar'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2} className='logoDiv__grid'>
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
        </Grid>
        <Grid item xs={12} sm={6} m={5} className='searchCombo__grid'>
          <div className='header__search'>
            <div className='header__searchCombo'>
              <input className='header__searchInput' type='text' />
              <div className='header__searchIconDiv'>
                <SearchIcon className='header__searchIcon' />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm className='navigation__grid' container>
          <Grid item xs={1} className='navigation__gridFlag'>
            <span role='img' aria-label='India'>
              🇮🇳
            </span>
          </Grid>
          <Grid item xs={1}></Grid>
          <Link to='/login'>
            <Grid item xs className='navigation__gridText'>
              <p>Hello</p> <p>Sign In</p>
            </Grid>
          </Link>
          <Grid item xs={1}></Grid>
          <Grid item xs className='navigation__gridText'>
            <p>Orders</p> <p>& return</p>
          </Grid>

          <Grid item xs className='navigation__gridText'>
            <p>Try</p> <p>Prime</p>
          </Grid>
          <Link to='/checkout'>
            <Grid item xs={2} className='navigation__gridCart'>
              <ShoppingCartTwoToneIcon />

              <span
                style={{
                  color: "#f08804",
                  marginTop: "10px",
                  paddingLeft: "5px",
                }}>
                {basket?.length}
              </span>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
