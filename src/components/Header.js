import React from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleNavigateToCart = () => {
    navigate('/cart');  
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
      <IconButton onClick={handleNavigateToCart}>
        <Badge badgeContent={cartItemCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Header;
