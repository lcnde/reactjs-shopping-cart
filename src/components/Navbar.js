import React from 'react';
import '../styles/Navbar.scss';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return(
    <div className="navbar-container">
      <Link to="/">
        <img className="forest-logo" src="images/forest_logo.png" alt="logo" />
      </Link>
      <div className="input-container">
        <div className="categories">
          Tutte le categorie
        </div>
        <input />
        <div className="search-icon-container">
          <SearchIcon style={{ color: '#333333', fontSize: '30px' }}/>
        </div>
      </div>
      <Link to="/shop">
        <div className="cart-container">
          <div className="items-number">
            {props.cartNumber}
          </div>
            <img className="shopping-cart-icon" src="images/shopping_cart.png" alt="icon" />
        </div>
      </Link>
    </div>
  )
}

export default Navbar;
