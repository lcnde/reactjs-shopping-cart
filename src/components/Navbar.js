import React from 'react';
import '../styles/Navbar.scss';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = (props) => {
  return(
    <div className="navbar-container">
      <img className="forest-logo" src="images/forest_logo.png" alt="logo" />
      <div className="input-container">
        <div className="categories">
          Tutte le categorie
        </div>
        <input />
        <div className="search-icon-container">
          <SearchIcon style={{ color: '#333333', fontSize: '30px' }}/>
        </div>
      </div>
      <div className="cart-container">
        <div className="items-number">
          {props.cartNumber}
        </div>
        <img className="shopping-cart-icon" src="images/shopping_cart.png" alt="icon" />
      </div>
    </div>
  )
}

export default Navbar;
