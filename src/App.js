import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
//import Menu from '@material-ui/icons/Menu';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';

function App() {
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div className="App">
      <Navbar 
        cartNumber={cartNumber} 
        setCartNumber={setCartNumber}  
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
