import React, { useState, useEffect } from 'react';
import { Grid, CardMedia, Card, Typography, TextField, Button } from '@mui/material';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import '../css/addtocart.css';



const AddToCart = (props) => {
    const [product, setProduct] = useState({ name: "", image: "" });
    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    const imageUrl = "http://localhost:3001/images/";


    useEffect(() => {
        setProduct(JSON.parse(localStorage.getItem('selectedProduct')));
    }, [])

    const onInputChange = (e) => {
        setQty(e.target.value);
    };

    const addItem = () => {
        let items = [];
        let index = -1;

        if (localStorage.getItem("cartItems") !== null) {
            items = JSON.parse(localStorage.getItem("cartItems")); //array of products added to cart

            //check if product exist in array ==> product.product_id = 14
            // check if product is already added to cart

            index = items.findIndex((row) => row.product_id === product.product_id);
        }

        if (index === -1) {
            items.push({ ...product, quantity: qty });

            localStorage.setItem("cartItems", JSON.stringify(items));

            swal("Added to Cart!", "", "success");

            setTimeout(() => {
                navigate("/products");
            }, 2000);
        } else {
            swal("Product is already added!", "You can update this item on your shopping cart.", "info");
        }
    }

    return (
        <Grid container className='grid-container' sx={{ padding: "120px 150px" }}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Card>
                    <CardMedia
                        className="featured--photo"
                        component="img"
                        alt={product.name}
                        height="500"
                        image={imageUrl + product.image}
                        sx={{ objectFit: "cover" }}
                    />
                </Card>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
                sx={{
                    padding: "100px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        color: "#ce65cc",
                        fontWeight: "bold",
                        fontFamily: "Varela Round",
                        fontSize: "xx-large"
                    }}
                >
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Varela Round", fontSize: "large" }}>
                    {product.description}
                </Typography>
                <Typography sx={{ fontFamily: "Varela Round", fontSize: "large", marginBottom: "10px" }}>
                    ₱{product.price}
                </Typography>
                <TextField
                    id="cake-quantity"
                    label="Quantity"
                    variant="outlined"
                    type="number"
                    value={qty}
                    onChange={onInputChange}
                    sx={{
                        display: "flex",
                        alignSelf: "center",
                        width: "50%",
                        marginBottom: "10px"
                    }}
                />
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={addItem}
                    sx={{
                        color: "white",
                        fontFamily: "Varela Round",
                        display: "flex",
                        alignSelf: "center",
                        height: "40px"
                    }}
                >
                    Add to Cart
                </Button>
            </Grid>
        </Grid>
    )
}

export default AddToCart;
