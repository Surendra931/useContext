import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AppComponent = () => {
  const { cart } = useCart();

  return (
    <Router>
      <div>
        <header>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1>My Shop</h1>
          </Link>

          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </header>

      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <CartProvider>
    <AppComponent />
  </CartProvider>
);
