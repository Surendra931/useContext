import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, IconButton } from '@mui/material';
import { useCart } from '../context/CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const [inCart, setInCart] = useState(cart.some(item => item.id === product.id));

  const handleAddToCart = () => {
    addToCart(product);
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setInCart(false);
  };

  const handleIncrease = () => {
    updateQuantity(product.id, cart.find(item => item.id === product.id).quantity + 1);
  };

  const handleDecrease = () => {
    const currentQuantity = cart.find(item => item.id === product.id).quantity;
    if (currentQuantity > 1) {
      updateQuantity(product.id, currentQuantity - 1);
    } else {
      handleRemoveFromCart();
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">${product.price}</Typography>
        
        
        {!inCart ? (
          <Button onClick={handleAddToCart} variant="contained" sx={{ marginTop: 2 }}>
            Add to Cart
          </Button>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <IconButton onClick={handleDecrease} color="primary">
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2">{cart.find(item => item.id === product.id).quantity}</Typography>
            <IconButton onClick={handleIncrease} color="primary">
              <AddIcon />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
