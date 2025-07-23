import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Men from './component/Men';
import Women from './component/Women';
import Collection from './component/Collection';
import Contact from './component/Contact';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import Login from './component/Login';
import Register from './component/Register';


const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage cart={cart} setCart={setCart} />} />
        <Route path="/men" element={<Men cart={cart} setCart={setCart} />} />
        <Route path="/women" element={<Women cart={cart} setCart={setCart} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/product/:productId" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
