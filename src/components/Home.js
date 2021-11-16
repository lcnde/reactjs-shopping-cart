import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';

const Home = (props) => {

  const addToCart = (prod) => {
    //if checkout includes prod.id then alert()  
    props.setCheckout(prevState => [...prevState, {id: prod.id, url: prod.url, title: prod.title, price: prod.price}])
    
  }

  
  useEffect(() => {
    props.handleCart();
    console.log(props.checkout)    
  }, [props, props.checkout]) //not sure why it had to write props twice

  return(
    <div className="home-page">
      {
        props.products.map((prod) =>
          <div className="product-container">
            <img src={prod.url} alt="product" />
            <span className="product-title">{prod.title}</span>
            <span className="product-price">{prod.price} $</span>
            <button className="add-button" onClick={() => addToCart(prod)}>Add to cart</button>
          </div>
        )
      }
    </div>
  )
}

export default Home;
