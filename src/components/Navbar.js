import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({user, onLogout}) => {
  let btn = (

    <Link to="/login" sx={{color:"white",  "&:hover": { color: "white" }}}>
      <PersonIcon/>
    </Link>

  );
  if (user.id) {
    btn = (
      <div className="dropdown">
        <button
          className="btn text-decoration-none dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{color:"white"}}
        >
          {user.first_name}
        </button>
        <ul class="dropdown-menu">
          <li
            onClick={() => {
              onLogout({});
              <Navigate to="/" replace />;
            }}
            style={{cursor:"pointer", textAlign:"center"}}
          >
            Logout
          </li>
        </ul>
      </div>
    );
  }


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#9c27b0", position:"fixed", top:"0", zIndex:"5" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
              <Link
                to="/"
                component={RouterLink}
                color="inherit"
                underline="none"
                sx={{margin:"auto"}}
              >
                <img src='./images/camare_cakes_logo_4.svg' style={{height:"70px"}}/>
              </Link>
            
            <Button color="inherit">
              <ShoppingCartIcon />
            </Button>
{            <Button color="inherit">
              {<Link to="/login" component={RouterLink} color="inherit" sx={{"&:hover": { color: "white", transform:"scale(1.2)" }}}>
                {btn}
              </Link>}
            </Button>}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
