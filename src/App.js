import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
//import Menu from '@material-ui/icons/Menu';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';

function App() {
  const [cartNumber, setCartNumber] = useState(0);
  const [products, setProducts] = useState([
    {url: 'https://m.media-amazon.com/images/I/813Uik1b-7L._AC_UL320_.jpg', title: 'The Lean Startup by Eric Ries', price: '5,64'},
    {url: 'https://m.media-amazon.com/images/I/416ipvjdhjS._AC_UL320_.jpg', title: 'Housekeeper Client Data Log Book | Professional House Cleaning Client Tracking Book | Appointment Book with A thru Z Alpha Tabs to Record', price: '5,30'},
    {url: 'https://m.media-amazon.com/images/I/81iUXe9ygkL._AC_UL320_.jpg', title: 'Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future', price: '10,85'},
    {url: 'https://m.media-amazon.com/images/I/71-X9PLxPKL._AC_UL320_.jpg', title: 'Elon Musk: The Life, Lessons & Rules For Success', price: '8,83'},
    {url: 'https://m.media-amazon.com/images/I/71iEVsSP1GL._AC_UL320_.jpg', title: 'The Power of Habit: Why We Do What We Do, and How to Change', price: '17,67'},
    {url: 'https://m.media-amazon.com/images/I/81PIXB1RBEL._AC_UL320_.jpg', title: 'Influence: The Psychology of Persuasion', price: '17,74'},
    {url: 'https://m.media-amazon.com/images/I/71j5fJvL6IL._AC_UL320_.jpg', title: 'The Definitive Book of Body Language: How to read others attitudes by their gestures', price: '9,86'},
    {url: 'https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UL320_.jpg', title: 'Rich Dad Poor Dad: What The Rich Teach Their Kids about Money That the Poor and Middle Class Do Not', price: '9,72'}
  ])

  return (
    <div className="App">
      <Navbar 
        cartNumber={cartNumber} 
        setCartNumber={setCartNumber}
        
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home products={products} />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
