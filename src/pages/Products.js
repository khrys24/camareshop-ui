import React, { useState, useContext, useEffect } from "react";
import MenuBanner from "../components/MenuBanner";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import swal from "sweetalert";
import { Grid } from "@mui/material";
import Context from "../components/store/Context";

const Products = () => {
  const [products, setProducts] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products/list`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        swal("Error", err.response.message, "error");
      });
  }, []);

  return (
    <div>
      <MenuBanner />
      <Grid
        container={true}
        spacing={10}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "3%",
          marginTop: "10px"
        }}>
        {
          products.map((product) => {
            return <ProductCard key={product.product_id} data={product} />
          })
        }
      </Grid>
    </div>
  );
};

export default Products;
