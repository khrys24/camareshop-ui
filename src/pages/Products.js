import React, { useState, useEffect } from 'react';
import MenuBanner from '../components/MenuBanner';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { Grid } from '@mui/material';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:3001/products/list')
    .then((response) => {   
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
        <MenuBanner />
        <Grid container={true} spacing={10} sx={{ padding: '100px'}}>
          {
            products.map((product) => {
              return <ProductCard data={product} />
            })
          }
        </Grid>
    </div>
  )
}



export default Products;
