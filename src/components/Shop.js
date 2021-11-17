import React, { useState } from 'react';
import '../styles/Shop.scss';


const Shop = (props) => {


  return(
    <div className="shop-page">
      <div className="cart-list">
        {
          props.checkout.map((prod) =>
          <div className="product-container">
              <img src={prod.url} alt="product" />
              <div className="prod-info">
                <span className="product-title">{prod.title}</span>
                <span className="product-price">{prod.price} $</span>
              </div>
            </div>
          )
        }
      </div>
      <div className="proceed">
        <h1>Total: {props.totalPrice}$</h1>
        <span>Go to checkout</span>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Shop;
