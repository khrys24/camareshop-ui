import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import swal from "sweetalert";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
    // const imageUrl = "http://localhost:3001/images/";

    const navigate = useNavigate();

    const goToItem = () => {
        const loggedIn = localStorage.getItem("isLoggedIn");

        if(loggedIn == null) {
            swal("Please login first to order.", "", "info");
            navigate("/login");
        } else {
            localStorage.setItem("selectedProduct", JSON.stringify(props.data));
            navigate("/addtocart");
        }
    }

    return (
        <Grid item xl={4} lg={4} md={6} xs={9}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", 
                alignContent: "center"
            }}
        >
            <Card
                sx={{
                    boxShadow: "none",
                    border: "none",
                    display: "flex",
                    flexDirection: "column"
                }}
                className="featured"
                >
                <CardMedia
                    className="featured--photo"
                    component="img"
                    alt={props.data.name}
                    height="375"
                    image={process.env.REACT_APP_IMAGE_URL + '/' + props.data.image}
                    sx={{ objectFit: "cover" }}
                    onClick={goToItem}
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
                        variant="contained"
                        size="large"
                        color="secondary"
                        sx={{ color: "white", fontFamily: "Varela Round", fontSize: "12px" }}
                        onClick={goToItem}
                    >
                        BUY
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}


export default ProductCard;
