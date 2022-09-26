import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/MenuHome.css";
import { Link } from "react-router-dom";

const MenuHome = () => {
  return (
    <div
      className="container-fluid my-5 p-5"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="menu--selections gap-5">
          <Card
            sx={{
              width: 400,
              boxShadow: "none",
              border: "none",
              height: "550px",
              display: "flex",
              flexDirection: "column",
            }}
            className="featured"
          >
            <CardMedia
              className="featured--photo"
              component="img"
              alt="Black Forest Cake"
              height="375"
              image="./images/black_forest_cake_1.png"
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
                Black Forest Gâteau
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Varela Round" }}>
                Consists of several layers of chocolate sponge cake sandwiched
                with whipped cream and cherries.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "auto",
              }}
            >
              <Link to="/products" style={{ textDecoration: "none" }}>
                <Button
                  size="large"
                  color="secondary"
                  sx={{ color: "#ce65cc", fontFamily: "Varela Round" }}
                >
                  Try It
                </Button>
              </Link>
            </CardActions>
          </Card>

          <Card
            sx={{
              width: 400,
              boxShadow: "none",
              border: "none",
              height: "550px",
              display: "flex",
              flexDirection: "column",
            }}
            className="featured"
          >
            <CardMedia
              className="featured--photo"
              component="img"
              alt="Orange-Strawberry Fondant"
              height="375"
              image="./images/orange_strawberry_fondant_cake_1.png"
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
                Orange-Strawberry Fondant
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Varela Round" }}>
                Citrusy and sweet, try our orange-straberry fondant cake to
                satisfy your fruity cravings.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "auto",
              }}
            >
              <Link to="/products" style={{ textDecoration: "none" }}>
                <Button
                  size="large"
                  color="secondary"
                  sx={{ color: "#ce65cc", fontFamily: "Varela Round" }}
                >
                  Try It
                </Button>
              </Link>
            </CardActions>
          </Card>

          <Card
            sx={{
              width: 400,
              boxShadow: "none",
              border: "none",
              height: "550px",
              display: "flex",
              flexDirection: "column",
            }}
            className="featured"
          >
            <CardMedia
              className="featured--photo"
              component="img"
              alt="Strawberry Sponge Cake"
              height="375"
              image="./images/strawberry_sponge_cake_1.png"
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
                Strawberry Sponge Cake
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Varela Round" }}>
                Strawberries, blueberries and raspberries combined together atop
                soft sponge cake.
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "auto",
              }}
            >
              <Link to="/products" style={{ textDecoration: "none" }}>
                <Button
                  size="large"
                  color="secondary"
                  sx={{ color: "#ce65cc", fontFamily: "Varela Round" }}
                >
                  Try It
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>

        <Link
          to="/products"
          style={{
            color: "#ce65cc",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
            fontFamily: "Varela Round",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            sx={{ color: "#ce65cc", border: "1px solid #ce65cc" }}
          >
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MenuHome;
