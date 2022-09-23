import React, { useState, useEffect } from 'react';
import { Grid, CardMedia, Card, Typography, TextField, Button } from '@mui/material';


const AddToCart = (props) => {
    const [product, setProduct] = useState({ name: "", image: "" });
    const imageUrl = "http://localhost:3001/images/";

    useEffect(() => {
        setProduct(JSON.parse(localStorage.getItem('selectedProduct')));
    }, [])


    return (
        <Grid container sx={{ padding: "120px 150px" }}>
            <Grid item lg={6} md={6} xs={12}>
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
            <Grid item lg={6} md={6} xs={12}
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
                <TextField id="cake-quantity" label="Quantity" variant="outlined" type="number"
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
