import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useCart } from '../context/CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncrease = (productId) => {
    updateQuantity(productId, cart.find(item => item.id === productId).quantity + 1);
  };

  const handleDecrease = (productId) => {
    const currentQuantity = cart.find(item => item.id === productId).quantity;
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>

      {cart.length > 0 ? (
        cart.map(item => (
          <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Typography variant="body1" sx={{ flex: 1 }}>
              {item.name} - ${item.price} x {item.quantity}
            </Typography>
            <IconButton onClick={() => handleDecrease(item.id)} color="primary">
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={() => handleIncrease(item.id)} color="primary">
              <AddIcon />
            </IconButton>
            <Button onClick={() => removeFromCart(item.id)} color="error">
              Remove
            </Button>
          </Box>
        ))
      ) : (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}
    </Box>
  );
};

export default CartPage;
