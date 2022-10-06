import React, { useState, useContext } from "react";
import { AppBar, Toolbar, Button, Box, Drawer } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Context from "./store/Context";
import Cart from "./Cart";
import { lineHeight } from "@mui/system";

const Navbar = ({ user, onLogout }) => {
  /*   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; */

  let userList = user.is_admin ? (
    <Link
      to="/users"
      component={RouterLink}
      color="inherit"
      underline="none"
      sx={{ "&:hover": { color: "inherit" } }}
    >
      USER LIST
    </Link>
  ) : (
    ""
  );

  const loggedIn = localStorage.getItem("isLoggedIn");
  // const isAdmin = JSON.parse(localStorage.getItem("User_Details")).is_admin;

  if (user.id || localStorage.getItem("isLoggedIn")) {
    let checkAdmin = JSON.parse(localStorage.getItem("User_Details"));

    userList =
      checkAdmin && checkAdmin.is_admin == 1 ? (
        <Link
          to="/users"
          component={RouterLink}
          color="inherit"
          underline="none"
          sx={{ "&:hover": { color: "inherit" } }}
        >
          USER LIST
        </Link>
      ) : (
        ""
      );
  }

  const orderList = loggedIn === "true" ? (
    <Link
      sx={{ "&:hover": { color: "inherit" } }}
      to="/orderlist"
      component={RouterLink}
      color="inherit"
      underline="none"
    >
      ORDERS
    </Link>
   ) : (
    ""
   );

  let productList = user.is_admin ? (
    <Link
      to="/productlist"
      component={RouterLink}
      color="inherit"
      underline="none"
      sx={{ "&:hover": { color: "inherit" } }}
    >
      PRODUCT LIST
    </Link>
  ) : (
    ""
  );

  if (user.id || localStorage.getItem("isLoggedIn")) {
    let checkAdmin = JSON.parse(localStorage.getItem("User_Details"));

    productList =
      checkAdmin && checkAdmin.is_admin === 1 ? (
        <Link
          to="/productlist"
          component={RouterLink}
          color="inherit"
          underline="none"
          sx={{ "&:hover": { color: "inherit" } }}
        >
          PRODUCT LIST
        </Link>
      ) : (
        ""
      );
  }

  let btn = (
    <Link to="/login" style={{ color: "white", "&:hover": { color: "white" } }}>
      <Button color="inherit">
        <PersonIcon />
      </Button>
    </Link>
  );

  if (user.id || localStorage.getItem("isLoggedIn")) {
    let userName = JSON.parse(localStorage.getItem("User_Details")).first_name;

    btn = (
      <div className="dropdown logout" style={{ height: "40px" }}>
        <button
          className="btn text-decoration-none dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            color: "white",
            border: "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          {userName}
        </button>
        <ul className="dropdown-menu">
          <li
            onClick={() => {
              onLogout({});
              localStorage.removeItem("email");
              localStorage.removeItem("isLoggedIn");
              localStorage.removeItem("User_Details");
              localStorage.removeItem("cartItems");
              localStorage.removeItem("selectedProduct");
              window.dispatchEvent(new Event("storage"));
            }}
            style={{
              cursor: "pointer",
              textAlign: "center",
              fontSize: "16px",
              textTransform: "capitalize",
            }}
          >
            LOGOUT
          </li>
        </ul>
      </div>
    );
  }

  let logoutMenu = (
    <div
      className="logout-menu"
      onClick={() => {
        onLogout({});
        localStorage.removeItem("email");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("User_Details");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("selectedProduct");
      }}
    >
      LOGOUT
    </div>
  );

  if (!JSON.parse(localStorage.getItem("isLoggedIn"))) {
    logoutMenu = (
      <div
        className="logout-menu d-none"
        onClick={() => {
          onLogout({});
          localStorage.removeItem("email");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("User_Details");
          localStorage.removeItem("cartItems");
          localStorage.removeItem("selectedProduct");
        }}
      >
        LOGOUT
      </div>
    );
  }

  const [isToggle, setToggle] = useState(false);
  const context = useContext(Context);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            height: "75px",
          }}
        >
          <Toolbar>
            <Button
              id="basic-button"
              /*               aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined} */
              onClick={() => setIsDrawerOpen(true)}
              edge="start"
              color="inherit"
            >
              <MenuIcon />
            </Button>

            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              PaperProps={{
                sx: { backgroundColor: "#9c27b0", color: "white" },
              }}
            >
              <Box
                p={2}
                width="250px"
                textAlign="center"
                role="presentation"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  lineHeight: "4rem",
                }}
              >
                <img
                src="./images/camare_cakes_logo_4.svg"
                alt="Camare Cakes"
                style={{ height: "70px", margin: "20px auto", }}
              />
                <Link
                  sx={{ "&:hover": { color: "inherit" } }}
                  to="/about"
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  ABOUT
                </Link>
                <Link
                  sx={{ "&:hover": { color: "inherit" } }}
                  to="/products"
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  MENU
                </Link>
                {orderList}
                <Link
                  sx={{ "&:hover": { color: "inherit" } }}
                  to="/contact"
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  CONTACT
                </Link>
                {userList}
                {productList}
                {logoutMenu}
              </Box>
            </Drawer>

            {/* old nav */}
            {/*             <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{ sx: { width: "250px" } }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link
                sx={{ "&:hover": { color: "inherit" } }}
                to="/about"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Link>
              <Link
                sx={{ "&:hover": { color: "inherit" } }}
                to="/products"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                <MenuItem onClick={handleClose}>Menu</MenuItem>
              </Link>
              <Link
                sx={{ "&:hover": { color: "inherit" } }}
                to="/orderlist"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                <MenuItem onClick={handleClose}>Orders</MenuItem>
              </Link>
              <Link
                sx={{ "&:hover": { color: "inherit" } }}
                to="/contact"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Link>
              {userList}
              {productList}
              {logoutMenu}
            </Menu> */}

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

            <Button
              color="inherit"
              // className={(loggedIn == null || isAdmin == 1) ? "hidden" : ""}
            >
              <Link
                // to="/cart"
                component={RouterLink}
                color="inherit"
                sx={{ "&:hover": { color: "white" } }}
              >
                <Cart
                
              isToggle={isToggle}
              setToggle={setToggle}
              carts={context.carts}
        />
              </Link>
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
