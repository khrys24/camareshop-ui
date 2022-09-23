import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ user, onLogout }) => {
  let btn = (
    <Link to="/login" sx={{ color: "white", "&:hover": { color: "white" } }}>
      <PersonIcon />
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
          style={{ color: "white", border: "0" }}
        >
          {user.first_name}
        </button>
        <ul className="dropdown-menu">
          <li
            onClick={() => {
              onLogout({});
              localStorage.removeItem("email");
              localStorage.removeItem("isLoggedIn");
            }}
            style={{
              cursor: "pointer",
              textAlign: "center",
              fontSize: "16px",
              textTransform: "capitalize",
            }}
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
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#9c27b0",
            position: "fixed",
            top: "0",
            zIndex: "5",
          }}
        >
          <Toolbar>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white", border: "none" }}
              >
                <MenuIcon />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    <Link
                      to="/about"
                      component={RouterLink}
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        "&:hover": { color: "inherit" },
                      }}
                    >
                      About
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <Link
                      to="/menu"
                      component={RouterLink}
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        "&:hover": { color: "inherit" },
                      }}
                    >
                      Menu
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    <Link
                      to="/contact"
                      component={RouterLink}
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        "&:hover": { color: "inherit" },
                      }}
                    >
                      Contact
                    </Link>
                  </button>
                </li>
              </ul>
            </div>

            <Link
              to="/"
              component={RouterLink}
              color="inherit"
              underline="none"
              sx={{ margin: "auto" }}
            >
              <img
                src="./images/camare_cakes_logo_4.svg"
                alt="Camare Cakes"
                style={{ height: "70px" }}
              />
            </Link>

            <Button color="inherit">
              <ShoppingCartIcon />
            </Button>
            {
              <Button color="inherit">
                {
                  <Link
                    to="/login"
                    component={RouterLink}
                    color="inherit"
                    sx={{ "&:hover": { color: "white" } }}
                  >
                    {btn}
                  </Link>
                }
              </Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
