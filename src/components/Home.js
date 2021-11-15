import React from 'react';
import '../styles/Home.scss';

const Home = (props) => {
  return(
    <div className="home-page">
      {
        props.products.map((prod) =>
          <div className="product-container">
            <img src={prod.url} alt="product" />
            <span className="product-title">{prod.title}</span>
            <span className="product-price">{prod.price}$</span>
            <button className="add-button">Add to cart</button>
          </div>
        )
      }

      
    </div>
  )
}

export default Home;
