import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 40 },
  { id: 4, name: 'Product 4', price: 50 },
  { id: 5, name: 'Product 5', price: 60 },
  { id: 6, name: 'Product 6', price: 70 },
  { id: 7, name: 'Product 7', price: 80 },
  { id: 8, name: 'Product 8', price: 90 },
];

const HomePage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
