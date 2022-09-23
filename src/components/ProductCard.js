import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
    console.log('props.data =======>', props.data);
    const imageUrl = "http://localhost:3001/images/";

    const navigate = useNavigate();

    const addToCart = () => {
        localStorage.setItem("selectedProduct", JSON.stringify(props.data));
        navigate("/addtocart");
    }

    return (
        <Grid item lg={4} md={4} xs={12}>
            <Card
                sx={{
                    // width: 300,
                    boxShadow: "none",
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    objectFit: "cover"
                }}
                className="featured"
            >
                <CardMedia
                    className="featured--photo"
                    component="img"
                    alt={props.data.name}
                    height="375"
                    image={imageUrl + props.data.image}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            color: "#ce65cc",
                            fontWeight: "bold",
                            fontFamily: "Varela Round",
                        }}
                    >
                        {props.data.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "Varela Round" }}>
                        {props.data.description}
                    </Typography>
                    <Typography>
                        ₱{props.data.price}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "auto",
                    }}
                >
                    <Button
                        variant="text"
                        size="large"
                        color="secondary"
                        sx={{ color: "#ce65cc", fontFamily: "Varela Round" }}
                        onClick={addToCart}
                    >
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}


export default ProductCard;
